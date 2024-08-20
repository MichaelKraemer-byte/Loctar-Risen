/**
 * Represents a decorative ruin object in the game.
 * 
 * This class is used to create and manage decorative elements that appear as ruins in the game.
 * It extends the `DrawableObject` class to handle rendering and positioning.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class RuinDecor extends DrawableObject {
    /**
     * The width of the ruin decoration.
     * 
     * @type {number}
     */
    width = 340;

    /**
     * The height of the ruin decoration.
     * 
     * @type {number}
     */
    height = 380;

    /**
     * The x-coordinate of the ruin decoration.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate of the ruin decoration.
     * 
     * @type {number}
     */
    y = 70;

    /**
     * Creates an instance of the `RuinDecor` class.
     * 
     * @param {string} path - The path to the image file for the ruin decoration.
     * @param {number} x - The x-coordinate of the ruin decoration.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0;
    }
}