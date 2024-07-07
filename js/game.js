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
            break;
        case 'ArrowLeft':
        case 'KeyA':
            keyboard.LEFT = true;
            break;
        case 'ArrowUp':
        case 'KeyW':
            keyboard.UP = true;
            break;
        case 'ArrowDown':
        case 'KeyS':
            keyboard.DOWN = true;
            break;
        case 'Space':
            keyboard.SPACE = true;
            break;
        case 'KeyE':
            keyboard.E = true;
            break;
    };
});


window.addEventListener('keyup', (KeyboardEvent) => {
    switch (KeyboardEvent.code) {
        case 'ArrowRight':
        case 'KeyD':
            keyboard.RIGHT = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            keyboard.LEFT = false;
            break;
        case 'ArrowUp':
        case 'KeyW':
            keyboard.UP = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            keyboard.DOWN = false;
            break;
        case 'Space':
            keyboard.SPACE = false;
            break;
        case 'KeyE':
            keyboard.E = false;
            break;
    }
});