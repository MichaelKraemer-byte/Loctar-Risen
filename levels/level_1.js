const level_1 = new Level (
    [
        new Minotaur_1(),
        new Minotaur_1(),
        new Minotaur_1()
    ],
    [
        new Endboss()
    ],
    [
        new Axe(400, 280),
        new Axe(600, 280),
        new Axe(100, 200),
        new Axe(1000, 200),
        new Axe(700, 150),
        new Axe(1200, 280)
    ],
    [
        // throwableObjects will  be pushed in here.
    ],
    [
        new Coin(200, 150),
        new Coin(500, 150),
        new Coin(800, 150),
        new Coin(900, 150),
        new Coin(1400, 150)
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
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 720),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 1440),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 2160),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 2880),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 3600),
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
        new ThreeBlockObstacle(600, 180),
        new ThreeBlockObstacle(900, 80)
    ]
)