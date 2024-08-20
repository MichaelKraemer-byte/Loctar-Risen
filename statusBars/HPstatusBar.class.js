/**
 * Represents a health points (HP) status bar.
 * 
 * This class manages the display of the HP status bar and updates it based on the current health value.
 * It extends the `DrawableObject` class and uses a series of images to represent different health levels.
 * 
 * @extends DrawableObject
 */
class HPstatusBar extends DrawableObject {
    
    /**
     * An array of images representing different health levels for the status bar.
     * 
     * @class
     * 
     * @type {string[]}
     */
    HPImages = [
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
    ];

    /**
     * The current percentage of the HP status bar.
     * It ranges from 0 to 100 and determines which image is displayed.
     * 
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates an instance of `HPstatusBar` and initializes its properties.
     * 
     * This method loads the required images and sets the initial position and size of the status bar.
     */
    constructor() {
        super(); // Call the parent class constructor
        this.loadImages(this.HPImages);
        this.x = 20;
        this.y = 20;
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