class Coin extends DrawableObject {


    coinImages = [
        'assets/coin/PNG/Gold/Gold_1.png',
        'assets/coin/PNG/Gold/Gold_2.png',
        'assets/coin/PNG/Gold/Gold_3.png',
        'assets/coin/PNG/Gold/Gold_4.png',
        'assets/coin/PNG/Gold/Gold_5.png',
        'assets/coin/PNG/Gold/Gold_6.png',
        'assets/coin/PNG/Gold/Gold_7.png',
        'assets/coin/PNG/Gold/Gold_8.png',
        'assets/coin/PNG/Gold/Gold_9.png',
        'assets/coin/PNG/Gold/Gold_10.png'
    ];

    offset = {
        top: 5,
        bottom: 5,
        right: 46,
        left: 5,

        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };

    constructor(x, y) {
        super();
        this.loadImages(this.coinImages);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 0; 
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.playAnimation(this.coinImages);
        }, 70);
    }
}