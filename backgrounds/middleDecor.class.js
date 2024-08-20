/**
 * Represents a middle decoration in the game.
 * 
 * This class defines the properties and behavior of a middle decoration object
 * that moves at a certain speed in the game world.
 */
class MiddleDecor extends MovableObject {
    /**
     * The width of the middle decoration.
     * 
     * @type {number}
     */
    width = 720;

    /**
     * The height of the middle decoration.
     * 
     * @type {number}
     */
    height = 480;

    /**
     * The x-coordinate position of the middle decoration.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate position of the middle decoration.
     * 
     * @type {number}
     */
    y = 0;

    /**
     * Creates a new instance of the `MiddleDecor` class and loads the image.
     * 
     * @param {string} path - The path to the image of the middle decoration.
     * @param {number} x - The x-coordinate position of the middle decoration.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0.05;
    }
}