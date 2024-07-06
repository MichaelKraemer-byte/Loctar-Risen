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
    currentImage = 0;

    constructor(){
        super();
        this.loadImages(this.idleImages);
        this.animate();
    };


    animate(){
        setInterval(() => {
            let i = this.currentImage % this.idleImages.length; // der modulo operator '%' gibt immer nur den rest einer division zurueck und sorgt dafuer das wir wieder bei 0 starten, wenn wir einmal durchlaufen sind.
            let path = this.idleImages[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 80);
    };
    

    jump(){

    };
}