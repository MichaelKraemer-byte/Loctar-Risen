class Level {
    enemies;
    endboss;
    axe;
    throwableObjects;
    coin;
    skies;
    backDecors;
    middleDecors;
    foregrounds;
    grounds;
    platforms;
    obstacles;
    treasures;
    xStop = 4800;


    constructor(enemies, endboss, axe, throwableObjects, coin, skies, backDecors, middleDecors, foregrounds, grounds, platforms, obstacles, treasures) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.axe = axe;
        this.throwableObjects = throwableObjects;
        this.coin = coin;
        this.skies = skies;
        this.backDecors = backDecors;
        this.middleDecors = middleDecors;
        this.foregrounds = foregrounds;
        this.grounds = grounds;
        this.platforms = platforms;
        this.obstacles = obstacles;
        this.treasures = treasures;
    }

}