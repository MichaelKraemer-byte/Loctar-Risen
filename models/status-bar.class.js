class StatusBar extends DrawableObject {
    
    bars = [];
    statusImages;
    percentage = 0;
    spacing;


    constructor(spacing, statusImages) {
        super();
        this.spacing = spacing;
        this.statusImages = statusImages;
        console.log(this.statusImages);
        console.log(this.statusImages === this.HPImages);
        console.log(this.statusImages === this.axeStatusImages); 
        console.log(this.statusImages === this.coinStatusImages);
        this.percentage = this.givePercentageOfSpecificStatus();
        this.loadImages(this.statusImages);
        this.x = 20;
        this.y = spacing;
        this.height = 50;

        console.log('Constructor:', this.statusImages === this.HPImages, this.statusImages === this.axeStatusImages, this.statusImages === this.coinStatusImages);

    };


/**
 * Determines the percentage associated with the current status images.
 * 
 * This method returns 100% if the current status images are the same as `HPImages`. It returns 0% if the current 
 * status images are either `axeStatusImages` or `coinStatusImages`.
 * 
 * @returns {number} The percentage of the specific status.
 */
    givePercentageOfSpecificStatus(){
        if (this.statusImages === this.HPImages) {
            return 100;
        };
        if (this.statusImages === this.axeStatusImages || this.statusImages === this.coinStatusImages) {
            return 0;
        };
    };


/**
 * Sets the percentage and updates the status images based on the provided values.
 * 
 * This method updates the `statusImages` and `percentage` properties of the object. It then selects the appropriate 
 * image based on the percentage value. If the status images are either `axeStatusImages` or `coinStatusImages`, it
 * resolves the image index differently than if the status images are `HPImages`.
 * 
 * @param {number} percentage - The percentage to set.
 * @param {Array} statusImages - The array of status images to set.
 */
    setPercentage(percentage, statusImages){
        this.statusImages = statusImages;
        this.percentage = percentage;

        console.log('setPercentage:', this.statusImages === this.axeStatusImages, this.statusImages === this.coinStatusImages);

        if (this.statusImages === this.axeStatusImages || this.statusImages === this.coinStatusImages) {
            let path = this.statusImages[this.resolveImageIndexForCoinsAndWeapons()];
            this.img = this.imageCache[path];
        } else {                                                            
            let path = this.statusImages[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    };


/**
 * Resolves the image index based on the percentage for coins and weapons status.
 * 
 * This method determines the index of the image to use based on the current percentage when the status images 
 * represent coins or weapons. The index is chosen according to predefined percentage thresholds.
 * 
 * @returns {number} The index of the image in the status images array.
 */
    resolveImageIndexForCoinsAndWeapons(){
        if (this.percentage <= 0) {
            return 0
        };
        if (this.percentage > 20) {
            return 1
        };
        if (this.percentage > 40) {
            return 2
        };
        if (this.percentage > 60) {
            return 3
        };
        if (this.percentage > 80) {
            return 4
        };
        if (this.percentage > 100) {
            return 5
        };
    };


/**
 * Resolves the image index based on the percentage for HP status.
 * 
 * This method determines the index of the image to use based on the current percentage when the status images 
 * represent HP (hit points). The index is chosen according to predefined percentage thresholds.
 * 
 * @returns {number} The index of the image in the status images array.
 */
    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5
        };
        if (this.percentage > 80) {
            return 4
        };
        if (this.percentage > 60) {
            return 3
        };
        if (this.percentage > 40) {
            return 2
        };
        if (this.percentage > 20) {
            return 1
        };
        if (this.percentage > 0) {
            return 0
        };
    };
}