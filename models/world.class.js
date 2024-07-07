class World {
    character = new Character();
    enemies = [
        new Minotaur_1(),
        new Minotaur_1(),
        new Minotaur_1()
    ];
    background = [
        new Background('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png'),
        new Background('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png'),
        new Background('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png'),
        new Background('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png')
    ];
    frontground = new Frontground();
    canvas;
    ctx;
    keyboard;
    camera_x;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.background);        
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.frontground);

        this.ctx.translate(-this.camera_x, 0);

        let self = this           //self muss geschrieben werden, weil innerhalb der neuen funktion sonst 'this' nicht mehr die aktuelle World kennt.
        requestAnimationFrame( function () {
            self.draw();
        })
    }


    addObjectsToMap(objects){
        objects.forEach( o => {
            this.addToMap(o)
        });
    }


    addToMap(movableObject){
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    flipImage(movableObject){
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    flipImageBack(movableObject){
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}