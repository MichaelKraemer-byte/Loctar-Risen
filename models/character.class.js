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
    world;

    constructor(){
        super();
        // keyboard = world.keyboard;
        this.loadImages(this.idleImages);
        this.loadImages(this.walkImages);
        this.animate();
    };


    animate(){

        setInterval(() => {
            // walk RIGHT
                if (this.world.keyboard.RIGHT) {
                    this.x += this.speed + 3;
                    this.otherDirection = false;
                }
            // walk LEFT
                if (this.world.keyboard.LEFT) {
                    this.x -= this.speed + 3;
                    this.otherDirection = true;
                };
                this.world.camera_x = -this.x + 20;
            }, 1000 / 60);

        setInterval(() => {
        // WALK
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.walkImages.length; // der modulo operator '%' gibt immer nur den rest einer division zurueck und sorgt dafuer das wir wieder bei 0 starten, wenn wir einmal durchlaufen sind.
                let path = this.walkImages[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        // IDLE
            else {
                let i = this.currentImage % this.idleImages.length;
                let path = this.idleImages[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 60);
    };
}