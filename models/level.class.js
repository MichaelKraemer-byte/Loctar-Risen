/**
 * Represents a level in the game.
 * 
 * @class
 */
class Level {
    /**
     * Creates an instance of the Level class.
     * 
     * @param {Array<Minotaur_1>} enemies - An array of enemies in the level.
     * @param {Array<Endboss>} endboss - An array of endbosses in the level.
     * @param {Array<Axe>} axe - An array of axes that act as obstacles in the level.
     * @param {Array<ThrowableObject>} throwableObjects - An array of throwable objects in the level.
     * @param {Array<Coin>} coin - An array of collectible coins in the level.
     * @param {Array<Sky>} skies - An array of sky layers that make up the background of the level.
     * @param {Array<BackDecor>} backDecors - An array of background decorations for visual depth.
     * @param {Array<MiddleDecor>} middleDecors - An array of middle decorations for additional background detail.
     * @param {Array<Foreground>} foregrounds - An array of foreground layers that appear in front of the background.
     * @param {Array<Ground>} grounds - An array of ground layers that the player interacts with.
     * @param {Array<OneBlockStepRock | ThreeBlockPlatform>} platforms - An array of platforms for jumping or climbing.
     * @param {Array<OneBlockRockObstacle>} obstacles - An array of obstacles that hinder player progress.
     * @param {Array<Treasure>} treasures - An array of treasure items that can be collected by the player.
     */
    constructor(enemies, endboss, axe, throwableObjects, coin, skies, backDecors, middleDecors, foregrounds, grounds, platforms, obstacles, treasures) {
        /**
         * @type {Array<Minotaur_1>}
         */
        this.enemies = enemies;
        
        /**
         * @type {Array<Endboss>}
         */
        this.endboss = endboss;
        
        /**
         * @type {Array<Axe>}
         */
        this.axe = axe;
        
        /**
         * @type {Array<ThrowableObject>}
         */
        this.throwableObjects = throwableObjects;
        
        /**
         * @type {Array<Coin>}
         */
        this.coin = coin;
        
        /**
         * @type {Array<Sky>}
         */
        this.skies = skies;
        
        /**
         * @type {Array<BackDecor>}
         */
        this.backDecors = backDecors;
        
        /**
         * @type {Array<MiddleDecor>}
         */
        this.middleDecors = middleDecors;
        
        /**
         * @type {Array<Foreground>}
         */
        this.foregrounds = foregrounds;
        
        /**
         * @type {Array<Ground>}
         */
        this.grounds = grounds;
        
        /**
         * @type {Array<OneBlockStepRock | ThreeBlockPlatform>}
         */
        this.platforms = platforms;
        
        /**
         * @type {Array<OneBlockRockObstacle>}
         */
        this.obstacles = obstacles;
        
        /**
         * @type {Array<Treasure>}
         */
        this.treasures = treasures;
        
        /**
         * The horizontal position where the level stops or wraps around.
         * 
         * @type {number}
         * @default 4800
         */
        this.xStop = 4800;
    }
}