class ThrowableObject extends MovableObject {

    flyingAxeImages = [
        'assets/crafties/orcs/throwable-objects/axe/Axe-4.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-3.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-2.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-1.png'

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

    otherDirection = false;

    constructor(x, y, direction) {

        super();
        this.otherDirection = direction;
        this.x = x + 100;
        this.y = y + 80;
        this.width = 70;
        this.height = 70;
        this.loadImages(this.flyingAxeImages);
        this.throw();
        this.animate();
    };


    throw(){
        this.speedY = 20;
        this.applyGravity();
        setInterval( () => {
            if (this.otherDirection) {
                this.x -= 30;
            } else {
                this.x += 30;
            }
        }, 25);
    }


    animate(){
        setInterval( () => {
            this.playAnimation(this.flyingAxeImages);
        }, 50)
    }
}