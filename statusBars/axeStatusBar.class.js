class AxeStatusBar extends DrawableObject {

    axeStatusImages = [
        'assets/crafties/orcs/statusBar/100.png',
        'assets/crafties/orcs/statusBar/80.png',
        'assets/crafties/orcs/statusBar/60.png',
        'assets/crafties/orcs/statusBar/40.png',
        'assets/crafties/orcs/statusBar/20.png',
        'assets/crafties/orcs/statusBar/0.png'
    ];

    percentage = 0;


    constructor() {
        super();
        this.loadImages(this.axeStatusImages);
        this.x = 20;
        this.y = 60;
        this.height = 50;
    };

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.axeStatusImages[this.getIndexByPercentageHighToLow()];
        this.img = this.imageCache[path];
    };

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