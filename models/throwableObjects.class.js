class ThrowableObject extends MovableObject {

    flyingAxeImages = [
        'assets/crafties/orcs/throwable-objects/axe/Axe-4.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-3.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-2.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-1.png'
    ];

    redSplash = [
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
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

    collision;


    constructor(x, y, direction) {

        super();
        this.otherDirection = direction;
        this.collision = false;
        this.x = x + 100;
        this.y = y + 80;
        this.width = 70;
        this.height = 70;
        this.loadImages(this.flyingAxeImages);
        this.loadImages(this.redSplash);
        this.throw();
        this.animate();
    };


    throw(){
        this.speedY = 20;
        this.applyGravity();
        setInterval( () => {

                if (this.otherDirection) {
                    if (this.collision) {
                        this.x - 30;
                        this.speedY = 0;
                    } else{
                        this.x -= 30;
                    }
                } else if (!this.otherDirection) {
                    if (this.collision) {
                        this.x + 30;
                        this.speedY = 0;
                    } else {
                        this.x += 30;
                    }
                }
        }, 25);
    }


    animate() {
        const animationInterval = setInterval(() => {
            if (this.collision) {
                this.playSingleAnimation(this.redSplash);
                clearInterval(animationInterval);

            } else {
                this.playAnimation(this.flyingAxeImages);
            }
        }, 50);
    }
}