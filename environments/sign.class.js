class Sign extends DrawableObject {
    /**
     * The width of the ruin decoration.
     * 
     * @type {number}
     */
    width = 120;
    /**
     * The height of the ruin decoration.
     * 
     * @type {number}
     */
    height = 120;
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
    y = 325;
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