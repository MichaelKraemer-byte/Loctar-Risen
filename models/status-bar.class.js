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
        console.log(this.statusImages === this.axeStatusImages); // Soll true sein, wenn die Referenz gleich ist
        console.log(this.statusImages === this.coinStatusImages);
        this.percentage = this.givePercentageOfSpecificStatus();
        this.loadImages(this.statusImages);
        this.x = 20;
        this.y = spacing;
        this.height = 50;

        console.log('Constructor:', this.statusImages === this.HPImages, this.statusImages === this.axeStatusImages, this.statusImages === this.coinStatusImages);

    };

    givePercentageOfSpecificStatus(){
        if (this.statusImages === this.HPImages) {
            return 100;
        };
        if (this.statusImages === this.axeStatusImages || this.statusImages === this.coinStatusImages) {
            return 0;
        };
    };

    setPercentage(percentage, statusImages){
        this.statusImages = statusImages;
        this.percentage = percentage;

        console.log('setPercentage:', this.statusImages === this.axeStatusImages, this.statusImages === this.coinStatusImages);

        if (this.statusImages === this.axeStatusImages || this.statusImages === this.coinStatusImages) { // fehler die bedingung wird irgendwie nwicht erfuellt...
            let path = this.statusImages[this.resolveImageIndexForCoinsAndWeapons()];
            this.img = this.imageCache[path];
        } else {                                                            // wir springen deshalb hierhin... 
            let path = this.statusImages[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    };

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