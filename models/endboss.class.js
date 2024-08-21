/**
 * Represents the end boss in the game, a powerful enemy character with various states and animations.
 * Inherits from the `MovableObject` class.
 * @class
 */ 
class Endboss extends MovableObject {

    /**
     * Array of image paths for the walking animation.
     * @type {string[]}
     */
    walkImages = [
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_000.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_001.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_002.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_003.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_004.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_005.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_006.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_007.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_008.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_009.png'
    ];

    /**
     * Array of image paths for the hurt animation.
     * @type {string[]}
     */
    hurtImages = [
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_000.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_001.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_002.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_003.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_004.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_005.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_006.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_007.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_008.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_HURT_009.png'
    ];


    /**
     * Array of image paths for the dying animation.
     * @type {string[]}
     */
    dyingImages = [
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_000.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_001.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_002.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_003.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_004.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_005.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_006.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_007.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_008.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_DIE_009.png'
    ];


    /**
     * Array of image paths for the melee attack animation.
     * @type {string[]}
     */
    meleeAttackImages = [
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_000.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_001.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_002.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_003.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_004.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_005.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_006.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_007.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_008.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_009.png'
    ];


    /**
     * Array of image paths for the idle animation.
     * @type {string[]}
     */
    idleImages = [
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_000.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_001.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_002.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_003.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_004.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_005.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_006.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_007.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_008.png',
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_IDLE_009.png'
    ];


    /**
     * Array of image paths for the slashing attack animation.
     * @type {string[]}
     */
    slashingFrames = [
        'Troll_02_1_ATTACK_006.png',
        'Troll_02_1_ATTACK_007.png'
    ]


    /**
     * The game world in which the end boss exists.
     * @type {World}
     */
    world;

    /**
     * Audio object for the walking sound effect.
     * @type {HTMLAudioElement}
     */
    walkSound = new Audio('assets/audio/walking/walking-on-crunchy-road.wav');

    /**
     * Audio object for the hurt sound effect.
     * @type {HTMLAudioElement}
     */
    hurtSound = new Audio('assets/audio/boss/hurt/trollPain.mp3');

    /**
     * Audio object for the hit sound effect.
     * @type {HTMLAudioElement}
     */
    hitSound = new Audio('assets/audio/boss/hit/BigHammerHitCut.mp3');

    /**
     * Audio object for the dying sound effect.
     * @type {HTMLAudioElement}
     */
    dyingSound = new Audio('assets/audio/boss/dying/TrollDying.mp3');

    /**
     * Audio object for the melee attack sound effect.
     * @type {HTMLAudioElement}
     */
    meleeAttackSound = new Audio('assets/audio/boss/meleeAttack/slashSound.mp3');

    /**
     * The width of the end boss.
     * @type {number}
     */
    width = 700;

    /**
     * The height of the end boss.
     * @type {number}
     */
    height = 500;

    /**
     * The y-coordinate of the end boss.
     * @type {number}
     */
    y = 22;

    /**
     * The health points of the end boss.
     * @type {number}
     */
    HP = 300;

    /**
     * The offset for positioning the end boss.
     * @type {Object}
     * @property {number} top - The top offset.
     * @property {number} bottom - The bottom offset.
     * @property {number} right - The right offset.
     * @property {number} left - The left offset.
     */
    offset = {
        top: 180,
        bottom: 70,
        right: 235,
        left: 235
    };

