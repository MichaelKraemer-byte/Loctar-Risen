/**
 * Represents a health status bar for an end boss.
 * 
 * This class manages the display of the health status bar for an end boss and updates it based on the current health percentage.
 * It extends the `DrawableObject` class and uses a series of images to represent different health levels.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class EndbossStatusBarOfHP extends DrawableObject {

    /**
     * An array of images representing different health levels for the status bar.
     * 
     * @type {string[]}
     */
    HPImages = [
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/0.png',
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/20.png',
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/40.png',
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/60.png',
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/80.png',
        'assets/el_pollo_locco/7_statusbars/inverted-health-statusbars/orange/100.png'
    ];

    /**
     * The current percentage of the health status bar.
     * It ranges from 0 to 100 and determines which image is displayed.
     * 
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates an instance of `EndbossStatusBarOfHP` and initializes its properties.
     * 
     * This method loads the necessary images for the health status bar and sets the initial position and size.
     */
    constructor() {
        super(); // Call the parent class constructor
        this.loadImages(this.HPImages);
        this.x = 500;
        this.y = 80;
        this.height = 50;
    }


/**
* Updates the HP status bar to reflect the current percentage of health.
* 
* This method sets the percentage of health for the status bar and updates the image based on the percentage. The
* status bar image is chosen from a set of predefined images (stored in `HPImages`) that represent different levels of health.
* 
* @param {number} percentage - The current percentage of health, ranging from 0 to 100.
*/
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.HPImages[this.getIndexByPercentageHighToLow()];
        this.img = this.imageCache[path];
    };


/**
* Gets the index for the HP image based on the current percentage of health.
* 
* This method calculates and returns the index of the HP image to use, based on the current health percentage. The index
* is determined such that higher health percentages correspond to different images in the `HPImages` array.
* 
* @returns {number} The index of the image corresponding to the current health percentage.
*/
    getIndexByPercentageHighToLow(){
        if (this.percentage == 100) {
            return 5
        };
        if (this.percentage >= 80) {
            return 4
        };
        if (this.percentage >= 60) {
            return 3
        };
        if (this.percentage >= 40) {
            return 2
        };
        if (this.percentage >= 20) {
            return 1
        };
        if (this.percentage >= 0) {
            return 0
        };
    };
}