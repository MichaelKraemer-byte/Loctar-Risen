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


    world;
    walkSound = new Audio('assets/audio/walking/walking-on-crunchy-road.wav');
    width = 700;
    height = 500;
    y = 22;
    x = 1600;
    offset = {
        top: 180,
        bottom: 70,
        right: 235,
        left: 235,
        
        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    }


    constructor(){
        super(); //ruft variablen und constructor funktionen auf (MovableObject)
        this.loadImages(this.walkImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.dyingImages);
        this.speed = 0.6 + Math.random() * 0.4;
        this.animate();
    };


    animate(){
    
        // Offset Refresh
        setInterval(() => {
            this.refreshOffset();
        }, 1000 / 25);

        // WALK
        setInterval(() => {
            if (this.isVisible() && this.HP > 0 && !this.damageProcess) {
                this.walkLeft();
        //         this.playSound(this.walkSound, 0.4 , 1);
        //     } else if (!this.isVisible()) {
        //         this.pauseSound(this.walkSound);
        //     }
            }
        }, 1000 / 40);

        setInterval(() => {
            if (this.HP > 0 && !this.damageProcess) {
                this.playAnimation(this.walkImages);
            };
        }, 70);

        // HURT Images
        let hurtIntervall = setInterval(() => {
            if (this.damageProcess && this.HP > 0) {
                this.playSingleAnimation(this.hurtImages, hurtIntervall);
            }
        }, 70);

        // DYING Images
        let dyingIntervall = setInterval(() => {
            if (this.isDead()) {
                this.playSingleAnimation(this.dyingImages, dyingIntervall);
            };
        }, 100);

    };


}
