class DrawableObject {
    x = 0;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
        }
    };


    pauseSound(audio){
        audio.pause();
    };
}