/**
 * Represents a throwable axe in the game.
 * Inherits from the `DrawableObject` class.
 */
class Axe extends DrawableObject {

    /**
     * The offset for positioning the axe.
     * @type {Object}
     * @property {number} top - The top offset.
     * @property {number} bottom - The bottom offset.
     * @property {number} right - The right offset.
     * @property {number} left - The left offset.
     */
    offset = {
        top: 5,
        bottom: 5,
        right: 46,
        left: 5,
    };

    /**
     * Creates an instance of the `Axe` class.
     * @param {number} x - The x-coordinate of the axe's position.
     * @param {number} y - The y-coordinate of the axe's position.
     */
    constructor(x, y) {
        super();
        this.loadImage('./assets/crafties/orcs/throwable-objects/axe/Axe-1.png');
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.speed = 0; 
    }
}