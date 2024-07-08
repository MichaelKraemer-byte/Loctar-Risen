class Ground extends MovableObject {
    width = 720;
    height = 480;
    x = 0;
    y = 0;
    speed = 1.3;

    constructor(path, x, speed){
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = speed || 1.3;
    };
}