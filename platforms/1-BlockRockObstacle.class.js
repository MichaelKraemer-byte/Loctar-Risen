class OneBlockRockObstacle extends DrawableObject {
    
    offset = {
        top: -5,
        bottom: 0,
        right: 0,
        left: 0
    };

    constructor(x, y) {
        super();
        this.loadImage('assets/ruins-tileset/PNG/Environment/Little_Wreckage.png');
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 120;
        this.speed = 0; 
    }
}