class redSplash extends MovableObject {

    redSplashImages = [
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
        ''
    ];



    constructor(x, y, speedY){
        super();
        this.loadImages(this.redSplashImages);
        this.width = 80;
        this.height = 80;
        this.x = x;
        this.speedY = speedY - speedY;
        this.y = y;
        this.currentImageIndex = 0; 
        this.animate();
    }

    animate() {

        let animationInterval = setInterval(() => {
            this.playSingleAnimation(this.redSplashImages, animationInterval);
        }, 50);

    }
}