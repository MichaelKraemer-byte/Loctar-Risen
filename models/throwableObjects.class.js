/**
 * Represents an object that can be thrown, such as an axe or a bottle with an effect.
 * 
 * @class
 * 
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    /**
     * The image paths for the flying axe.
     * 
     * @type {string[]}
     */
    flyingAxeImages = [
        'assets/crafties/orcs/throwable-objects/axe/Axe-4.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-3.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-2.png',
        'assets/crafties/orcs/throwable-objects/axe/Axe-1.png'
    ];

    /**
     * The image paths for the red splash effect.
     * 
     * @type {string[]}
     */
    redSplashImages = [
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/el_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * The image paths for the red smash effect.
     * 
     * @type {string[]}
     */
    redSmashImages = [
        'assets/effects/PNG/5/1.png',
        'assets/effects/PNG/5/2.png',
        'assets/effects/PNG/5/3.png',
        'assets/effects/PNG/5/4.png',
        'assets/effects/PNG/5/5.png',
        'assets/effects/PNG/5/6.png',
        'assets/effects/PNG/5/7.png',
        'assets/effects/PNG/5/8.png'
    ];

    /**
     * The offset values for the object to affect its collision detection.
     * 
     * @type {Object}
     * @property {number} top - The offset value for the top edge.
     * @property {number} bottom - The offset value for the bottom edge.
     * @property {number} right - The offset value for the right edge.
     * @property {number} left - The offset value for the left edge.
     */
    offset = {
        top: 5,
        bottom: 5,
        right: 5,
        left: 5
    };

    /**
     * Creates a new `ThrowableObject`, initializing its position, size, and animations.
     * 
     * @param {number} x - The x-coordinate of the object.
     * @param {number} y - The y-coordinate of the object.
     * @param {boolean} direction - The direction in which the object is flying.
     */
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
        this.loadImages(this.redSmashImages);
        this.animate();
    }

    
/**
 * Handles the animation of the throwable object.
 * 
 * This method manages the animation of the throwable object while it's flying and upon collision. If the object is
 * not colliding with anything, it continuously plays the flying axe animation. Once a collision is detected, it
 * stops the flying animation and plays a red smash animation. The objectâ€™s state is updated to indicate that it
 * has been used, and its dimensions are adjusted.
 */
    animate() {

        let throwableObjectIntervall = setInterval(() =>{
            if (!this.collision) {
                this.playAnimation(this.flyingAxeImages);
            } else if (this.collision) {
                this.used = true;
                this.x += 0;
                this.speedY = 0;
                this.width = 140;
                this.height = 140;
                this.playSingleAnimation(this.redSmashImages, throwableObjectIntervall);
            } 
        }, 50);

        this.throw();
    }


/**
 * Initiates the throwing motion of the throwable object and applies gravity.
 * 
 * This method applies gravity to the throwable object and starts a throwing motion where the object moves either 
 * to the left or right depending on its direction. The object's position is updated at a regular interval to simulate
 * the throw.
 */
    throw() {
        this.applyGravityForThrowableObjects();
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