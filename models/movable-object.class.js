class MovableObject {
    x = 20;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};

    // kann von character uebernommen werden (super()), 
    // und mit einem path entsprechend befuellt werden,
    // um dann dessen image zu generieren.
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    };


    loadImages(array){
        array.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    };


    moveRight(){
    };


    moveLeft(){
    };
}