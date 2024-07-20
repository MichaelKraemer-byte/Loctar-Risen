class World {
    character = new Character();
    level = level_1;
    statusBars = [
        new HPstatusBar(),
        new AxeStatusBar(),
        new CoinStatusBar()
    ];
    throwableObjects = [];
    throwableObjectIndex = -1;
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
            this.checkThrowObjects();
            this.checkCollisions();
        }, 50);
    };

    checkCollisions(){

            this.level.enemies.forEach( (enemy) => {
                if (!enemy.isDead() && this.character.isColliding(enemy) ) {
                    if (this.character.isStampingOn(enemy)) {
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
                    this.character.increaseAxes(axe);
                    this.statusBars[1].setPercentage(this.character.axes);
                    this.removeAxe(axe); 
                }});        


                // throwable object collision
            if (this.throwableObjects[0]) {
                this.level.enemies.forEach( (enemy) => {
                    if (!enemy.isDead() && this.throwableObjects[this.throwableObjectIndex].isColliding(enemy) ) {
                        let throwObjectX = this.throwableObjects[this.throwableObjectIndex].x;
                        let throwObjectY = this.throwableObjects[this.throwableObjectIndex].y;
                        let throwObjSpeedY = this.throwableObjects[this.throwableObjectIndex].speedY;
                        enemy.reduceHP(20, this.throwableObjects[this.throwableObjectIndex]);
                        this.throwableObjects.splice(this.throwableObjectIndex, 1, new redSplash(throwObjectX, throwObjectY, throwObjSpeedY));
                    }});

                this.level.endboss.forEach( (endboss) => {
                    if (!endboss.isDead() && this.throwableObjects[this.throwableObjectIndex].isColliding(endboss) ) {
                        let throwObjectX = this.throwableObjects[this.throwableObjectIndex].x;
                        let throwObjectY = this.throwableObjects[this.throwableObjectIndex].y;
                        let throwObjSpeedY = this.throwableObjects[this.throwableObjectIndex].speedY;
                        endboss.reduceHP(20, this.throwableObjects[this.throwableObjectIndex]);
                        this.throwableObjects.splice(this.throwableObjectIndex, 1, new redSplash(throwObjectX, throwObjectY, throwObjSpeedY));
                    }});
            }
    };


    checkThrowObjects(){
        if (this.keyboard.E && !this.character.isDead() && this.character.axes !== 0 && !this.character.cooldown) {
            let axe = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
            this.throwableObjects.push(axe);
            this.throwableObjectIndex++;
            this.character.axes -= 20;
            this.statusBars[1].setPercentage(this.character.axes);
            this.character.checkAndStartCooldown();
        }
    }


    setWorld(){
        this.character.world = this;
        this.throwableObjects.world = this;

        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
        this.level.endboss.forEach(endboss => {
            endboss.world = this;
        });
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save(); // Speichert den aktuellen Zustand der Transformationen

        this.ctx.translate(this.camera_x, 0);
        // Zeichne Hintergrundebenen mit unterschiedlichen Geschwindigkeiten
        this.drawBackgroundLayer(this.level.skies);
        this.drawBackgroundLayer(this.level.backDecors);
        this.drawBackgroundLayer(this.level.middleDecors);
        this.drawBackgroundLayer(this.level.foregrounds);

        // Zeichne andere Objekte
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.axe);
        this.addMultipleFixedObjectsToMap(this.statusBars);

        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.drawBackgroundLayer(this.level.grounds);


        this.ctx.restore(); // Stellt den gespeicherten Zustand der Transformationen wieder her

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


    // throwableObjectsToMap(throwableObjects){
    //     if (!this.collison){ /// why does the axe still appear?
    //         this.addObjectsToMap(throwableObjects);
    //     }
    // }


    drawBackgroundLayer(layer) {
        layer.forEach(bg => {
            let adjustedX = bg.speed * (this.camera_x / 4); // Anpassen der Geschwindigkeit für Parallaxen-Effekt
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
        movableObject.drawFrame(this.ctx);

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


    // throwingObjectCollisionEffect(obj){
    //     let index = this.throwingObject.indexOf(obj);
    
    //     if (index !== -1) {
    //         this.throwingObject.splice(index, 1, new CollisionEffect);
    //     }
    // }


    removeAxe(axeToRemove) {
        // Finde den Index des zu entfernenden "axe"
        let index = this.level.axe.indexOf(axeToRemove);
    
        if (index !== -1) {
            // Entferne das "axe" aus dem Array
            this.level.axe.splice(index, 1);
        }
    }
}