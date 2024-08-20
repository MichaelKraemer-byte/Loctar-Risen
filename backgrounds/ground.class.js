/**
 * Represents the ground in the game that can move.
 * 
 * @extends MovableObject
 */
class Ground extends MovableObject {
    /**
     * The width of the ground.
     * 
     * @type {number}
     */
    width = 720;

    /**
     * The height of the ground.
     * 
     * @type {number}
     */
    height = 480;

    /**
     * The x-coordinate position of the ground.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * The y-coordinate position of the ground.
     * 
     * @type {number}
     */
    y = 0;

    /**
     * Creates a new `Ground` instance and loads the image.
     * 
     * @param {string} path - The path to the image of the ground.
     * @param {number} x - The x-coordinate position of the ground.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.speed = 0.1;
    }
}