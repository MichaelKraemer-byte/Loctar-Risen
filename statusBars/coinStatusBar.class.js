/**
 * Represents a coin status bar.
 * 
 * This class manages the display of the coin status bar and updates it based on the current coin status.
 * It extends the `DrawableObject` class and uses a series of images to represent different coin status levels.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class CoinStatusBar extends DrawableObject {
    
    /**
     * An array of images representing different coin status levels.
     * 
     * @class
     * 
     * @type {string[]}
     */
    coinStatusImages = [
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png'
    ];

    /**
     * The current percentage of the coin status bar.
     * It ranges from 0 to 100 and determines which image is displayed.
     * 
     * @type {number}
     */
    percentage = 0;

    /**
     * Creates an instance of `CoinStatusBar` and initializes its properties.
     * 
     * This method loads the necessary images and sets the initial position and size of the coin status bar.
     */
    constructor() {
        super(); // Call the parent class constructor
        this.loadImages(this.coinStatusImages);
        this.x = 20;
        this.y = 100;
        this.height = 50;
    }



/**
 * Updates the coin status bar to reflect the current percentage of coins.
 * 
 * This method sets the percentage of coins for the status bar and updates the image based on the percentage. The
 * status bar image is chosen from a set of predefined images (stored in `coinStatusImages`) that represent different
 * levels of coin collection.
 * 
 * @param {number} percentage - The current percentage of coin collection, ranging from 0 to 100.
 */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.coinStatusImages[this.getIndexByPercentageHighToLow()];
        this.img = this.imageCache[path];
    };



/**
 * Gets the index for the coin status image based on the current percentage of coin collection.
 * 
 * This method calculates and returns the index of the coin status image to use, based on the current percentage of coin
 * collection. The index is determined such that lower percentages correspond to higher indices in the `coinStatusImages` array.
 * 
 * @returns {number} The index of the image corresponding to the current coin percentage.
 */
    getIndexByPercentageHighToLow(){
        if (this.percentage <= 0) {
            return 5
        };
        if (this.percentage <= 20) {
            return 4
        };
        if (this.percentage <= 40) {
            return 3
        };
        if (this.percentage <= 60) {
            return 2
        };
        if (this.percentage <= 80) {
            return 1
        };
        if (this.percentage == 100) {
            return 0
        };
    };
}