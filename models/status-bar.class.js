class StatusBar extends DrawableObject {
    


    bars = [];
    world;

    statusImages;
    percentage = 100;
    spacing;

    constructor(spacing, statusImages) {
        super();
        this.spacing = spacing;
        this.statusImages = statusImages;
        this.loadImages(this.statusImages);
        this.x = 20;
        this.y = spacing;
        this.height = 50;
    };


    setPercentage(percentage, statusImages){
        this.statusImages = statusImages;
        this.percentage = percentage;
        let path = this.statusImages[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

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
        if (this.percentage >= 0) {
            return 0
        };
    };

}