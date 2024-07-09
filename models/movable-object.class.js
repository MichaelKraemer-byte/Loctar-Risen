class MovableObject {
    x = 0;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 5;


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Minotaur_1) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x + this.width / 4, this.y + this.height * 0.26, this.width  / 2.3, this.height  / 1.7);
            ctx.stroke();
        };

        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x + 250, this.y + this.height * 0.34, this.width  / 2.6, this.height  / 1.7);
            ctx.stroke();
        }
    };

    // kann von character uebernommen werden (super()), 
    // und mit einem path entsprechend befuellt werden,
    // um dann dessen image zu generieren.
    loadImage(path){
        this.img = new Image(); //<img>
        this.img.src = path;
    };


    walkLeft(){
        this.otherDirection = true;
        this.x -= this.speed + 2;
    };


    walkRight(){
        this.otherDirection = false;
        this.x += this.speed + 2;
    };


    loadImages(array){
        array.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    };


    playSound(audio, volume){
        audio.volume = volume;
        audio.play();
    };


    pauseSound(audio){
        audio.pause();
    };


    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
}