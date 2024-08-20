/**
 * Represents a Minotaur enemy in the game with various animations and sounds.
 * 
 * This class handles the Minotaur's idle, walking, hurt, dying, and melee attack animations.
 * It also manages sound effects for different actions such as walking, attacking, and getting hurt.
 * The Minotaur's position, speed, and interaction with the game world are controlled by this class.
 * @class
 * @extends MovableObject
 */
class Minotaur_1 extends MovableObject {

    /**
     * Array of image paths for the Minotaur's idle animation.
     * 
     * @type {string[]}
     */
    idleImages = [
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_011.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_012.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_013.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_014.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_015.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_016.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_017.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_011.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_012.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_013.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_014.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_015.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_016.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle/0_Minotaur_Idle_017.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_011.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_012.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_013.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_014.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_015.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_016.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Idle Blinking/0_Minotaur_Idle Blinking_017.png'
    ];


    /**
     * Array of image paths for the Minotaur's walking animation.
     * 
     * @type {string[]}
     */
    walkImages = [
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_000.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_011.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_012.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_013.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_014.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_015.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_016.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_017.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_018.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_019.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_020.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_021.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_022.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Walking/0_Minotaur_Walking_023.png'
    ];


    /**
     * Array of image paths for the Minotaur's hurt animation.
     * 
     * @type {string[]}
     */
    hurtImages = [
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_000.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Hurt/0_Minotaur_Hurt_011.png'
    ];


    /**
     * Array of image paths for the Minotaur's dying animation.
     * 
     * @type {string[]}
     */
    dyingImages = [
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_000.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_011.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_012.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_013.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Dying/0_Minotaur_Dying_014.png'
    ];


    /**
     * Array of image paths for the Minotaur's melee attack animation.
     * 
     * @type {string[]}
     */
    meleeAttackImages = [
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_000.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_001.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_002.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_003.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_004.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_005.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_006.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_007.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_008.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_009.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_010.png',
        'assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_011.png'
    ];


    /**
     * The world in which the Minotaur exists.
     * 
     * @type {World}
     */
    world;

    /**
     * Sound effect played when the Minotaur walks.
     * 
     * @type {HTMLAudioElement}
     */
    walkSound = new Audio('assets/audio/walking/walking-on-crunchy-road.wav');

    /**
     * Sound effect played when the Minotaur performs a melee attack.
     * 
     * @type {HTMLAudioElement}
     */
    meleeAttackSound = new Audio('assets/audio/enemy/slash/knife-slash.mp3');

    /**
     * Sound effect played when the Minotaur is hit.
     * 
     * @type {HTMLAudioElement}
     */
    hitSound = new Audio('assets/audio/enemy/hit/enemyHitonCharacter.mp3');

    /**
     * Sound effect played when the Minotaur is dying.
     * 
     * @type {HTMLAudioElement}
     */
    dyingSound = new Audio('assets/audio/enemy/dying/dying.mp3');

    /**
     * Sound effect played when the Minotaur gets hurt.
     * 
     * @type {HTMLAudioElement}
     */
    hurtSound = new Audio('assets/audio/enemy/hurt/enemeHurtGrunts.mp3');

    /**
     * Offset values for collision detection.
     * 
     * @type {Object}
     * @property {number} top - The top offset for collision detection.
     * @property {number} bottom - The bottom offset for collision detection.
     * @property {number} right - The right offset for collision detection.
     * @property {number} left - The left offset for collision detection.
     */
    offset = {
        top: 60,
        bottom: 40,
        right: 70,
        left: 60
    };

    /**
     * Array of image filenames for the Minotaur's slashing animation.
     * 
     * @type {string[]}
     */
    slashingFrames = [
        '0_Minotaur_Slashing_004.png',
        '0_Minotaur_Slashing_005.png',
        '0_Minotaur_Slashing_006.png'
    ];

