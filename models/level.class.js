class Level {
    enemies;
    backgrounds;
    frontgrounds;
    level_end_x = 2200;


    constructor(enemies, backgrounds, frontgrounds) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
        this.frontgrounds = frontgrounds;
    }
}