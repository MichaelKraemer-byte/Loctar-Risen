/**
 * Represents a single block used as a stone step rock in the game.
 * 
 * This class extends `DrawableObject` and represents a block that is displayed on the screen. 
 * The block is shown as part of a ruins environment and has a fixed size and position.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class OneBlockStepRock extends DrawableObject {

    /**
     * The offset values for the block, used for positioning corrections.
     * 
     * @type {{top: number, bottom: number, right: number, left: number}}
     */
    offset = {
        top: -5,
        bottom: 0,
        right: 0,
        left: 0
    };

    /**
     * Creates an instance of `OneBlockStepRock` and initializes its position and size.
     * 
     * This method loads the image for the block, sets the block's position based on the provided
     * `x` and `y` coordinates, and initializes its dimensions and speed.
     * 
     * @param {number} x - The x-coordinate where the block should be positioned.
     * @param {number} y - The y-coordinate where the block should be positioned.
     */
    constructor(x, y) {
        super(); // Call the parent class constructor
        this.loadImage('assets/ruins-tileset/PNG/Environment/Rock_04.png');
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 35;
        this.speed = 0; 
    }
}