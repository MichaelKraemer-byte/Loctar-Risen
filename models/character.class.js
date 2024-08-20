class Character extends MovableObject{

    idleImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_014.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_015.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_016.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_017.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_014.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_015.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_016.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_017.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_014.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_015.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_016.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_017.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_014.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_015.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_016.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Idle Blinking/0_Orc_Idle Blinking_017.png'
    ];

    walkImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_014.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_015.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_016.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_017.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_018.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_019.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_020.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_021.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_022.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_023.png'
    ];

    jumpAndFallImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_005.png'
    ]

    jumpImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Jump Start/0_Orc_Jump Start_005.png'
    ];

    fallImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_005.png'
    ];

    hurtImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_011.png',
    ];

    runImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Running/0_Orc_Running_011.png'
    ];

    dyingImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_011.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_012.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_013.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_014.png'
    ];

    throwImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Throwing in The Air/0_Orc_Throwing in The Air_011.png'
    ];

    meleeAttackImages = [
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_000.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_001.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_002.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_003.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_004.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_005.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_006.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_007.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_008.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_009.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_010.png',
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_011.png'
    ];

    world;
    walkSound = new Audio('assets/audio/walking/walking-on-tall-grass.wav');
    jumpSound = new Audio('assets/audio/character/jump/jumpWhoosh.mp3');
    meleeAttackSound = new Audio('assets/audio/character/meleeAttack/meleeAttackCharacter.mp3');
    hurtSound = new Audio('assets/audio/character/pain/characterHurt.mp3');
    throwSound = new Audio('assets/audio/character/throw/throwcut.mp3');
    dyingSound = new Audio('assets/audio/character/dying/characterdying.mp3');
    stampJumpSound = new Audio ('assets/audio/character/stampJump/stampJump.mp3');
    throwingAxeHitSound = new Audio('assets/audio/character/throw/throwingAxeHitCut.mp3');
    collectAxeSound = new Audio('assets/audio/character/collect/axeCollectCut.mp3');
    collectCoinSound = new Audio('assets/audio/character/collect/coin.mp3');
    gameOverSound = new Audio('assets/audio/game/gameOver/gameOver.mp3');
    winSound = new Audio('assets/audio/game/gameOver/victoryYelling.mp3');
    meleeHitSound = new Audio('assets/audio/character/meleeAttack/axeMeleeHit.mp3');

    offset = {
        top: 60,
        bottom: 40,
        right: 90,
        left: 80
    };
    gravityInterval = false;
    jumpingProcess = false;
    jumpingProcessInterval = false;


    constructor(){
        super();
        this.speed = 3;
        this.y = 280;
        this.setBodyVariables();
        this.loadImages(this.idleImages);
        this.loadImages(this.walkImages);
        this.loadImages(this.runImages);
        this.loadImages(this.jumpImages);
        this.loadImages(this.fallImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.loadImages(this.throwImages);
        this.loadImages(this.meleeAttackImages);
        this.loadImages(this.jumpAndFallImages);
        this.monitorJumpingProcessConditions()
        this.monitorGravityConditions();
        this.animate();
    };



/**
 * Handles the animation and behavior updates for the Character.
 */
animate() {
    this.setupMovementAndSound();
    this.setupJumping();
    this.setupWalkingImages();
    this.setupIdleImages();
    this.setupJumpingImages();
    this.setupFallingImages();
    this.setupHurtImages();
    this.setupDyingImages();
    this.setupThrowingImages();
    this.setupMeleeAttackImages();
}



/**
 * Handles character movement, running, and associated sound effects.
 */
setupMovementAndSound() {
    setInterval(() => {
        this.walkSound.pause();
        if (this.shouldMoveRight()) this.moveRight();
        if (this.shouldMoveLeft()) this.moveLeft();
        this.updateCameraPosition();
    }, 1000 / 60);
}



/**
 * Determines if the character should move to the right.
 * 
 * @returns {boolean} - True if the character should move right.
 */
shouldMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.xStop && this.HP > 0 && !this.meleeAttackProcess;
}



/**
 * Determines if the character should move to the left.
 * 
 * @returns {boolean} - True if the character should move left.
 */
shouldMoveLeft() {
    return this.world.keyboard.LEFT && this.x > -300 && this.HP > 0 && !this.meleeAttackProcess;
}



/**
 * Moves the character to the right and handles the running sound.
 */
moveRight() {
    this.walkRight();
    this.speed = 3;
    if (this.world.keyboard.SHIFT) this.run();
    else this.playSound(this.walkSound, 0.35, 1);
}



