class Axe extends DrawableObject {


    offset = {
        top: 5,
        bottom: 5,
        right: 46,
        left: 5,

        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };


    constructor(x, y) {
        super();
        this.loadImage('assets/crafties/orcs/throwable-objects/axe/Axe-1.png');
        // this.initialX = x; // Ursprüngliche X-Position speichern
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.speed = 0; 

        // Geschwindigkeit der Axt, die der des Vordergrunds entspricht
        // this.x = this.initialX; // Anfangsposition
    }

    // updatePosition(cameraX) {
    //     this.x = this.initialX - (cameraX * this.speed / 4); // Berechne die Position mit Parallaxeneffekt
    // }

}