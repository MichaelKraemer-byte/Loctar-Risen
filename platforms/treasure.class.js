/**
 * Represents a treasure chest in the game.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class Treasure extends DrawableObject {

    /**
     * The path to the image for the unlocked treasure chest.
     * 
     * @type {string}
     */
    unlockedImage = './assets/ruins-tileset/PNG/Collectable Object/Chest_02_Unlocked.png';

    /**
     * Creates a new `Treasure` instance, initializing its position and loading the image for the locked state.
     * 
     * @param {number} x - The x-coordinate of the treasure chest.
     * @param {number} y - The y-coordinate of the treasure chest.
     */
    constructor(x, y) {
        super(); // Ensure the parent class constructor is called
        this.x = x;
        this.y = y;
        this.loadImage('./assets/ruins-tileset/PNG/Collectable Object/Chest_02_Locked.png');
    }
}