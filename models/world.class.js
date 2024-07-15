class World {
    character = new Character();
    level = level_1;
    drawableObject = new DrawableObject();
    statusBars = [
        new StatusBar(20, this.drawableObject.HPImages),
        new StatusBar(60, this.drawableObject.axeStatusImages),
        new StatusBar(100, this.drawableObject.coinStatusImages)
    ];
    throwableObjects = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();

    }

    run(){
        setInterval(()=> {
            this.checkCollisions();
            this.checkThrowObjects();
            
        }, 50e0);
    }

    checkCollisions(){

            this.level.enemies.forEach( (enemy) => {
                if (this.character.isColliding(enemy) ) {
                    this.character.reduceHP(enemy);
                    this.statusBars[0].setPercentage(this.character.HP, this.drawableObject.HPImages)
                    // console.log('character collision with enemy - health points of character:', this.character.HP);
                }});     

            this.level.endboss.forEach( (endboss) => {
                if (this.character.isColliding(endboss) ) {
                    this.character.reduceHP(endboss);
                    this.statusBars[0].setPercentage(this.character.HP, this.drawableObject.HPImages);
                    // console.log('character collision with endboss - health points of character:', this.character.HP);
                }});     
        // setInterval(()=> {
        //     this.throwableObjects.forEach( (throwableObject) => {
        //         if (this.level.enemies.isColliding(throwableObject) ) {
        //             this.level.enemies.reduceHP(throwableObject);
        //             console.log('enemy collision with axe - health points of enemy:', this.level.enemies.HP);
        //         }});     
        // }, 50);
    }


    checkThrowObjects(){
        if (this.keyboard.E) {
            let axe = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
            this.throwableObjects.push(axe);
        }
    }


    setWorld(){
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
        this.level.endboss.forEach(endboss => {
            endboss.world = this;
        });
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save(); // Speichert den aktuellen Zustand der Transformationen

        this.ctx.translate(this.camera_x, 0);
        // Zeichne Hintergrundebenen mit unterschiedlichen Geschwindigkeiten
        this.drawBackgroundLayer(this.level.skies);
        this.drawBackgroundLayer(this.level.backDecors);
        this.drawBackgroundLayer(this.level.middleDecors);
        this.drawBackgroundLayer(this.level.foregrounds);

        // Zeichne andere Objekte
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addMultipleFixedObjectsToMap(this.statusBars);

        this.drawBackgroundLayer(this.level.grounds);
        this.addObjectsToMap(this.throwableObjects);


        this.ctx.restore(); // Stellt den gespeicherten Zustand der Transformationen wieder her

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


    // throwingObjectsListener(){
    //     if (this.keyboard.E) {
    //         this.addToMap(this.throwableObjects[0]);
    //         // console.log('axes left:', this.throwableObjects.length)
    //         // this.throwableObjects.splice(0, 1);
    //     } else {
    //         return;
    //     }
    // }


    drawBackgroundLayer(layer) {
        layer.forEach(bg => {
            let adjustedX = bg.speed * (this.camera_x / 4); // Anpassen der Geschwindigkeit für Parallaxen-Effekt
            this.ctx.save(); // Speichert den Zustand vor der Verschiebung
            this.ctx.translate(adjustedX, 0); // Hintergrund basierend auf Geschwindigkeit verschieben
            this.addToMap(bg);
            this.ctx.restore(); // Stellt den Zustand nach der Verschiebung wieder her
        });
    }


    addObjectsToMap(objects){
        objects.forEach( o => {
            this.addToMap(o)
        });
    }


    addToMap(movableObject){
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        };

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    addFixedObjectToMap(object){
        this.ctx.translate(-this.camera_x, 0);
        object.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);
    }


    addMultipleFixedObjectsToMap(objects){
        objects.forEach( obj => {
            this.addFixedObjectToMap(obj)
        });
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