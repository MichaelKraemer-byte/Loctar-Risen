class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 5;
    HP = 100;
    damageProcess = false;
    RECHARGE_TIME = 1200;


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

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Minotaur_1) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };

        //offset-rectangle-form
        if (this instanceof Character || this instanceof Minotaur_1) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        };

        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        };
    };


    reduceHP(collisionObject){
        if (collisionObject instanceof Endboss) {
            this.HP -= 2;
        };
        if (collisionObject instanceof Minotaur_1) {
            this.HP -= 1;
        };
        this.checkAndStartDamageProcess();
        if (this.HP < 0) {
            this.HP = 0;
        }
    }


    // Method to check if HP is decreasing
    checkAndStartDamageProcess() {
        if (!this.damageProcess) {
            this.startDamageProcess();
        }
    }


    isDead(){
        return this.HP <= 0
    }


    startDamageProcess() {
        this.damageProcess = true;
        setTimeout (() => { 
            this.damageProcess = false
        }, this.RECHARGE_TIME);
    }


    isColliding(obj){
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R zu L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T zu B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom // B zu T
        // return this.x + this.offset.offsetY > obj.offset.offsetX && // R zu L
        //     this.y + this.offset.offsetHeight > obj.offset.offsetWidth && // T zu B
        //     this.offset.offsetX < obj.offset.offsetY &&  // L zu R
        //     this.offset.offsetWidth < obj.offset.offsetHeight // B zu T
    }

    refreshOffset(){
        this.offset.offsetX = this.x + this.offset.left + this.offset.right;
        this.offset.offsetY = this.y + this.offset.top + this.offset.bottom;
        this.offset.offsetWidth = this.width - this.offset.right - this.offset.left;
        this.offset.offsetHeight = this.height - this.offset.bottom - this.offset.top;
    }

    // isColliding(obj){
    //     return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R zu L
    //         this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T zu B
    //         this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
    //         this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom // B zu T
    // }
    

    walkLeft(){
        this.otherDirection = true;
        this.x -= this.speed + 2;
    };


    walkRight(){
        this.otherDirection = false;
        this.x += this.speed + 2;
    };


    applyGravity(){
        setInterval(()=> {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (this.y > 280) {
                this.y = 280;
            }
        }, 1000 / 25);
    };


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
        // Check if the object is visible in the canvas
        if (this.world) {
            return this.x + this.width > -this.world.camera_x && this.x < -this.world.camera_x + this.world.canvas.width;
        }
        return false;
    }
}