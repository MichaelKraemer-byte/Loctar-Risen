let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener('keydown', (KeyboardEvent) => {
    switch (KeyboardEvent.code) {
        case 'ArrowRight':
        case 'KeyD':
            keyboard.RIGHT = true;
            keyboard.NONE = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            keyboard.LEFT = true;
            keyboard.NONE = false;
            break;
        case 'ArrowUp':
        case 'KeyW':
            keyboard.UP = true;
            keyboard.NONE = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            keyboard.DOWN = true;
            keyboard.NONE = false;
            break;
        case 'Space':
            keyboard.SPACE = true;
            keyboard.NONE = false;
            break;
        case 'KeyE':
            keyboard.E = true;
            keyboard.NONE = false;
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
            keyboard.SHIFT = true;
            keyboard.NONE = false;
            break;
    };
});


window.addEventListener('keyup', (KeyboardEvent) => {
    switch (KeyboardEvent.code) {
        case 'ArrowRight':
        case 'KeyD':
            keyboard.RIGHT = false;
            keyboard.NONE = true;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            keyboard.LEFT = false;
            keyboard.NONE = true;
            break;
        case 'ArrowUp':
        case 'KeyW':
            keyboard.UP = false;
            keyboard.NONE = true;
            break;
        case 'ArrowDown':
        case 'KeyS':
            keyboard.DOWN = false;
            keyboard.NONE = true;
            break;
        case 'Space':
            keyboard.SPACE = false;
            keyboard.NONE = true;
            break;
        case 'KeyE':
            keyboard.E = false;
            keyboard.NONE = true;
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
            keyboard.SHIFT = false;
            keyboard.NONE = true;
            break;
    }
});