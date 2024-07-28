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
        this.initialX = this.x;
        this.setBodyVariables();
        this.loadImages(this.walkImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.loadImages(this.idleImages);
        this.loadImages(this.meleeAttackImages);
        this.animate();
    };


    animate() {
        // DYING Images
        let dyingInterval = setInterval(() => {
            if (this.isDead()) {
                this.playSingleAnimation(this.dyingImages, dyingInterval);
            }
        }, 1000 / 50);
        
        // WALK
        setInterval(() => {
            if (this.HP > 0 && !this.damageProcess && this.speed > 0) {
                if (this.characterIsOnHeight() || this.world.keyboard.SPACE) {
                    if (!this.meleeAttackProcess) {
                        const distance = Math.abs(this.x - this.world.character.x);
                        if (distance <= 250) {
                            this.objectViewsCharacter = true;
                            this.isWalking = true;
                            if (this.world.character.x - this.world.character.offset.right >= this.x + this.offset.left && this.characterIsOnHeight()) {
                                this.walkRight();
                            } else {
                                this.walkLeft();
                            }
                        } else {
                            // If character is out of range, walk back to initialX
                            this.objectViewsCharacter = false;
                            if (this.x < this.initialX) {
                                this.walkRight();
                            } else if (this.x > this.initialX) {
                                this.walkLeft();
                            } else {
                                // Stop moving when at initialX
                                this.isWalking = false;
                                this.speed = 0;
                                clearInterval(startIdleAnimation);
                                this.playAnimation(this.idleImages);
                            }
                        }
                    } else {
                        this.isWalking = false;
                        this.speed = 0;
                    }
                }
            }
        }, 1000 / 60);

        // WALK Images
        setInterval(() => {
            if (this.isWalking && this.HP > 0 && !this.damageProcess && !this.meleeAttackProcess) {
                this.playAnimation(this.walkImages);
            }
        }, 70);

        // IDLE Images
        let startIdleAnimation = setInterval(() => {
            if (!this.isWalking && this.HP > 0 && !this.damageProcess && !this.meleeAttackProcess) {
                this.playAnimation(this.idleImages);
            }
        }, 80);
    

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
            if (this.meleeRangeToCharacter && !this.isDead() && !this.world.character.isDead()) {
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