/**
 * Moves the character to the left and handles the running sound.
 */
moveLeft() {
    this.walkLeft();
    this.speed = 3;
    if (this.world.keyboard.SHIFT) this.run();
    else this.playSound(this.walkSound, 0.35, 1);
}



/**
 * Updates the camera position to follow the character.
 */
updateCameraPosition() {
    this.world.camera_x = -this.x + 20;
}



/**
 * Handles the character's jumping actions and sound effects.
 */
setupJumping() {
    setInterval(() => {
        if (this.shouldJump()) this.performJump();
    }, 1000 / 200);

    setInterval(() => {
        if (this.shouldJump()) this.performJump();
    }, 1000 / 200);
}



/**
 * Determines if the character should jump.
 * 
 * @returns {boolean} - True if the character should jump.
 */
shouldJump() {
    return this.world.keyboard.SPACE && this.HP > 0 && this.isStandingOnObstacle;
}



/**
 * Performs the jump action and plays the jump sound.
 */
performJump() {
    this.jump();
    this.playSound(this.jumpSound, 0.07, 1);
}



/**
 * Handles the character's walking and running animations.
 */
setupWalkingImages() {
    setInterval(() => {
        if (this.shouldAnimateWalk()) this.animateWalk();
        if (this.world.keyboard.SHIFT) this.animateRun();
    }, 35);
}



/**
 * Determines if the walking animation should be played.
 * 
 * @returns {boolean} - True if the walking animation should be played.
 */
shouldAnimateWalk() {
    return !this.meleeAttackProcess && (!this.isAboveGround() || this.isStandingOnObstacle) && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.damageProcess && !this.world.keyboard.SHIFT && this.HP > 0;
}



/**
 * Plays the walking animation.
 */
animateWalk() {
    this.playAnimation(this.walkImages);
}



/**
 * Plays the running animation.
 */
animateRun() {
    if (!this.isAboveGround() || this.isStandingOnObstacle) {
        if (this.HP > 0 && !this.damageProcess) {
            this.playAnimation(this.runImages);
        }
    }
}



/**
 * Handles the character's idle animations.
 */
setupIdleImages() {
    setInterval(() => {
        if (this.shouldAnimateIdle()) this.playAnimation(this.idleImages);
    }, 80);
}



/**
 * Determines if the idle animation should be played.
 * 
 * @returns {boolean} - True if the idle animation should be played.
 */
shouldAnimateIdle() {
    return this.world.keyboard.NONE && !this.isDead() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.damageProcess && this.speedY == 0;
}



/**
 * Handles the character's jumping animations.
 */
setupJumpingImages() {
    setInterval(() => {
        if (this.isJumping()) this.playJumpAnimation();
    }, 70);
}



/**
 * Plays the jumping animation.
 */
playJumpAnimation() {
    if (!this.damageProcess && this.HP > 0 && !this.isStandingOnObstacle) {
        this.playSingleAnimationAndStopAtLatestImage(this.jumpImages);
    }
}



/**
 * Handles the character's falling animations.
 */
setupFallingImages() {
    setInterval(() => {
        if (this.isFalling() && !this.isJumping()) this.playFallingAnimation();
        else this.resetFallingSpeed();
    }, 70);
}



/**
 * Plays the falling animation.
 */
playFallingAnimation() {
    if (!this.damageProcess && this.HP > 0 && !this.isStandingOnObstacle) {
        this.playSingleAnimationAndStopAtLatestImage(this.fallImages);
    }
}



/**
 * Resets the falling speed if the character is on the ground or an obstacle.
 */
resetFallingSpeed() {
    if (this.y == 280 || this.isStandingOnObstacle) {
        if (!this.world.keyboard.SPACE) this.speedY = 0;
    }
}



/**
 * Handles the character's hurt animations and sound effects.
 */
setupHurtImages() {
    setInterval(() => {
        if (this.damageProcess && this.HP > 0) this.playHurtAnimation();
    }, 120);
}



/**
 * Plays the hurt animation and sound.
 */
playHurtAnimation() {
    this.playSound(this.hurtSound, 0.4, 1);
    this.playAnimation(this.hurtImages);
}



/**
 * Handles the character's dying animations and sound effects.
 */
setupDyingImages() {
    let dyingInterval = setInterval(() => {
        if (this.isDead()) this.playDyingAnimation(dyingInterval);
    }, 100);
}



/**
 * Plays the dying animation and sound, and triggers game over actions.
 * 
 * @param {Object} interval - The interval to clear when dying.
 */
