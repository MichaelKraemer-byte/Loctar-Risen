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
        'assets/trolls/_PNG/2_TROLL/Troll_02_1_WALK_009.png',
    ];
    world;
    walkSound = new Audio('assets/audio/walking/walking-on-crunchy-road.wav');
    width = 700;
    height = 500;
    y = 22;
    x = 2600;
    offset = {
        top: 180,
        bottom: 70,
        right: 220,
        left: 250,

        
        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    }

    


    constructor(){
        super(); //ruft variablen und constructor funktionen auf (MovableObject)
        this.loadImages(this.walkImages);
        this.speed = 0.6 + Math.random() * 0.4;
        this.animate();
    };


    animate(){
    setInterval(() => {
        this.walkLeft();
        this.refreshOffset();
    }, 1000 / 40);

    setInterval(() => {
        if (this.isVisible()) {
            this.playSound(this.walkSound, 0.4);
        } else if (!this.isVisible()) {
            this.pauseSound(this.walkSound);
        }
    }, 50);
    

    setInterval(() => {
        this.playAnimation(this.walkImages);
    }, 70);
    };
    

    isVisible() {
        // Check if the object is visible in the canvas
        if (this.world) {
            return this.x + this.width > -this.world.camera_x && this.x < -this.world.camera_x + this.world.canvas.width;
        }
        return false;
    }
}
