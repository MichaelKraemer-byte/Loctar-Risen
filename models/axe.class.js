class Axe extends DrawableObject {


    offset = {
        top: 5,
        bottom: 5,
        right: 46,
        left: 5,

        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };


    constructor(x, y){
        super();
        this.loadImage('assets/crafties/orcs/throwable-objects/axe/Axe-1.png');
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
    }

}