playDyingAnimation(interval) {
    this.playSound(this.gameOverSound, 0.7, 1.5);
    this.playSound(this.dyingSound, 0.4, 1);
    this.playSingleAnimation(this.dyingImages, interval);
    if (!this.world.gameOver) {
        setTimeout(() => {
            slideInFailureParchment();
        }, 1000);        
    }

}



/**
 * Handles the character's throwing animations and sound effects.
 */
setupThrowingImages() {
    setInterval(() => {
        if (this.shouldThrow()) this.performThrow();
    }, 15);
}



/**
 * Determines if the character should throw an object.
 * 
 * @returns {boolean} - True if the character should throw.
 */
shouldThrow() {
    return this.axes !== 0 && !this.throwAttackProcess && this.world.keyboard.E && !this.isDead();
}



/**
 * Performs the throw action and plays the throw animation and sound.
 */
performThrow() {
    this.playSound(this.throwSound, 1, 1);
    this.playAnimation(this.throwImages);
    this.throwAttackProcess = true;
    setTimeout(() => {
        this.throwAttackProcess = false;
    }, 1000 / 30);
}



/**
 * Handles the character's melee attack animations and sound effects.
 */
setupMeleeAttackImages() {
    setInterval(() => {
        if (this.world.keyboard.Q && !this.isDead()) this.performMeleeAttack();
    }, 25);
}



/**
 * Performs the melee attack action and plays the melee attack animation and sound.
 */
performMeleeAttack() {
    this.playSound(this.meleeAttackSound, 0.2, 1);
    this.playAnimation(this.meleeAttackImages);
    this.speed = 0;
    this.meleeAttackProcess = true;
    setTimeout(() => {
        this.meleeAttackProcess = false;
    }, 300);
}



    /**
     * Monitors and updates the character's gravity conditions.
     * - Sets the character's ground level.
     * - Starts the gravity interval if the character is jumping.
     * - Stops the gravity interval if the character is standing on an obstacle.
     */
    monitorGravityConditions() {
        setInterval(() => {
            this.setOnGroundLevel();

            if (this.jumpingProcess) {

                this.startGravityInterval();                
            }

            if (this.isStandingOnObstacle) {
                if (this.gravityInterval) {
                    this.speedY = 0;
                    clearInterval(this.gravityInterval);
                    this.gravityInterval = false;
                }
            }
        }, 1000 / 20);
    }


    /**
     * Starts the gravity interval if it is not already running.
     * - Updates the character's vertical position based on gravity and jumping state.
     * - Stops the interval if the character is standing on an obstacle.
     */
    startGravityInterval() {
        if (!this.gravityInterval) {
            this.gravityInterval = setInterval(() => {
                    this.setOnGroundLevel();
                    // console.log(this.isStandingOnObstacle);
                    // (!this.isStandingOnObstacle && this.y < 280) 
                if (this.jumpingProcess) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                    // console.log(this.speedY);
                    // console.log(this.jumpingProcess);
                }
                if (this.isStandingOnObstacle) {
                    this.speedY = 0;
                    clearInterval(this.gravityInterval);
                    this.gravityInterval = false; // Intervall-Handle zurücksetzen
                }
            },  1000 / 30)
        }
    }


    /**
     * Monitors and updates the character's jumping process conditions.
     * - Starts the jumping process interval if the character is jumping or falling.
     * - Stops the jumping process interval if the character is standing on an obstacle.
     */
    monitorJumpingProcessConditions(){
        setInterval(()=> {
            if (this.isJumping || this.isFalling()){
                if (!this.jumpingProcess) {

                this.startJumpingProcessInterval();
                }
            }  
            if (this.isStandingOnObstacle) {
                this.jumpingProcess = false;
                clearInterval(this.jumpingProcessInterval);
                this.jumpingProcessInterval = false; // Intervall-Handle zurücksetzen
            }                   
        }, 1000 / 30);
    }


    /**
     * Starts the jumping process interval if it is not already running.
     * - Updates the character's jumping process state based on jumping or falling.
     * - Stops the interval if the character is standing on an obstacle.
     */
    startJumpingProcessInterval(){
        if (!this.jumpingProcessInterval) {

            this.jumpingProcessInterval = setInterval(()=> {
                if (this.isJumping || this.isFalling()){
                    if (!this.jumpingProcess) {

                    this.jumpingProcess = true;
                    }
                }  
                if (this.isStandingOnObstacle) {
                    this.jumpingProcess = false;
                    clearInterval(this.jumpingProcessInterval);
                    this.jumpingProcessInterval = false; // Intervall-Handle zurücksetzen
                }  
            }, 1000 / 140);                 
        }
    }



}