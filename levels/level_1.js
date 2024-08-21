/**
 * Represents the first level of the game, containing all the necessary game objects and elements.
 * 
 * @type {Level}
 */
const level_1 = new Level (
    [
        new Minotaur_1(0),
        new Minotaur_1(100),
        new Minotaur_1(200),
        new Minotaur_1(2300),
        new Minotaur_1(2000),
        new Minotaur_1(3600),
        new Minotaur_1(3700),
        new Minotaur_1(3800),
        new Minotaur_1(3900),
        new Minotaur_1(4000),
    ],
    [
        new Endboss(2700),
        new Endboss(4750),
    ],
    [
        new Axe(1200, 310),
        new Axe(1600, 330),
        new Axe(1500, 350),
        new Axe(1300, 320),
        new Axe(2000, 340),
        new Axe(2000, 80)
    ],
    [
        // throwableObjects will  be pushed in here.
    ],
    [
        new Coin(950, 150),
        new Coin(1650, 80),
        new Coin(1730, 80),
        new Coin(1810, 80)
    ],
    [
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', -720),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 0),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 720),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 1440),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 2160),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 2880),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 3600),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 4320),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 5040),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 5760)
    ],
    [
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', -720),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 0),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 720),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 1440),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 2160),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 2880),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 3600),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 4320),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 5040),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 5760)
    ],
    [
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', -720),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 0),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 720),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 1440),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 2160),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 2880),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 3600),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 4320),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 5040),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 5760)
    ],
    [
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', -720),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 0),
        new RuinDecor('assets/ruins-tileset/PNG/Environment/Decor_Ruins_01.png', -30),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 720),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 1440),
        new Sign('assets/ruins-tileset/PNG/Environment/Sign_04.png', 2000),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 2160),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 2880),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 3600),
        new Sign('assets/ruins-tileset/PNG/Environment/Sign_02.png', 3700),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 4320),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 5040),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 5760)
    ],
    [
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', -720),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 0),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 720),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 1440),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 2160),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 2880),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 3600),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 4320),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 5040),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 5760)
    ],
    [
        new OneBlockStepRock(1100, 200),
        new OneBlockStepRock(1300, 140),
        new OneBlockStepRock(1450, 160),
        new ThreeBlockPlatform(1600, 170),

        new OneBlockStepRock(3500, 200),
        new OneBlockStepRock(3320, 320),
        new OneBlockStepRock(3500, 380),
        new OneBlockStepRock(3700, 140),

        new OneBlockStepRock(4250, 160),
        new OneBlockStepRock(4350, 250),
        new OneBlockStepRock(4250, 340),
        new ThreeBlockPlatform(4550, 170)
    ],
    [
        new OneBlockRockObstacle(900, 275, 140, 180),
        new OneBlockRockObstacle(3950, 160, 250, 300)
    ],
    [
        new Treasure(4650, 45)
    ]
)