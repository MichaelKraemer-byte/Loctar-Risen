class RuinDecor extends DrawableObject {
    width = 340;
    height = 380;
    x = 0;
    y = 70;

    constructor(path, x){
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0;
    };
}