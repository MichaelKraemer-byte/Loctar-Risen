class World {
    character = new Character();
    level = level_1;
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
        this.checkCollisions();
    }


    checkCollisions(){
        setInterval(()=> {
            this.level.enemies.forEach( (enemy) => {
                if (this.character.isColliding(enemy) ) {
                    this.character.reduceHP(enemy);
                    // console.log('character collision with enemy - health points of character:', this.character.HP);
                }});     
        }, 50);
        setInterval(()=> {
            this.level.endboss.forEach( (endboss) => {
                if (this.character.isColliding(endboss) ) {
                    this.character.reduceHP(endboss);
                    // console.log('character collision with endboss - health points of character:', this.character.HP);
                }});     
        }, 50);
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

        this.drawBackgroundLayer(this.level.grounds);

        this.ctx.restore(); // Stellt den gespeicherten Zustand der Transformationen wieder her

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


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