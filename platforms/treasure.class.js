class Treasure extends DrawableObject {

    unlockedImage = './assets/ruins-tileset/PNG/Collectable Object/Chest_02_Unlocked.png';

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.loadImage('./assets/ruins-tileset/PNG/Collectable Object/Chest_02_Locked.png');
    }
}