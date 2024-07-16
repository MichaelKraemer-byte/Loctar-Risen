class CoinStatusBar extends DrawableObject {
    
    coinStatusImages = [
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    percentage = 0;


    constructor() {
        super();
        this.loadImages(this.coinStatusImages);
        this.x = 20;
        this.y = 100;
        this.height = 50;
    };

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.coinStatusImages[this.getIndexByPercentageHighToLow()];
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