class HPstatusBar extends DrawableObject {

        // Status-Bars
        HPImages = [
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
            'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
        ];

        percentage = 100;
        
        constructor() {
            super();
            this.loadImages(this.HPImages);
            this.x = 20;
            this.y = 20;
            this.height = 50;
        };
    
        setPercentage(percentage){
            this.percentage = percentage;
            let path = this.HPImages[this.getIndexByPercentageHighToLow()];
            this.img = this.imageCache[path];
        };

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