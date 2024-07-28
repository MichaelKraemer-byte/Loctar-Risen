class OneBlockStepRock extends DrawableObject {

    offset = {
        top: -5,
        bottom: 0,
        right: 0,
        left: 0
    };

    constructor(x, y) {
        super();
        this.loadImage('assets/ruins-tileset/PNG/Environment/Rock_04.png');
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 35;
        this.speed = 0; 
    }
}