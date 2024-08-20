/**
 * Represents a collectible coin in the game.
 * Inherits from the `DrawableObject` class.
 */
class Coin extends DrawableObject {

    /**
     * Array of image paths for the coin's animation.
     * @type {string[]}
     */
    coinImages = [
        'assets/coin/PNG/Gold/Gold_1.png',
        'assets/coin/PNG/Gold/Gold_2.png',
        'assets/coin/PNG/Gold/Gold_3.png',
        'assets/coin/PNG/Gold/Gold_4.png',
        'assets/coin/PNG/Gold/Gold_5.png',
        'assets/coin/PNG/Gold/Gold_6.png',
        'assets/coin/PNG/Gold/Gold_7.png',
        'assets/coin/PNG/Gold/Gold_8.png',
        'assets/coin/PNG/Gold/Gold_9.png',
        'assets/coin/PNG/Gold/Gold_10.png'
    ];

    /**
     * The offset for positioning the coin.
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
        left: 5
    };

    /**
     * Creates an instance of the `Coin` class.
     * @param {number} x - The x-coordinate of the coin's position.
     * @param {number} y - The y-coordinate of the coin's position.
     */
    constructor(x, y) {
        super();
        this.loadImages(this.coinImages);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 0; 
        this.animate();
    }

    
/**
 * Handles the animation of the coin object.
 * 
 * This method continuously plays the coin animation at a regular interval. The animation frames for the coin are
 * cycled through to create the effect of a spinning or rotating coin.
 */
    animate() {
        setInterval( () => {
            this.playAnimation(this.coinImages);
        }, 70);
    }
}