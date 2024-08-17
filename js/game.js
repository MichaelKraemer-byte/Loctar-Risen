let canvas;
let world;
let keyboard;
keyboard = new Keyboard();
let lastTouchLeft = 0;
let lastTouchRight = 0;
let menuTheme = new Audio('./assets/audio/game/backgroundmusic/mp3/Ambient 10.mp3');
let gameTheme = new Audio('assets/audio/game/backgroundmusic/mp3/Ambient 6.mp3');
const soundButtonContainer = document.getElementById('soundButtonContainer');
const soundIMG = document.getElementById('soundIMG');
const landingSoundIMG  = document.getElementById('landingSoundIMG');
const fullscreenContainer = document.getElementById('fullscreenContainer');
const gameCanvas = document.getElementById('canvas');
let gameHasStarted = false;
let globalVolume = true;

function init() {
    menuTheme.pause();
    gameHasStarted = true;
    playAudio(gameTheme, 0.4, 1);
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function playAudio(audio, volume, audioSpeed){
    if (globalVolume) {
        audio.volume = volume;
        audio.play();
        audio.playbackRate = audioSpeed;
    }
    if (!globalVolume) {
        audio.volume = volume;
        audio.pause();
        audio.playbackRate = audioSpeed;
    }
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
        case 'KeyQ':
            keyboard.Q = true;
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
        case 'KeyQ':
            keyboard.Q = false;
            keyboard.NONE = true;
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
            keyboard.SHIFT = false;
            keyboard.NONE = true;
            break;
    }
});


$('#toggle_fullscreen').on('click', function(){
    // if already full screen; exit
    // else go fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      $('#canvas').get(0).requestFullscreen();
    }
  });
  

// Funktion, um den Fullscreen-Button basierend auf der Bildschirmgröße ein- oder auszublenden
function updateFullscreenVisibility() {
    if (window.innerWidth > 720) {
        soundButtonContainer.style.display = 'block';
        fullscreenContainer.style.display = 'block'; // Button anzeigen, wenn Bildschirm größer als 720px
    } else {
        soundButtonContainer.style.display = 'none';
        fullscreenContainer.style.display = 'none';  // Button ausblenden, wenn Bildschirm kleiner oder gleich 720px
    }
}


// Funktion, um den Container anzuzeigen
function showFullScreenContainer() {
    if (window.innerWidth > 720) {
        soundButtonContainer.style.display = 'block';
        fullscreenContainer.style.display = 'block';
    }
}


// Funktion, um den Container auszublenden
function hideContainer() {
    // Verzögerung hinzufügen, um das Flimmern zu vermeiden
    setTimeout(() => {
        if (!soundButtonContainer.matches(':hover') && !gameCanvas.matches(':hover') &&
        !fullscreenContainer.matches(':hover') && !gameCanvas.matches(':hover')) {
            fullscreenContainer.style.display = 'none';
        }
        if (!soundButtonContainer.matches(':hover') && !gameCanvas.matches(':hover') &&
        !fullscreenContainer.matches(':hover') && !gameCanvas.matches(':hover')) {
            soundButtonContainer.style.display = 'none';
        }
    }, 100);
}

// Event-Listener für Canvas
gameCanvas.addEventListener('mouseover', showFullScreenContainer);
gameCanvas.addEventListener('mouseout', hideContainer);

// Event-Listener für Container
fullscreenContainer.addEventListener('mouseover', showFullScreenContainer);
fullscreenContainer.addEventListener('mouseout', hideContainer);
soundButtonContainer.addEventListener('mouseover', showFullScreenContainer);
soundButtonContainer.addEventListener('mouseout', hideContainer);

// Event-Listener für Fullscreen-Toggle
fullscreenContainer.addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        gameCanvas.requestFullscreen();
    }
});




function soundOnOrOff() {

    if (soundIMG.src.includes('volume.png') || landingSoundIMG.src.includes('volume.png') ) {
        soundIMG.src = './assets/WebImages/mute.png';
        landingSoundIMG.src = './assets/WebImages/mute.png';
        globalVolume = false;
        window.localStorage.setItem('volume', 'off');
        menuTheme.pause();
        gameTheme.pause();
    } else {
        soundIMG.src = './assets/WebImages/volume.png';
        landingSoundIMG.src = './assets/WebImages/volume.png';
        globalVolume = true;
        window.localStorage.setItem('volume', 'on');
        if (gameHasStarted) {
            gameTheme.play();
        } else {
            menuTheme.play();
        }
    }
}

