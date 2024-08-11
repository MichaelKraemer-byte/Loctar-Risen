class OneBlockRockObstacle extends DrawableObject {
    
    offset = {
        top: 0,
        bottom: 0,
        right: 10,
        left: 10
    };

    constructor(x, y, width, height) {
        super();
        this.loadImage('assets/ruins-tileset/PNG/Environment/Little_Wreckage.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0; 
    } 
}