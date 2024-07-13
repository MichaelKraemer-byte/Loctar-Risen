const level_1 = new Level (
    [
        new Minotaur_1(),
        new Minotaur_1(),
        new Minotaur_1(),
    ],
    [
        new Endboss()
    ],
    [
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', -720),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 0),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 720),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 1440),
        new Sky('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Sky.png', 2160)
    ],
    [
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', -720),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 0),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 720),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 1440),
        new BackDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png', 2160)

    ],
    [
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', -720),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 0),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 720),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 1440),
        new MiddleDecor('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png', 2160)

    ],
    [
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', -720),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 0),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 720),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 1440),
        new Foreground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png', 2160)
    ],
    [
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', -720),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 0),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 720),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 1440),
        new Ground('assets/crafties/forest-backgrounds/forest/PNG/Cartoon_Forest_BG_01/Layers/Ground.png', 2160)
    ]
)