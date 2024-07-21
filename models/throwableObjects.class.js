class ThrowableObject extends MovableObject {

    flyingAxeImages = [
        'assets/crafties/orcs/throwable-objects/axe/Axe-4.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-3.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-2.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-1.png'
    ];

    redSplashImages = [
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
        ''
    ];

    offset = {
        top: 5,
        bottom: 5,
        right: 5,
        left: 5,

        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };



    constructor(x, y, direction) {

        super();
        this.otherDirection = direction;
        this.x = x + 100;
        this.y = y + 80;
        this.width = 70;
        this.height = 70;
        this.speedY = 20;
        this.loadImages(this.flyingAxeImages);
        this.loadImages(this.redSplashImages);
        this.animate();
    };

    animate() {

        let throwableObjectIntervall = setInterval(() =>{
            if (!this.collision) {
                this.playAnimation(this.flyingAxeImages);
            } else if (this.collision) {
                this.used = true;
                this.x += 0;
                this.speedY = 0;
                this.playSingleAnimation(this.redSplashImages, throwableObjectIntervall);
            } 
        }, 50);

        this.throw();
    }


    throw() {
        this.applyGravity();
        setInterval( () => {
            if (!this.collision) {
                if (this.otherDirection) {
                    this.x -= 30;
                } else {
                    this.x += 30;
                }
            }
        }, 25);
    }
}