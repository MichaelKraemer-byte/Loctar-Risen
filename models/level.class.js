class Level {
    enemies;
    endboss;
    axe;
    skies;
    backDecors;
    middleDecors;
    foregrounds;
    grounds;
    level_end_x = 1800;


    constructor(enemies, endboss, axe, skies, backDecors, middleDecors, foregrounds, grounds) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.axe = axe;
        this.skies = skies;
        this.backDecors = backDecors;
        this.middleDecors = middleDecors;
        this.foregrounds = foregrounds;
        this.grounds = grounds;
    }

}