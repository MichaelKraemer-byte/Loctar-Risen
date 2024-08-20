/**
 * Represents a platform made up of three blocks.
 * 
 * This class extends `DrawableObject` and represents a platform displayed on the screen.
 * The platform is a static object shown at a specific position in the game space.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class ThreeBlockPlatform extends DrawableObject {

    /**
     * The offset values for the platform used for positioning corrections.
     * 
     * @type {{top: number, bottom: number, right: number, left: number}}
     */
    offset = {
        top: -5,
        bottom: 0,
        right: 0,
        left: 0
    };

    /**
     * Creates an instance of `ThreeBlockPlatform` and initializes its position and size.
     * 
     * This method loads the image for the platform, sets the platform's position based on the provided
     * `x` and `y` coordinates, and initializes its dimensions and speed.
     * 
     * @param {number} x - The x-coordinate where the platform should be positioned.
     * @param {number} y - The y-coordinate where the platform should be positioned.
     */
    constructor(x, y) {
        super(); // Call the parent class constructor
        this.loadImage('./assets/created-obstacle/grounds/3-blocks.png');
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 70;
        this.speed = 0; 
    }
}