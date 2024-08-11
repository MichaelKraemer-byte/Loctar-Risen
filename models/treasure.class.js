class Treasure extends DrawableObject {

    unlockedImage = './assets/ruins-tileset/PNG/Collectable Object/Chest_02_Unlocked.png';

    offset = {
        top: 0,
        bottom: 0,
        right: -40,
        left: -40,
    };

    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.width = 140;
        this.height = 140;
        this.speed = 0; 
        this.loadImage('./assets/ruins-tileset/PNG/Collectable Object/Chest_02_Locked.png');
    }
}