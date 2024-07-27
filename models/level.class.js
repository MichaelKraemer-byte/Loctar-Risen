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
    obstacles;
    xStop = 1800;


    constructor(enemies, endboss, axe, throwableObjects, coin, skies, backDecors, middleDecors, foregrounds, grounds, obstacles) {
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
        this.obstacles = obstacles;
    }

}