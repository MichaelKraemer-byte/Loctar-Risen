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

    jumpImages = [
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
        'assets/crafties/orcs/Orc/PNG/PNG Sequences/Falling Down/0_Orc_Falling Down_005.png',
    ];
    world;
    walkSound = new Audio('assets/audio/walking/walking-on-tall-grass.wav');
    y = 280;


    constructor(){
        super();
        // keyboard = world.keyboard;
        this.loadImages(this.idleImages);
        this.loadImages(this.walkImages);
        this.loadImages(this.jumpImages);
        this.applyGravity();
        this.animate();
    };


    animate(){

        // Moving & Sound
        setInterval(() => {
            // walk RIGHT 
            this.walkSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x ) {
                this.walkRight();
                this.playSound(this.walkSound, 0.35);
            }
            // jump
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            };
            // walk LEFT
            if (this.world.keyboard.LEFT && this.x > -300) {
                this.walkLeft();
                this.playSound(this.walkSound, 0.35);
            };
            this.world.camera_x = -this.x + 20;
        }, 1000 / 60);




        // Images
        setInterval(() => {
        // WALK Images
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.walkImages);
            }}, 35);
        // IDLE Images
        setInterval(() => {
            if (this.world.keyboard.NONE) {
                this.playAnimation(this.idleImages);
            }
        }, 80);
        // JUMP Images
        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.jumpImages);
            }
        }, 120);
    };
}