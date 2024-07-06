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

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.addObjectsToMap(this.background);        

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.addToMap(this.frontground);

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
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
}