setInterval(()=> {

    if (window.localStorage.getItem('volume') == 'off') {
        soundIMG.src = './assets/WebImages/mute.png';
        landingSoundIMG.src = './assets/WebImages/mute.png';
        globalVolume = false;
        window.localStorage.setItem('volume', 'off');
        gameTheme.pause();
        menuTheme.pause();
    } else {
        soundIMG.src = './assets/WebImages/volume.png';
        landingSoundIMG.src = './assets/WebImages/volume.png';
        globalVolume = true;
        window.localStorage.setItem('volume', 'on');
        if (gameHasStarted) {
            gameTheme.play();
        } else {
            menuTheme.play();
        }
    }
}, 100);


// function checkSoundInLocalStorage(){
//     const soundIMG = document.getElementById('soundIMG'); 

//     if (window.localStorage.getItem('volume') == 'off') {
//         soundIMG.src = './assets/WebImages/mute.png';
//         globalVolume = false;
//         window.localStorage.setItem('volume', 'off');
//         menuTheme.pause();
//         gameTheme.pause();
//     } else {
//         soundIMG.src = './assets/WebImages/volume.png';
//         globalVolume = true;
//         window.localStorage.setItem('volume', 'on');
//         menuTheme.play();
//         gameTheme.play();
//     }
// }


// Initiale Überprüfung der Bildschirmgröße
updateFullscreenVisibility();

// Event-Listener für Fenstergrößenänderung
window.addEventListener('resize', updateFullscreenVisibility);


document.getElementById('touchLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchLeft < 300) {
        keyboard.SHIFT = true;
        keyboard.LEFT = true;

    } else {
        keyboard.LEFT = true;
        keyboard.SHIFT = false;
    }
    lastTouchLeft = currentTime;
    keyboard.NONE = false;
});

document.getElementById('touchLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
    keyboard.SHIFT = false;
    keyboard.NONE = true;
});

document.getElementById('touchRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchRight < 300) {
        keyboard.SHIFT = true;
        keyboard.RIGHT = true;
    } else {
        keyboard.RIGHT = true;
        keyboard.SHIFT = false;
    }
    lastTouchRight = currentTime;
    keyboard.NONE = false;
});

document.getElementById('touchRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
    keyboard.SHIFT = false;
    keyboard.NONE = true;
});


// Handle touch start events
function handleTouchStart(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.boxShadow = 'inset 5px 5px 15px rgba(0, 0, 0, 0.5)';
    button.style.transform = 'scale(0.95)'; // Optional: Simulate a pressed effect
    button.classList.add('active'); // Optionally add an additional class if needed
    switch (buttonId) {
        case 'touchE':
            keyboard.E = true;
            keyboard.NONE = false;
            break;
        case 'touchQ':
            keyboard.Q = true;
            keyboard.NONE = false;
            break;
        case 'touchSpace':
            keyboard.SPACE = true;
            keyboard.NONE = false;
            break;
    }
}

// Handle touch end and touch cancel events
function handleTouchEnd(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.boxShadow = ''; // Reset the box-shadow
    button.style.transform = ''; // Reset the transform
    button.classList.remove('active'); // Optionally remove an additional class if needed
    switch (buttonId) {
        case 'touchE':
            keyboard.E = false;
            break;
        case 'touchQ':
            keyboard.Q = false;
            break;
        case 'touchSpace':
            keyboard.SPACE = false;
            break;
    }
    // Ensure NONE is true if no buttons are active
    keyboard.NONE = !(keyboard.LEFT || keyboard.RIGHT || keyboard.SPACE || keyboard.UP || keyboard.DOWN || keyboard.SHIFT || keyboard.E || keyboard.Q);
}

// Add event listeners to buttons
document.querySelectorAll('.buttonWrapper').forEach(button => {
    button.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch action
        handleTouchStart(button.id);
    });

    button.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent default touch action
        handleTouchEnd(button.id);
    });

    button.addEventListener('touchcancel', (e) => {
        e.preventDefault(); // Prevent default touch action
        handleTouchEnd(button.id);
    });
})

