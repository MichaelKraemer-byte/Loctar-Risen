/**
 * Represents the sky in the game that can move.
 * 
 * @extends MovableObject
 */
class Sky extends MovableObject {
    /**
     * The width of the sky.
     * 
     * @type {number}
     */
    width = 720;

    /**
     * The height of the sky.
     * 
     * @type {number}
     */
    height = 480;

    /**
     * The x-coordinate position of the sky.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate position of the sky.
     * 
     * @type {number}
     */
    y = 0;

    /**
     * Creates a new `Sky` instance and loads the image.
     * 
     * @param {string} path - The path to the image of the sky.
     * @param {number} x - The x-coordinate position of the sky.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0.01;
    }
}