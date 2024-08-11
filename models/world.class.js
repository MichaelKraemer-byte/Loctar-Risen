class World {
    character = new Character();
    level = level_1;
    statusBars = [
        new HPstatusBar(),
        new AxeStatusBar(),
        new CoinStatusBar()
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    };


    run(){

        setInterval(()=> {
            if (!this.isStandingOnObstacle) {
                this.checkPlatformCollisions();
            }
        }, 10);
        setInterval(()=> {
            this.checkMelee();
        }, 1000 / 32);
        setInterval(()=> {
            this.checkIfThrowingObjects();
            this.checkBodyToBodyCollisions();
            this.checkThrowableObjectCollision();
            this.removeThrowableObjects();
        }, 1000 / 32);
        setInterval(()=> {
            if (!this.isStandingOnObstacle) {
                this.checkFallingFromPlatform();
            }
        }, 50);     
        setInterval(()=> {
            if (!this.isStandingOnObstacle) {
            this.checkObstacleCollisions();
            }
        }, 13);
        let checkTreasureCollision = setInterval(()=> {
            this.checkTreasureCollision(checkTreasureCollision);
        }, 1000 / 100);
    };

    setWorld(){
        this.character.world = this;

        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            enemy.gameHasStarted = true;
        });
        this.level.endboss.forEach(endboss => {
            endboss.world = this;
            endboss.gameHasStarted = true;
        });
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save(); 

        this.ctx.translate(this.camera_x, 0);

        this.drawObjectInParallaxEffect(this.level.skies);
        this.drawObjectInParallaxEffect(this.level.backDecors);
        this.drawObjectInParallaxEffect(this.level.middleDecors);
        this.drawObjectInParallaxEffect(this.level.foregrounds);
        this.addMultipleFixedObjectsToMap(this.statusBars);
        this.addMultipleFixedObjectsToMap(this.statusBars);


        this.addObjectsToMap(this.level.obstacles);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.treasures);


        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.drawObjectInParallaxEffect(this.level.axe);
        this.addThrowableObjectsToMap(this.level.throwableObjects);
        this.drawObjectInParallaxEffect(this.level.coin);

        this.drawObjectInParallaxEffect(this.level.grounds);

        this.ctx.restore(); 

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


    checkTreasureCollision(treasureCollisionInterval){
        this.level.treasures.forEach((treasure)=>{
            if (this.character.isColliding(treasure) && this.keyboard.Q) {
                treasure.img.src = treasure.unlockedImage;
                clearInterval(treasureCollisionInterval);
            }
        })
    }


    checkObstacleCollisions() {
        this.level.obstacles.forEach((obstacle) => {
            if (this.character.isColliding(obstacle)) {
                // Calculate character and obstacle bounds
                const charTop = this.character.y + this.character.offset.top;
                const charBottom = this.character.y + this.character.height - this.character.offset.bottom;
                const charLeft = this.character.x + this.character.offset.left;
                const charRight = this.character.x + this.character.width - this.character.offset.right;
                
                const obsTop = obstacle.y + obstacle.offset.top;
                const obsBottom = obstacle.y + obstacle.height - obstacle.offset.bottom;
                const obsLeft = obstacle.x + obstacle.offset.left;
                const obsRight = obstacle.x + obstacle.width - obstacle.offset.right;
    
                // Calculate overlaps on each side
                const overlapTop = charBottom - obsTop;
                const overlapBottom = obsBottom - charTop;
                const overlapLeft = charRight - obsLeft;
                const overlapRight = obsRight - charLeft;
    
                // Determine the minimum overlap to find the collision side
                const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight);
    
                if (minOverlap === overlapTop && overlapTop > 0) {
                    this.character.isStandingOnObstacle = true;
                    // Prevent upward movement
                    this.character.speedY = 0;
                    this.character.y = obstacle.y - this.character.height + this.character.offset.bottom + 10;
                } else if (minOverlap === overlapBottom && overlapBottom > 0) {
                    // Prevent downward movement
                    this.character.speedY = 0;
                    this.character.y = obstacle.y + obstacle.height - this.character.offset.bottom;
                } else if (minOverlap === overlapLeft && overlapLeft > 0) {
                    // Prevent movement to the left
                    this.character.x = obstacle.x - this.character.width + this.character.offset.right;
                } else if (minOverlap === overlapRight && overlapRight > 0) {
                    // Prevent movement to the right
                    this.character.x = obstacle.x + obstacle.width - this.character.offset.left;
                }
            }
        });
    }


    checkPlatformCollisions(){
        this.level.platforms.forEach( (platform) => {

            if (this.character.isColliding(platform) && this.character.bodyBottom <= platform.y) {
                this.character.isStandingOnObstacle = true;
                this.character.y = platform.y - this.character.height + this.character.offset.bottom;
            }
        })
    }


    checkFallingFromPlatform(){
        this.level.obstacles.forEach( (obstacle) => {
            if (!this.character.isColliding(obstacle)) {
                this.character.isStandingOnObstacle = false;
            }
        });
        
        this.level.platforms.forEach( (platform) => {
            if (!this.character.isColliding(platform)) {
                this.character.isStandingOnObstacle = false;
            }
        });
    }
    

    checkBodyToBodyCollisions() {

        this.level.enemies.forEach( (enemy) => {
            if (!enemy.isDead() && this.character.isColliding(enemy) ) {
                if (this.character.isStandingOn(enemy) && this.character.isFalling()) {
                    this.character.stampJump();
                    enemy.dies();
                } else {
                    this.character.reduceHP(1, enemy);
                    this.statusBars[0].setPercentage(this.character.HP)
                }
            }});     

        this.level.endboss.forEach( (endboss) => {
            if (!endboss.isDead() && this.character.isColliding(endboss) ) {
                this.character.reduceHP(2, endboss);
                this.statusBars[0].setPercentage(this.character.HP);
            }});    

        this.level.axe.forEach( (axe) => {
            if (this.character.isColliding(axe) ) {
                this.character.increaseInventoryOf(axe);
                this.statusBars[1].setPercentage(this.character.axes);
                this.removeCollectableObject(axe); 
            }});        

        this.level.coin.forEach( (coin) => {
            if (this.character.isColliding(coin) ) {
                this.character.increaseInventoryOf(coin);
                this.statusBars[2].setPercentage(this.character.coins);
                this.removeCollectableObject(coin);
            }});    
    };


    checkThrowableObjectCollision(){
        if (this.level.throwableObjects[0] || this.keyboard.E) {
            // throwable object collision
            this.level.throwableObjects.forEach((throwObject) => {
                if (throwObject && !throwObject.used) {
                    this.level.enemies.forEach((enemy) => {
                        if (!enemy.isDead() && throwObject.isColliding(enemy)) {
                            throwObject.collision = true;
                            enemy.reduceHP(40, throwObject.used);
                        }
                    });
                }
            });

            // throwable object collision
            this.level.throwableObjects.forEach((throwObject) => {
                if (throwObject && !throwObject.used) {
                    this.level.endboss.forEach((endboss) => {
                        if (!endboss.isDead() && throwObject.isColliding(endboss)) {
                            throwObject.collision = true;
                            endboss.reduceHP(40, throwObject.used);
                            }
                        });
                    }
                });                
            }
    }


    checkMelee(){
        this.characterMelee();
        this.enemyAndBossMelee();
    }

    enemyAndBossMelee(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isHorizontalInRange(enemy)) {
                enemy.speed = 0;
            }
            if ( !enemy.meleeAttackProcess && this.character.isInMeleeRangeForMinotaur(enemy) && !enemy.isDead() && !enemy.damageProcess) {
                enemy.meleeRangeToCharacter = true;
                if (enemy.isAttacking) {
                    this.character.reduceHP(5, enemy);
                    this.statusBars[0].setPercentage(this.character.HP);
                };
            }else {
                enemy.resetSpeed();
            }});   

        this.level.endboss.forEach( (endboss) => {
            if (!endboss.meleeAttackProcess && this.character.isInMeleeRangeForEndboss(endboss) && !endboss.isDead() && !endboss.damageProcess) {
                endboss.speed = 0;
                endboss.meleeRangeToCharacter = true;
                    if (endboss.isAttacking) {
                        this.character.reduceHP(10, endboss);
                        this.statusBars[0].setPercentage(this.character.HP);
                    }
            }else {
                endboss.resetSpeed();
            }});   
    }

    characterMelee(){
        this.level.enemies.forEach((enemy) => {
            if ( !this.character.meleeAttackProcess && enemy.isInMeleeRangeForCharacter(this.character) && !enemy.isDead() && !enemy.damageProcess) {
                if (this.keyboard.Q) {
                    enemy.reduceHP(30, enemy);
                }
            }else {
                enemy.resetSpeed();
            }}); 

        this.level.endboss.forEach((endboss) => {
            if ( !this.character.meleeAttackProcess && endboss.isInMeleeRangeForCharacter(this.character) && !endboss.isDead() && !endboss.damageProcess) {
                if (this.keyboard.Q) {
                    endboss.reduceHP(30, endboss);
                }
            }else {
                endboss.resetSpeed();
            }}); 
    }


    checkIfThrowingObjects(){
        if (this.keyboard.E && !this.character.isDead() && this.character.axes !== 0 && !this.character.cooldown) {
            let axe = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
            this.level.throwableObjects.push(axe);
            this.character.axes -= 20;
            this.statusBars[1].setPercentage(this.character.axes);
            this.character.checkAndStartCooldown();
        };
    }


    removeThrowableObjects(){
        this.level.throwableObjects.forEach((throwObject) => {
            if(!this.character.cooldown){
                if (!throwObject.isVisible() || throwObject.used) {
                    const index = this.level.throwableObjects.indexOf(throwObject);
                    if (index > -1) {
                        this.level.throwableObjects.splice(index, 1);
                    }
                }
            }
        });
    }


    addThrowableObjectsToMap(throwableObjects){
        if (throwableObjects[0]) {
            this.addObjectsToMap(throwableObjects);
        }
    }


    drawObjectInParallaxEffect(layer) {
        layer.forEach(bg => {
            let adjustedX = bg.speed * this.camera_x; // Anpassen der Geschwindigkeit für Parallaxen-Effekt
            this.ctx.save(); // Speichert den Zustand vor der Verschiebung
            this.ctx.translate(adjustedX, 0); // Hintergrund basierend auf Geschwindigkeit verschieben
            this.addToMap(bg);
            this.ctx.restore(); // Stellt den Zustand nach der Verschiebung wieder her
        });
    }


    addObjectsToMap(objects){
        objects.forEach( o => {
            this.addToMap(o)
        });
    }


    addToMap(movableObject){
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        };

        movableObject.draw(this.ctx);
        // movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    addFixedObjectToMap(object){
        this.ctx.translate(-this.camera_x, 0);
        object.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);
    }


    addMultipleFixedObjectsToMap(objects){
        objects.forEach( obj => {
            this.addFixedObjectToMap(obj)
        });
    }


    flipImage(movableObject){
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    flipImageBack(movableObject){
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }


    removeCollectableObject(objectToRemove) {
        if (objectToRemove instanceof Axe) {
            let index = this.level.axe.indexOf(objectToRemove);
            if (index !== -1) {
                this.level.axe.splice(index, 1);
            }
        } else if (objectToRemove instanceof Coin) {
            let index = this.level.coin.indexOf(objectToRemove);
            if (index !== -1) {
                this.level.coin.splice(index, 1);
            }
        }
    }
}