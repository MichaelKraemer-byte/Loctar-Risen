class DrawableObject {

    // Status-Bars
    HPImages = [
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
    ];

    axeStatusImages = [
        'assets/crafties/orcs/statusBar/0.png',
        'assets/crafties/orcs/statusBar/20.png',
        'assets/crafties/orcs/statusBar/40.png',
        'assets/crafties/orcs/statusBar/60.png',
        'assets/crafties/orcs/statusBar/80.png',
        'assets/crafties/orcs/statusBar/100.png'
    ];

    coinStatusImages = [
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'assets/el_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    x = 0;
    y = 280;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };


    loadImage(path){
        this.img = new Image(); //<img>
        this.img.src = path;
    };


    loadImages(array){
        array.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    };


    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    playSingleAnimation(images){
        for (let i = 0; i < images.length; i++) {
            let path = images[i];
            this.img = this.imageCache[path];
        }
    };


    playSound(audio, volume, audioSpeed){
        audio.volume = volume;
        audio.play();
        if (this.world.keyboard.SHIFT) {
            audio.playbackRate = audioSpeed;
        } else {
            audio.playbackRate = 1;
        }
    };


    pauseSound(audio){
        audio.pause();
    };
}