    /**
     * Creates an instance of the `Minotaur_1` class.
     * 
     * @param {number} x - The initial x-coordinate of the Minotaur.
     */
    constructor(x){
        super(); 
        this.x = x + 700 + Math.random() * 1000;
        this.initialX = this.x;
        this.speed = 5 + Math.random() * 0.4;
        this.initialSpeed = this.speed;
        this.setBodyVariables();
        this.loadImages(this.idleImages);
        this.loadImages(this.walkImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.loadImages(this.meleeAttackImages);
        this.animate();
    };


/**
 * Manages the animation and behavior updates for the Minotaur enemy.
 */
animate() {
    this.setupWalkingBehavior();
    this.setupWalkingAnimation();
    this.setupIdleAnimation();
    this.setupHurtAnimation();
    this.setupDyingAnimation();
    this.setupAttackAnimation();
    this.setupAttackCheck();
}


/**
 * Handles the walking behavior of the Minotaur.
 */
setupWalkingBehavior() {
    setInterval(() => {
        this.walkSound.pause();
        if (this.shouldWalk()) {
            this.determineWalkingDirection();
        }
    }, 1000 / 20);
}


/**
 * Determines if the Minotaur should walk.
 * 
 * @returns {boolean} - True if the Minotaur should walk.
 */
shouldWalk() {
    return this.HP > 0 && !this.damageProcess && this.gameHasStarted;
}


/**
 * Determines the direction in which the Minotaur should walk.
 */
determineWalkingDirection() {
    const distance = this.getDistanceToCharacter();
    if (!this.meleeAttackProcess) {
        if (this.world.character.isDead()) {
            this.stopWalking();
        } else if (distance <= 450) {
            this.handleCharacterInRange(distance);
        } else {
            this.returnToInitialPosition();
        }
    } else {
        this.stopWalking();
    }
}


/**
 * Gets the distance between the Minotaur and the player character.
 * 
 * @returns {number} - The distance between the Minotaur and the player character.
 */
getDistanceToCharacter() {
    return Math.abs(this.x - this.world.character.x);
}


/**
 * Handles the Minotaur's behavior when the player character is within range.
 * 
 * @param {number} distance - The distance between the Minotaur and the player character.
 */
handleCharacterInRange(distance) {
    if (this.characterIsOnHeight()) {
        this.approachCharacter();
    } else {
        this.stopWalking();
    }
}


/**
 * Handles the Minotaur's movement towards the player character.
 */
approachCharacter() {
    this.objectViewsCharacter = true;
    this.isWalking = true;
    if (this.world.character.x > this.x) {
        this.walkRight();
        this.playSound(this.walkSound, 0.06, 1);
    } else {
        this.walkLeft();
        this.playSound(this.walkSound, 0.06, 1);
    }
}


/**
 * Returns the Minotaur to its initial position if the player character is out of range.
 */
returnToInitialPosition() {
    this.objectViewsCharacter = false;
    if (this.x < this.initialX) {
        this.walkRight();
        this.playSound(this.walkSound, 0.06, 1);
    } else if (this.x > this.initialX) {
        this.walkLeft();
        this.playSound(this.walkSound, 0.06, 1);
    } else {
        this.stopWalking();
    }
}


/**
 * Stops the Minotaur's movement and plays the idle animation.
 */
stopWalking() {
    this.isWalking = false;
    this.speed = 0;
    this.playAnimation(this.idleImages);
}


/**
 * Handles the walking animation frames.
 */
setupWalkingAnimation() {
    setInterval(() => {
        if (this.shouldAnimateWalk()) this.playAnimation(this.walkImages);
    }, 50);
}


/**
 * Determines if the walking animation should be played.
 * 
 * @returns {boolean} - True if the walking animation should be played.
 */
shouldAnimateWalk() {
    return this.isWalking && this.HP > 0 && !this.damageProcess && !this.meleeAttackProcess && !this.world.character.isDead();
}


/**
 * Handles the idle animation when the Minotaur is not walking.
 */
setupIdleAnimation() {
    let startIdleAnimation = setInterval(() => {
        if (this.shouldAnimateIdle()) this.playAnimation(this.idleImages);
    }, 80);
}


/**
 * Determines if the idle animation should be played.
 * 
 * @returns {boolean} - True if the idle animation should be played.
 */
shouldAnimateIdle() {
    return !this.isWalking && this.HP > 0 && !this.damageProcess && !this.meleeAttackProcess;
}


/**
 * Handles the hurt animation and sound effects when the Minotaur is damaged.
 */
setupHurtAnimation() {
    let hurtInterval = setInterval(() => {
        if (this.shouldAnimateHurt()) {
            this.playSingleAnimation(this.hurtImages, hurtInterval);
            this.playSound(this.hurtSound, 0.2, 1);
        }
    }, 70);
}


/**
 * Determines if the hurt animation should be played.
 * 
 * @returns {boolean} - True if the hurt animation should be played.
 */
shouldAnimateHurt() {
    return this.damageProcess && this.HP > 0;
}


/**
 * Handles the dying animation and sound effects when the Minotaur's health points (HP) reach zero.
 */
setupDyingAnimation() {
    let dyingInterval = setInterval(() => {
        if (this.isDead()) {
            this.playSingleAnimation(this.dyingImages, dyingInterval);
            this.dyingSound.pause();
            this.playSound(this.dyingSound, 0.16, 1.2);
        }
    }, 50);
}


/**
 * Handles the attack animation and sound effects when the Minotaur is in melee range.
 */
setupAttackAnimation() {
    setInterval(() => {
        if (this.shouldAnimateAttack()) this.performAttack();
    }, 50);
}


/**
 * Determines if the attack animation should be played.
 * 
 * @returns {boolean} - True if the attack animation should be played.
 */
shouldAnimateAttack() {
    return this.meleeRangeToCharacter && !this.isDead() && !this.world.character.isDead();
}


/**
 * Performs the attack action and resets the attack state after a delay.
 */
performAttack() {
    this.playSound(this.meleeAttackSound, 0.2, 1);
    this.playAnimation(this.meleeAttackImages);
    this.speed = 0;
    this.meleeAttackProcess = true;
    setTimeout(() => {
        this.meleeAttackProcess = false;
        this.meleeRangeToCharacter = false;
    }, 300);
}


/**
 * Checks the current animation frame to determine if the Minotaur is in an attacking state.
 */
setupAttackCheck() {
    setInterval(() => {
        const currentFrame = this.getCurrentFrame();
        this.isAttacking = this.slashingFrames.includes(currentFrame);
    }, 1000 / 32);
}


/**
 * Retrieves the current frame of the animation.
 * 
 * @returns {string} - The current frame file name.
 */
getCurrentFrame() {
    return this.img.src.split('/').pop(); // Only the file name
}

}