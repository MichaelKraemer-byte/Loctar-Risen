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


    // kann von character uebernommen werden (super()), 
    // und mit einem path entsprechend befuellt werden,
    // um dann dessen image zu generieren.
    loadImage(path){
        this.img = new Image(); //<img>
        this.img.src = path;
    };


    moveLeft(){
        this.otherDirection = true;
        setInterval(() => {        
        this.x -= this.speed
        }, 1000 / 60);
    };


    loadImages(array){
        array.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    };
}