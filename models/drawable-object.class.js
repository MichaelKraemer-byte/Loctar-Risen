class DrawableObject {

    x = 0;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss ||  this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };

        //offset-rectangle-form
        if (this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss ||  this instanceof ThrowableObject) {
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


    playSingleAnimation(images){
        for (let i = 0; i < images.length; i++) {
            let path = images[i];
            this.img = this.imageCache[path];
        }
    };


    playSound(audio, volume, audioSpeed){
        audio.volume = volume;
        audio.play();
        if (this.world.keyboard.SHIFT) {
            audio.playbackRate = audioSpeed;
        } else {
            audio.playbackRate = 1;
        }
    };


    pauseSound(audio){
        audio.pause();
    };
}