class RuinDecor extends MovableObject {
    width = 120;
    height = 280;
    x = 0;
    y = 380;

    constructor(path, x){
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0;
    };
}