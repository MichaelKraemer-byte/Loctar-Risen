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
    offset = {
        top: 60,
        bottom: 40,
        right: 70,
        left: 60
    };


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
        this.applyGravity();
        this.animate();
    };




    animate(){

        // Moving & Sound
        setInterval(() => {
            // this.refreshOffset();
            // walk RIGHT 
            this.walkSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.xStop) {
                if (this.HP > 0 && !this.meleeAttackProcess) {
                    this.walkRight();
                    this.speed = 3;

                    // RUN
                    if (this.world.keyboard.SHIFT) {
                        this.run();}
                    // } else {
                    //     this.playSound(this.walkSound, 0.35, 1);
                    // }                    
                }

            };
            // walk LEFT
            if (this.world.keyboard.LEFT && this.x > -300 && this.HP > 0 && !this.meleeAttackProcess) {
                this.walkLeft();
                this.speed = 3;

                // RUN
                if (this.world.keyboard.SHIFT) {
                    this.run()}
                // } else {
                //     this.playSound(this.walkSound, 0.35, 1);
                // }
            };
            // jump
            if (this.world.keyboard.SPACE && this.HP > 0) {
                if (this.isStandingOnObstacle || !this.isAboveGround()) {
                    this.isStandingOnObstacle = false;
                    this.jump();
                }
            };
            this.world.camera_x = -this.x + 20;
        }, 1000 / 60);


        // Images
        setInterval(() => {
            // WALK Images
            if (!this.meleeAttackProcess) {
                if (!this.isAboveGround() || this.isOnObstacle()){
                    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                        if (!this.damageProcess && !this.world.keyboard.SHIFT && this.HP > 0) {
                            this.playAnimation(this.walkImages);
                        };            
                    }
                }

            // RUN Images
                if (this.world.keyboard.SHIFT) {
                    if (!this.isAboveGround() || this.isOnObstacle()){
                        if (this.HP > 0 && !this.damageProcess) {
                            this.playAnimation(this.runImages);
                        }
                    }
                }
            }
        }, 35);
        

        // IDLE Images
        setInterval(() => {
            if (this.world.keyboard.NONE && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.meleeAttackProcess) {
                if (!this.isAboveGround() || this.isOnObstacle()){
                    if (!this.damageProcess && this.HP > 0) {
                        this.playAnimation(this.idleImages);
                    }
                }
            }
        }, 80);

        // JUMP Images
        setInterval(() => {
            if (this.isJumping() && this.world.keyboard.SPACE) {
                if (!this.damageProcess && this.HP > 0 && !this.isStandingOnObstacle) {
                    this.playAnimation(this.jumpImages);                    
                }
            }
            if (this.isFalling() && this.world.keyboard.SPACE) {
                if (!this.damageProcess && this.HP > 0 && !this.isStandingOnObstacle) {
                    this.playAnimation(this.fallImages);                    
                }
            }
        }, 70);

        // HURT Images
        setInterval(() => {
            if (this.damageProcess && this.HP > 0) {
                this.playAnimation(this.hurtImages);
            }
        }, 120);

        // DYING Images
        let dyingIntervall = setInterval(() => {
            if (this.isDead()) {
                this.playSingleAnimation(this.dyingImages, dyingIntervall);
            };
        }, 100);

        // THROW Images
        setInterval(() => {
            if (this.axes !== 0 && !this.throwAttackProcess && this.world.keyboard.E && !this.isDead() ) {
                this.playAnimation(this.throwImages);
                this.throwAttackProcess = true;
                setTimeout(() => {
                    this.throwAttackProcess = false;
                }, 1000 / 30);
            }
        }, 15);

        // MELEE ATTACK Images
        setInterval(() => {
            if (this.world.keyboard.Q && !this.isDead()) {
                this.playAnimation(this.meleeAttackImages);
                this.speed = 0;
                this.meleeAttackProcess = true;
                setTimeout(() => {
                    this.meleeAttackProcess = false;
                }, 300); 
            }
        }, 25);
    };

}