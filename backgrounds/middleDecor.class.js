class MiddleDecor extends MovableObject {
    width = 720;
    height = 480;
    x = 0;
    y = 0;

    constructor(path, x){
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0.05;
    };
}