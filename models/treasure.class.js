/**
 * Represents a treasure object in the game.
 * Extends the {@link DrawableObject} class to provide functionality for rendering and interacting with the treasure.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class Treasure extends DrawableObject {

    /**
     * The path to the image used for the unlocked state of the treasure.
     * @type {string}
     */
    unlockedImage = './assets/ruins-tileset/PNG/Collectable Object/Chest_02_Unlocked.png';

    /**
     * The offset values for the treasure's position.
     * @type {Object}
     * @property {number} top - The offset from the top edge.
     * @property {number} bottom - The offset from the bottom edge.
     * @property {number} right - The offset from the right edge.
     * @property {number} left - The offset from the left edge.
     */
    offset = {
        top: 0,
        bottom: 0,
        right: -40,
        left: -40,
    };

    /**
     * Creates an instance of the Treasure class.
     * Initializes the treasure's position, dimensions, and loads the image for the locked state.
     * 
     * @param {number} x - The x-coordinate of the treasure's position.
     * @param {number} y - The y-coordinate of the treasure's position.
     */
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.width = 140;
        this.height = 140;
        this.speed = 0; 
        this.loadImage('./assets/ruins-tileset/PNG/Collectable Object/Chest_02_Locked.png');
    }
}