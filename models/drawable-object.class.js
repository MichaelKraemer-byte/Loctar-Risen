class DrawableObject {

    initialX = 0;
    x = 0;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;
    cooldown = false;
    RECHARGE_TIME = 500;
    currentImageIndex = 0;
    gameHasStarted = false;
    world;
    



    drawFrame(ctx){
        if (this instanceof ThreeBlockPlatform || this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss ||  this instanceof ThrowableObject || this instanceof Axe) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };

        //offset-rectangle-form
        if (this instanceof ThreeBlockPlatform || this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss ||  this instanceof ThrowableObject || this instanceof Axe) {
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

    
    draw(ctx){
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img);
        }
    };


    loadImage(path){
        this.img = new Image(); //<img>
        this.img.src = path;
    };


    loadImages(array){
        array.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    };


    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    playSingleAnimation(images, animationInterval) {
        if (this.currentImageIndex < images.length) { // Exclude the last empty string
            let path = images[this.currentImageIndex];
            this.img = this.imageCache[path];
            this.currentImageIndex++;
        } else {
            clearInterval(animationInterval); // Stop the animation when the last image is reached
        }
    }

    playSingleAnimationAndStopAtLatestImage(images) {
        if (this.currentImage < images.length) {
            let path = images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            // Behalte das letzte Bild bei, wenn das Ende der Animation erreicht ist
            let path = images[images.length - 1];
            this.img = this.imageCache[path];
        }
    }



/* The `playSound` method in the `DrawableObject` class is responsible for playing an audio file with
the specified volume and speed. Here's a breakdown of what it does: */
    playSound(audio, volume, audioSpeed){
        if (globalVolume) {
            audio.volume = volume;
            audio.playbackRate = audioSpeed;
            audio.play();
        }
        if (!globalVolume) {
            audio.volume = volume;
            audio.playbackRate = audioSpeed;
            audio.pause();
        }
    };


    pauseSound(audio){
        audio.pause();
    };

    startCooldown() {
        this.cooldown = true;
        setTimeout (() => { 
            this.cooldown = false
        }, this.RECHARGE_TIME);
    }

    checkAndStartCooldown() {
        if (!this.cooldown) {
            this.startCooldown();
        }
    }


    isVisible() {
        if (this.world) {
            return this.x + this.width > -this.world.camera_x && this.x < -this.world.camera_x + this.world.canvas.width;
        }
        return false;
    }
}