function startGame(){
    if (window.innerWidth > 1024) {
        hideLandingScreen();
        menuTheme.pause();
        gameHasStarted = true;
    } 
    else if (window.innerWidth < 1024 && window.matchMedia("(orientation: landscape)").matches) {
        hideLandingScreen();
        menuTheme.pause();
        gameHasStarted = true;
    }
    else if (/Mobi|Android/i.test(navigator.userAgent) || /iPad|Tablet/i.test(navigator.userAgent)) {
        slideInTurnDeviceNotice();
        window.addEventListener('resize', disOrEnableOkButton);
        window.addEventListener('orientationchange', disOrEnableOkButton);
    }  else if (window.innerWidth < 1024) {
        slideInTurnDeviceNotice();
        window.addEventListener('resize', disOrEnableOkButton);
        window.addEventListener('orientationchange', disOrEnableOkButton);
    }
    init();
}

function disOrEnableOkButton() {
    let button = document.getElementById('OkayButton');
    if (window.matchMedia("(orientation: landscape)").matches) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

window.addEventListener('orientationchange', disOrEnableOkButton);

function slideInTurnDeviceNotice() {
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderRotateDeviceNotice();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}




function hideLandingScreen(){
    let landingScreen = document.getElementById('landingScreen');
    landingScreen.style.animation = 'fadeOut 0.5s ease-in-out forwards';

    setTimeout(()=> {
        landingScreen.style.display = 'none';
    }, 500);
}


function showLandingScreen(){
    gameHasStarted = false;
    gameTheme.pause();
    if (globalVolume) {
        menuTheme.play();
    } else {
        menuTheme.pause();
    }
    let landingScreen = document.getElementById('landingScreen');
    landingScreen.style.display = 'Block';
    landingScreen.style.animation = 'fullFadeIn 0.5s ease-in-out forwards';
}



function slideInControls(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderControls();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


function slideInStory(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderStory();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


function closePopUp(){
    let greyBackground = document.getElementById('greyBackground');
    let popUp = document.getElementById('popUp');


    greyBackground.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideOut 0.5s ease-in-out forwards';

    setTimeout(()=> {
        greyBackground.style.display = 'none';
        popUp.innerHTML = '';
    }, 500);
}


function renderControls() {
    if (/Mobi|Android/i.test(navigator.userAgent) || /iPad|Tablet/i.test(navigator.userAgent) || window.innerWidth < 1024) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            return renderHorizontalMobileControls();
        } else {
            return renderVerticalMobileControls();
        }
      } else {
        return renderKeyboardControls();
      }
}


function showSecondPageHorizontalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{

    descriptionContainer.innerHTML = renderSecondPageHorizontalMobileControls();
    descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';

}, 300);

}


function showFirstPageHorizontalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{
        descriptionContainer.innerHTML = renderFirstPageHorizontalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}


function showSecondPageVerticalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';

    setTimeout(()=>{
        descriptionContainer.innerHTML = renderSecondPageVerticalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}

function showFirstPageVerticalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{
        descriptionContainer.innerHTML = renderFirstPageVerticalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}


function slideInSuccessParchment() {
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderSuccessParchment();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


function resetGame() {
    // Speichere den aktuellen Zustand im localStorage oder sessionStorage, wenn nötig
    window.localStorage.setItem('reload', 'true');
    window.location.reload(); // Seite neu laden
}


function backToMenu(){
    gameTheme.pause();
    window.localStorage.setItem('reload', 'false');
    window.location.reload(); // Seite neu laden
}


function playMenuTheme(){
    playAudio(menuTheme, 0.4, 1);
}


document.addEventListener('click', () => {
    if (!gameHasStarted) {
        playMenuTheme();
    }
});



function startResettedGame() {
    if (window.localStorage.getItem('reload') === 'true') {
        gameHasStarted = true;
        window.localStorage.removeItem('reload'); // Zustand löschen, damit es beim nächsten Mal nicht automatisch passiert
        startGame();
    } else {
        let landingScreen = document.getElementById('landingScreen');
        landingScreen.innerHTML = renderLandingScreen();
    }
};


function slideInFailureParchment(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderFailureParchment();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}