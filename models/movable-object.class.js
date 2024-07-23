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



    offset = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };

    isJumping() {
        return this.speedY > 0;
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

    isInMeleeRangeForMinotaur(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 10; 
        const attackRangeY = 10; 
    
        // Berechne den Angriffsradius horizontal
        const horizontalRange = (this.x + this.width - this.offset.right > obj.x + obj.offset.left - attackRangeX &&
                                 this.x + this.offset.left < obj.x + obj.width - obj.offset.right + attackRangeX);
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite des Angriffsradius liegt
        const isVerticalHit = this.y + this.height > obj.y + obj.offset.top - attackRangeY &&
                              this.y < obj.y + obj.height - obj.offset.bottom + attackRangeY;
    
        return horizontalRange  && isVerticalHit;
    }

    
    isInMeleeRangeForEndboss(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 50; 
        const attackRangeY = 50; 
    
        // Berechne den Angriffsradius horizontal
        const horizontalRange = (this.x + this.width - this.offset.right > obj.x + obj.offset.left - attackRangeX &&
                                 this.x + this.offset.left < obj.x + obj.width - obj.offset.right + attackRangeX);
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite des Angriffsradius liegt
        const isVerticalHit = this.y + this.height > obj.y + obj.offset.top - attackRangeY &&
                              this.y < obj.y + obj.height - obj.offset.bottom + attackRangeY;
    
        return horizontalRange  && isVerticalHit;
    }

        
    isInMeleeRangeForCharacter(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 50; 
        const attackRangeY = 30; 
    
        // Berechne den Angriffsradius horizontal
        const horizontalRange = (this.x + this.width - this.offset.right > obj.x + obj.offset.left - attackRangeX &&
                                 this.x + this.offset.left < obj.x + obj.width - obj.offset.right + attackRangeX);
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite des Angriffsradius liegt
        const isVerticalHit = this.y + this.height > obj.y + obj.offset.top - attackRangeY &&
                              this.y < obj.y + obj.height - obj.offset.bottom + attackRangeY;
    
        return horizontalRange  && isVerticalHit;
    }
    
    // isWithinYAttackZone(obj, attackYRange) {
    //     return (this.y + this.height - this.offset.bottom < obj.y + obj.height - obj.offset.bottom + attackYRange &&
    //             this.y + this.offset.top > obj.y + obj.offset.top - attackYRange);
    // }


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
        this.x -= this.speed;
    };


    walkRight(){
        this.otherDirection = false;
        this.x += this.speed;
    };


    applyGravity(){
        setInterval(()=> {
            if (this.isAboveGround() || this instanceof ThrowableObject) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            };
            if (this.y > 280 && !(this instanceof ThrowableObject)) {
                this.y = 280;
            }
        }, 1000 / 25);
    };


    isFalling(){
        return this.speedY <= 0;
    }


    isAboveGround(){
        if (this.y < 280 || this.speedY > 0) {
            return true;
        } else {
            return false;
        }
    };


    jump(){
        this.speedY = 38;
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