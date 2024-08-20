/**
 * Represents a status bar for the axe in the game, showing its durability.
 * @class
 * 
 * @extends DrawableObject
 */
class AxeStatusBar extends DrawableObject {

    /**
     * The image paths for different axe durability levels.
     * 
     * @type {string[]}
     */
    axeStatusImages = [
        'assets/crafties/orcs/statusBar/100.png',
        'assets/crafties/orcs/statusBar/80.png',
        'assets/crafties/orcs/statusBar/60.png',
        'assets/crafties/orcs/statusBar/40.png',
        'assets/crafties/orcs/statusBar/20.png',
        'assets/crafties/orcs/statusBar/0.png'
    ];

    /**
     * The current percentage of the axe's durability.
     * 
     * @type {number}
     */
    percentage = 0;

    /**
     * Creates a new `AxeStatusBar` instance and initializes its position and images.
     */
    constructor() {
        super(); // Call the parent class constructor
        this.loadImages(this.axeStatusImages);
        this.x = 20;
        this.y = 60;
        this.height = 50;
    }



/**
 * Updates the axe status bar to reflect the current percentage of axe collection.
 * 
 * This method sets the percentage of axe collection for the status bar and updates the image based on the percentage.
 * The status bar image is chosen from a set of predefined images (stored in `axeStatusImages`) that represent different
 * levels of axe collection.
 * 
 * @param {number} percentage - The current percentage of axe collection, ranging from 0 to 100.
 */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.axeStatusImages[this.getIndexByPercentageHighToLow()];
        this.img = this.imageCache[path];
    };


/**
 * Gets the index for the axe status image based on the current percentage of axe collection.
 * 
 * This method calculates and returns the index of the axe status image to use, based on the current percentage of axe
 * collection. The index is determined such that lower percentages correspond to higher indices in the `axeStatusImages` array.
 * 
 * @returns {number} The index of the image corresponding to the current axe percentage.
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