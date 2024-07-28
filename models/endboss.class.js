class Endboss extends MovableObject {


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


    world;
    walkSound = new Audio('assets/audio/walking/walking-on-crunchy-road.wav');
    width = 700;
    height = 500;
    y = 22;
    x = 2000;
    offset = {
        top: 180,
        bottom: 70,
        right: 235,
        left: 235
    }


    constructor(){
        super(); //ruft variablen und constructor funktionen auf (MovableObject)
        this.speed = 2 + Math.random() * 0.4;
        this.initialSpeed = this.speed;
        this.setBodyVariables();
        this.loadImages(this.walkImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.loadImages(this.meleeAttackImages);
        this.animate();
    };


    animate(){
    
        // DYING Images
        let dyingIntervall = setInterval(() => {
            if (this.isDead()) {
                this.playSingleAnimation(this.dyingImages, dyingIntervall);
            };
        }, 1000 /50);
        
        // // Offset Refresh
        // setInterval(() => {
        //     this.refreshOffset();
        // }, 1000 / 25);

        // WALK
        setInterval(() => {
            if (this.HP > 0 && !this.damageProcess && this.speed > 0) {
                if (this.characterIsOnHeight() || this.world.keyboard.SPACE) {
                    if(!this.meleeAttackProcess) {
                        if (this.world.character.x - this.world.character.offset.right >= this.x + this.offset.left) {
                            this.walkRight();
                        } else {
                            this.walkLeft();
                        }                       
                    }

                } else {
                    this.speed = 0;
                }
        //         this.playSound(this.walkSound, 0.4 , 1);
        //     } else if (!this.isVisible()) {
        //         this.pauseSound(this.walkSound);
        //     }
            }
        }, 1000 / 40);

        // WALK Images
        setInterval(() => {
            if (!this.meleeAttackProcess && this.HP > 0 && !this.damageProcess) {
                if (this.world.keyboard.SPACE || this.characterIsOnHeight()) {
                    if (this.speed > 0) {
                        this.playAnimation(this.walkImages);
                    }
                }
            };
        }, 70);

        // set Dead Control: 
        setInterval (() => {
            if (this.HP == 0) {
                this.damageProcess = false;
            }
        }, 50);

        // HURT Images
        let hurtIntervall = setInterval(() => {
            if (this.damageProcess && this.HP > 0) {
                this.playSingleAnimation(this.hurtImages, hurtIntervall);
            }
        }, 70);

        // Attack Images
        setInterval(() => {
            if (this.meleeRangeToCharacter && !this.isDead()) {
                this.playAnimation(this.meleeAttackImages);
                this.speed = 0;
                this.meleeAttackProcess = true;
                setTimeout(() => {
                    this.meleeAttackProcess = false;
                    this.meleeRangeToCharacter = false;
                }, 500); 
            }
        }, 55);
    };
}