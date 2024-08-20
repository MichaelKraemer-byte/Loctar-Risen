/**
 * Represents a one-block rock obstacle in the game.
 * @class
 * @extends DrawableObject
 */
class OneBlockRockObstacle extends DrawableObject {
    
    /**
     * The offset values for the obstacle, affecting its collision detection.
     * 
     * @type {Object}
     * @property {number} top - The offset value for the top edge.
     * @property {number} bottom - The offset value for the bottom edge.
     * @property {number} right - The offset value for the right edge.
     * @property {number} left - The offset value for the left edge.
     */
    offset = {
        top: 0,
        bottom: 0,
        right: 30,
        left: 30
    };

    /**
     * Creates a new `OneBlockRockObstacle`, initializing its position, size, and image.
     * 
     * @param {number} x - The x-coordinate of the obstacle.
     * @param {number} y - The y-coordinate of the obstacle.
     * @param {number} width - The width of the obstacle.
     * @param {number} height - The height of the obstacle.
     */
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