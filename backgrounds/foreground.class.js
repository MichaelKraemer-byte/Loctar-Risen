/**
 * Represents a foreground that can move in the game.
 * 
 * @extends MovableObject
 */
class Foreground extends MovableObject {
    /**
     * The width of the foreground.
     * 
     * @type {number}
     */
    width = 720;

    /**
     * The height of the foreground.
     * 
     * @type {number}
     */
    height = 480;

    /**
     * The x-coordinate position of the foreground.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate position of the foreground.
     * 
     * @type {number}
     */
    y = 0;

    /**
     * Creates a new `Foreground` instance and loads the image.
     * 
     * @param {string} path - The path to the image of the foreground.
     * @param {number} x - The x-coordinate position of the foreground.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0;
    }
}