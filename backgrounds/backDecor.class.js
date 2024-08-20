/**
 * Represents the background decoration in the game that can move.
 * 
 * @extends MovableObject
 */
class BackDecor extends MovableObject {
    /**
     * The width of the background decoration.
     * 
     * @type {number}
     */
    width = 720;

    /**
     * The height of the background decoration.
     * 
     * @type {number}
     */
    height = 480;

    /**
     * The x-coordinate position of the background decoration.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate position of the background decoration.
     * 
     * @type {number}
     */
    y = 0;

    /**
     * Creates a new instance of the `BackDecor` class and loads the image.
     * 
     * @param {string} path - The path to the image of the background decoration.
     * @param {number} x - The x-coordinate position of the background decoration.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0.03;
    }
}