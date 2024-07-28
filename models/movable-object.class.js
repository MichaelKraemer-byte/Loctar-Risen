class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 5;
    HP = 100;
    damageProcess = false;
    damageProcessTime = 300;
    collision = false;
    world;
    axes = 0;
    coins = 0;
    used = false;
    meleeAttackProcess = false;
    meleeRangeToCharacter = false;
    initialSpeed = 0;
    isStandingOnObstacle = false;
    walkingAnimation = false;
    isOnPlatform = false;
    currentPlatformY = 0;
    objectViewsCharacter = false;
    isWalking = false;

    bodyBottom = 280;

    offset = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    };

    characterIsOnHeight(){
        return this.world.character.bodyBottom == this.bodyBottom || 
            (this.world.character.bodyBottom + 10 >= this.bodyBottom - 10 && 
            this.world.character.bodyBottom - 10 <= this.bodyBottom + 10)
    }

    setBodyVariables(){
        setInterval (()=> {
            this.bodyBottom = this.y + this.height - this.offset.bottom;
        }, 50);
    }


    setYOnFloor(obstacle) {
        this.y = obstacle.y - this.height + this.offset.bottom;
    }


    dies(){
        this.HP = 0;
    }


    reduceHP(damage, object){
        if (object != object.used  || (object instanceof Minotaur_1) || (object instanceof Endboss)) {
            this.checkAndStartDamageProcess();
            this.HP -= damage;
        };
        if (this.HP < 0) {
            this.HP = 0;
        };
    }


    // Method to check if HP is decreasing
    checkAndStartDamageProcess() {
        if (!this.damageProcess) {
            this.startDamageProcess();
        }
    }


    increaseInventoryOf(collisionObject) {
        if (collisionObject instanceof Axe) {
            this.axes += 20;
            if (this.axes > 100) {
                this.axes = 100;
            };
        };
        if (collisionObject instanceof Coin) {
            this.coins += 25;
            if (this.coins > 100) {
                this.coins = 100;
            };
        };
    }


    isDead(){
        return this.HP <= 0
    }


    startDamageProcess() {
        this.damageProcess = true;
        setTimeout (() => { 
            this.damageProcess = false
        }, this.damageProcessTime);
    }


    isColliding(obj){
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R zu L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T zu B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom // B zu T
    };

    isGroundedOn(obj){
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&  // R zu L
               this.x + this.offset.left < obj.x + obj.width - obj.offset.right  // L zu R
    }

    isLanding(obj) {
        // Check if the character's bottom is touching the top of the object
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&  // R zu L
               this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
               this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top && // T zu B
               this.y + this.height - this.offset.bottom <= obj.y + obj.offset.top + obj.height * 0.1; // T zu B, kleines Delta
    }

    isInMeleeRangeForMinotaur(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 10; 
        const attackRangeY = 10; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Minotaur
        const minotaurLeft = obj.x + obj.offset.left - attackRangeX;
        const minotaurRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Minotaur
        const minotaurTop = obj.y + obj.offset.top - attackRangeY;
        const minotaurBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > minotaurLeft &&
                                    this.x + this.offset.left < minotaurRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > minotaurTop &&
                                  this.y + this.offset.top < minotaurBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }
    
    isInMeleeRangeForEndboss(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 50; 
        const attackRangeY = 50; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Endboss
        const endbossLeft = obj.x + obj.offset.left - attackRangeX;
        const endbossRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Endboss
        const endbossTop = obj.y + obj.offset.top - attackRangeY;
        const endbossBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > endbossLeft &&
                                    this.x + this.offset.left < endbossRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > endbossTop &&
                                  this.y + this.offset.top < endbossBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }
    
    isInMeleeRangeForCharacter(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 50; 
        const attackRangeY = 30; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Charakters
        const characterLeft = obj.x + obj.offset.left - attackRangeX;
        const characterRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Charakters
        const characterTop = obj.y + obj.offset.top - attackRangeY;
        const characterBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > characterLeft &&
                                    this.x + this.offset.left < characterRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > characterTop &&
                                  this.y + this.offset.top < characterBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }
    



    hitBy(obj){
        if (obj instanceof Minotaur_1) {
            return this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNG Sequences/Slashing/0_Minotaur_Slashing_004.png') ||
                    this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNG Sequences/Slashing/0_Minotaur_Slashing_005.png') ||
                    this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNG Sequences/Slashing/0_Minotaur_Slashing_006.png');            
        };
        if (obj instanceof Endboss) {
            return this.img.src.includes('assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_006.png') ||
                    this.img.src.includes('assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_007.png');
        };
    }


    runningagainst(obstacle) {
        return this.x + this.width - this.offset.right > obstacle.x + obstacle.offset.left &&
        this.x + this.offset.left < obstacle.x + obstacle.width - obstacle.offset.right;
    }


    resetSpeed(){
        this.speed = this.initialSpeed;
    }

    isStandingOn(obj) {
        // Berechnung der relevanten Kanten
        const characterBottom = this.y + this.height - this.offset.bottom;
        const characterTop = this.y + this.offset.top;
        const enemyBottom = obj.y + obj.height - obj.offset.bottom;
        const enemyTop = obj.y + obj.offset.top;
    
        // Überprüfung, ob der Charakter horizontal über dem Feind ist
        const horizontallyAligned = 
            this.x < obj.x + obj.width &&
            this.x + this.width > obj.x;
    
        // Überprüfung, ob der Charakter sich vertikal in einem Bereich des Feindes befindet
        const verticallyAligned = 
            characterBottom > enemyTop && 
            characterTop < enemyBottom;
    
        // Der Charakter muss sich innerhalb eines bestimmten Bereichs über dem Feind befinden
        const isOnTop = verticallyAligned && 
                         (characterBottom - enemyTop) < (this.height / 2);
    
        // Der Charakter muss den Feind horizontal berühren und sich vertikal in der Nähe des Feindes befinden
        return horizontallyAligned && isOnTop && (characterTop < enemyBottom);
    }


    stampJump(){
        this.speedY = 30;
    }


    // refreshOffset(){
    //     this.offset.offsetX = this.x + this.offset.left + this.offset.right;
    //     this.offset.offsetY = this.y + this.offset.top + this.offset.bottom;
    //     this.offset.offsetWidth = this.width - this.offset.right - this.offset.left;
    //     this.offset.offsetHeight = this.height - this.offset.bottom - this.offset.top;
    // }


    // isColliding(obj){
    //     return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R zu L
    //         this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T zu B
    //         this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
    //         this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom // B zu T
    // }
    

    walkLeft(){
        this.otherDirection = true;
        this.isWalking = true;
        this.x -= this.speed;
    };


    walkRight(){
        this.otherDirection = false;
        this.isWalking = true;
        this.x += this.speed;
    };



    setYOnFloor(obstacle) {
        this.y = obstacle.y - this.height + this.offset.bottom;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isStandingOnObstacle) {
                this.resetSpeedY();
            } else if (!this.isStandingOnObstacle) {
                if (this.isAboveGround() || this instanceof ThrowableObject) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
                if (this.y > 280 && !(this instanceof ThrowableObject)) {
                    this.y = 280;
                }   
            }
        }, 1000 / 25);
    }

    resetSpeedY(){
        this.speedY = 0;
    }



    isAboveGround(){
        if (this.y < 280 || this.speedY > 0) {
            return true;
        } else {
            return false;
        }
    };    

    
    isJumping() {
        return this.speedY > 0;
    }


    isFalling(){
        return this.speedY <= 0;
    }





    isOnObstacle(){
        if (this.isStandingOnObstacle) {
                return true;
            } else {
                return false;
            }            
    };


    jump(){
        this.speedY = 45;
    };

    // // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding (obj) {
    // return  (this.x + this.width) >= obj.x && 
    //         this.x <= (obj.x + obj.width) && 
    //         (this.y + this.offsetY + this.height) >= obj.y &&
    //         (this.y + this.offsetY) <= (obj.y + obj.height) && 
    //         obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }

    isVisible() {
        if (this.world) {
            return this.x + this.width > -this.world.camera_x && this.x < -this.world.camera_x + this.world.canvas.width;
        }
        return false;
    }


    run(){
        this.speed = 5.5;
        this.playSound(this.walkSound, 0.35, 3);
    }
}