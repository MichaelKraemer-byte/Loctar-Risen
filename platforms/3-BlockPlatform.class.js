class ThreeBlockPlatform extends DrawableObject {

    offset = {
        top: -5,
        bottom: 0,
        right: 0,
        left: 0
    };

    constructor(x, y) {
        super();
        this.loadImage('assets/created-obstacle/grounds/3-blocks.png');
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 70;
        this.speed = 0; 
    }
}