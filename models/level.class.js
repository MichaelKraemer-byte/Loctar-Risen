class Level {
    enemies;
    endboss;
    skies;
    backDecors;
    middleDecors;
    foregrounds;
    grounds;
    level_end_x = 1300;


    constructor(enemies, endboss, skies, backDecors, middleDecors, foregrounds, grounds) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.skies = skies;
        this.backDecors = backDecors;
        this.middleDecors = middleDecors;
        this.foregrounds = foregrounds;
        this.grounds = grounds;
    }
    // im constrcutor werden die enemies, backgrounds on frontgrounds mit den Objekten initialisiert.
    // hier werden die arrays aus dem Objekt "Level" als Parameter in der richtigen Reihenfolge ubergeben, 
    // damit die initialisierung korrekt ablaeuft und die variabeln richtig bestimmt werden.
}