    /**
     * Creates an instance of the `Endboss` class.
     * @param {number} x - The x-coordinate of the end boss's position.
     */
    constructor(x){
        super(); 
        this.HP = this.HP;
        this.x = x;
        this.speed = 9 + Math.random() * 0.4;
        this.initialSpeed = this.speed;
        this.initialX = this.x;
        this.setBodyVariables();
        this.loadImages(this.walkImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.loadImages(this.idleImages);
        this.loadImages(this.meleeAttackImages);
        this.animate();
    };


/**
 * Handles the animation and behavior updates for the Endboss.
 */
animate() {
    this.setupDyingAnimation();
    this.setupWalkingBehavior();
    this.setupWalkingAnimation();
    this.setupIdleAnimation();
    this.setupDeadControl();
    this.setupHurtAnimation();
    this.setupAttackAnimation();
    this.setupAttackCheck();
}



/**
 * Handles the dying animation and sound effects.
 */
setupDyingAnimation() {
    let dyingInterval = setInterval(() => {
        if (this.isDead()) {
            this.playSound(this.dyingSound, 1, 3);
            this.playSingleAnimation(this.dyingImages, dyingInterval);
        }
    }, 100);
}



/**
 * Controls the Endboss's walking behavior and direction.
 */
setupWalkingBehavior() {
    setInterval(() => {
        this.walkSound.pause();
        if (this.shouldWalk() && this.isVisible()) {
            this.determineWalkingDirection();
        }
    }, 70);
}



/**
 * Determines if the Endboss should walk.
 * 
 * @returns {boolean} - True if the Endboss should walk.
 */
shouldWalk() {
    return this.HP > 0 && !this.damageProcess && this.speed > 0 && this.gameHasStarted && !this.world.gameOver;
}



/**
 * Determines the direction in which the Endboss should walk.
 */
determineWalkingDirection() {
    if (this.isCharacterInRange() && !this.world.character.isDead()) {
        this.approachCharacter();
    } else {
        this.returnToInitialPosition();
    }
}



/**
 * Checks if the character is within range of the Endboss.
 * 
 * @returns {boolean} - True if the character is within range.
 */
isCharacterInRange() {
    const distance = Math.abs(this.x - this.world.character.x);
    return distance <= 250;
}



/**
 * Handles the Endboss's movement towards the character.
 */
approachCharacter() {
    this.objectViewsCharacter = true;
    this.isWalking = true;
    if (!this.world.gameOver){
        if (this.shouldWalkRight()) {
            this.walkRight();
            this.playSound(this.walkSound, 0.3, 1);
        } 
        else {
            this.walkLeft()
            this.playSound(this.walkSound, 0.3, 1);
        };        
    }

}



/**
 * Determines if the Endboss should walk to the right.
 * 
 * @returns {boolean} - True if the Endboss should walk right.
 */
shouldWalkRight() {
    return this.world.character.x - this.world.character.offset.right >= this.x + this.offset.left && this.characterIsOnHeight();
}



/**
 * Returns the Endboss to its initial position if the character is out of range.
 */
returnToInitialPosition() {
    this.objectViewsCharacter = false;
    if (this.x < this.initialX){
        this.walkRight();
        this.playSound(this.walkSound, 0.3, 1);
    } 
    else if (this.x > this.initialX){
        this.walkLeft();
        this.playSound(this.walkSound, 0.3, 1);
    } 
    else this.stopWalking();
}



/**
 * Stops the Endboss's movement and plays the idle animation.
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
    }, 70);
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
 * Handles the idle animation when the Endboss is not walking.
 */
setupIdleAnimation() {
    setInterval(() => {
        if (this.shouldAnimateIdle()) this.playAnimation(this.idleImages);
    }, 100);
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
 * Controls the state of the Endboss when its HP reaches zero.
 */
setupDeadControl() {
    setInterval(() => {
        if (this.HP == 0) this.damageProcess = false;
    }, 50);
}



/**
 * Handles the hurt animation and sound effects when the Endboss is damaged.
 */
setupHurtAnimation() {
    let hurtInterval = setInterval(() => {
        if (this.shouldAnimateHurt()) {
            this.playSound(this.hurtSound, 1, 1);
            this.playSingleAnimationAndStopAtLatestImage(this.hurtImages, hurtInterval);
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
 * Handles the attack animation and sound effects when the Endboss is in melee range.
 */
setupAttackAnimation() {
    setInterval(() => {
        if (this.shouldAnimateAttack()) this.performAttack();
    }, 55);
}



/**
 * Determines if the attack animation should be played.
 * 
 * @returns {boolean} - True if the attack animation should be played.
 */
shouldAnimateAttack() {
    return this.meleeRangeToCharacter && !this.isDead() && !this.world.character.isDead() && !this.world.gameOver;
}



/**
 * Performs the attack action and resets the attack state after a delay.
 */
performAttack() {
    this.playSound(this.meleeAttackSound, 1, 1);
    this.playAnimation(this.meleeAttackImages);
    this.speed = 0;
    this.meleeAttackProcess = true;
    setTimeout(() => {
        this.meleeAttackProcess = false;
        this.meleeRangeToCharacter = false;
    }, 500);
}



/**
 * Checks if the current animation frame corresponds to an attack frame.
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