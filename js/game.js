/**
 * The canvas element where the game is rendered.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * The main game world or scene, used for rendering and game logic.
 * @type {World}
 */
let world;

/**
 * The Keyboard object for handling keyboard input.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Timestamp of the last touch event on the left side of the screen.
 * @type {number}
 */
let lastTouchLeft = 0;

/**
 * Timestamp of the last touch event on the right side of the screen.
 * @type {number}
 */
let lastTouchRight = 0;

/**
 * The audio object for the menu theme music.
 * @type {HTMLAudioElement}
 */
let menuTheme = new Audio('./assets/audio/game/backgroundmusic/mp3/Ambient 10.mp3');

/**
 * The audio object for the game theme music.
 * @type {HTMLAudioElement}
 */
let gameTheme = new Audio('assets/audio/game/backgroundmusic/mp3/Ambient 6.mp3');

/**
 * The container element for the sound button controls.
 * @type {HTMLElement}
 */
const soundButtonContainer = document.getElementById('soundButtonContainer');

/**
 * The image element for the sound button icon.
 * @type {HTMLImageElement}
 */
const soundIMG = document.getElementById('soundIMG');

/**
 * The image element for the sound button icon on the landing page.
 * @type {HTMLImageElement}
 */
const landingSoundIMG = document.getElementById('landingSoundIMG');

/**
 * The container element for fullscreen controls.
 * @type {HTMLElement}
 */
const fullscreenContainer = document.getElementById('fullscreenContainer');

/**
 * The canvas element used for rendering the game.
 * @type {HTMLCanvasElement}
 */
const gameCanvas = document.getElementById('canvas');

/**
 * Flag indicating whether the game has started.
 * @type {boolean}
 */
let gameHasStarted = false;

/**
 * Flag indicating whether global volume is enabled or not.
 * @type {boolean}
 */
let globalVolume = true;

/**
 * Flag indicating whether the user has interacted with the page (e.g., clicked, touched).
 * @type {boolean}
 */
let userInteracted = false;



/**
 * Starts the game if the page was reloaded.
 * - Checks `localStorage` to see if the page should be treated as a reset.
 * - Removes the `reload` item from `localStorage` to avoid resetting on the next start.
 * - If the page was reloaded, starts the game.
 * - If not, renders the landing screen.
 * - Also initiates an interval to check if the background music is turned on or off,
 *   and starts playing the background music if it is not already playing.
 */
function startResettedGame() {
    if (window.localStorage.getItem('reload') == 'restart') {
        gameHasStarted = true;
        startGame();
    } else  {
        let landingScreen = document.getElementById('landingScreen');
        landingScreen.innerHTML = renderLandingScreen();
    }
};


/**
 * Resets the game by saving the current state to `localStorage` and reloading the page.
 * - Sets an item in `localStorage` to indicate that the page should be reloaded.
 * - Reloads the page to reset the game.
 */
function resetGame() {
    // Speichere den aktuellen Zustand im localStorage oder sessionStorage, wenn nötig
    window.localStorage.setItem('reload', 'restart');
    window.location.reload(); // Seite neu laden
}


/**
 * Pauses the game theme and reloads the page to return to the menu.
 * - Sets an item in `localStorage` to indicate that the page should not be reloaded on next start.
 * - Reloads the page to return to the menu.
 */
function backToMenu(){
    gameTheme.pause();
    window.localStorage.setItem('reload', 'menu');
    window.location.reload(); 
}


// function turnOnSoundAgain(){
//     if () {
        
//     }
// }

/**
 * Initializes the game by pausing the menu theme, setting game start state,
 * setting up the canvas, and creating a new game world.
 */
function init() {
    menuTheme.pause();
    gameHasStarted = true;
    playAudio(gameTheme, 0.4, 1);
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('homeButton').style.display = 'block';
}


/**
 * Plays or pauses the given audio based on the global volume setting.
 * 
 * @param {HTMLAudioElement} audio - The audio element to play or pause.
 * @param {number} volume - The volume level to set for the audio (0.0 to 1.0).
 * @param {number} audioSpeed - The speed at which the audio should play (default is 1).
 */
function playAudio(audio, volume, audioSpeed){

    if (globalVolume) {
        if (globalVolume && userInteracted) {
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
}





/**
 * Toggles the sound on or off based on the current state.
 * Updates the sound icon and plays or pauses the appropriate theme music.
 */
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
        if (gameHasStarted && userInteracted) {
            playAudio(gameTheme, 0.4, 1);
        } else if(userInteracted){
            playAudio(menuTheme, 0.4, 1);
        }
    }
}



/**
 * Periodically checks the saved volume setting in localStorage and adjusts the sound settings accordingly.
 * This ensures that the sound settings remain consistent across different sessions or tabs.
 */
function checkAndStartBackgroundMusic(){
    setInterval(()=> {
        if (window.localStorage.getItem('volume') == 'off') {
            soundIMG.src = './assets/WebImages/mute.png';
            landingSoundIMG.src = './assets/WebImages/mute.png';
            globalVolume = false;
            gameTheme.pause();
            menuTheme.pause();
        } else {
            soundIMG.src = './assets/WebImages/volume.png';
            landingSoundIMG.src = './assets/WebImages/volume.png';
            globalVolume = true;
            if (gameHasStarted && userInteracted) {
                playAudio(gameTheme, 0.4, 1);
            } else if(userInteracted) {
                playAudio(menuTheme, 0.4, 1);
            }
        }
    }, 100);    
}


/**
 * Event listener for 'keydown' events to update the keyboard object based on key presses.
 * 
 * @param {KeyboardEvent} KeyboardEvent - The keyboard event triggered by pressing a key.
 */
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


/**
 * Event listener for 'keyup' events to update the keyboard object when keys are released.
 * 
 * @param {KeyboardEvent} KeyboardEvent - The keyboard event triggered by releasing a key.
 */
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


// Initial screen size check
updateFullscreenVisibility();


/**
 * Adds an event listener for the 'resize' event on the window object.
 * This listener triggers the updateFullscreenVisibility function to update 
 * the fullscreen visibility whenever the window is resized.
 *
 * @event resize
 * @param {Event} event - The resize event object.
 */
window.addEventListener('resize', updateFullscreenVisibility);


/**
 * Toggles fullscreen mode when the fullscreen button is clicked.
 */
$('#toggle_fullscreen').on('click', function(){
    // if already full screen; exit
    // else go fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      $('#canvas').get(0).requestFullscreen();
    }
  });
  

/**
 * Updates the visibility of the fullscreen button based on the screen width.
 * If the screen width is greater than 720 pixels, the button is displayed;
 * otherwise, it is hidden.
 */
function updateFullscreenVisibility() {
    if (window.innerWidth > 720) {
        soundButtonContainer.style.display = 'block';
        fullscreenContainer.style.display = 'block'; // Button anzeigen, wenn Bildschirm größer als 720px
    } else {
        soundButtonContainer.style.display = 'none';
        fullscreenContainer.style.display = 'none';  // Button ausblenden, wenn Bildschirm kleiner oder gleich 720px
    }
}


/**
 * Shows the fullscreen and sound button containers if the screen width is greater than 720 pixels.
 */
function showFullScreenContainer() {
    if (window.innerWidth > 720) {
        soundButtonContainer.style.display = 'block';
        fullscreenContainer.style.display = 'block';
    }
}


/**
 * Hides the fullscreen and sound button containers.
 * Adds a delay to prevent flickering when the user moves the mouse quickly.
 */
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


/**
 * Adds event listeners to show and hide containers when the mouse enters and leaves the canvas area.
 *
 * @event mouseover
 * @param {MouseEvent} event - The mouseover event object, triggered when the mouse enters the canvas area.
 *
 * @event mouseout
 * @param {MouseEvent} event - The mouseout event object, triggered when the mouse leaves the canvas area.
 */
gameCanvas.addEventListener('mouseover', showFullScreenContainer);
gameCanvas.addEventListener('mouseout', hideContainer);

/**
 * Adds event listeners to the fullscreen container to show and hide it
 * when the mouse enters and leaves this area.
 *
 * @event mouseover
 * @param {MouseEvent} event - The mouseover event object, triggered when the mouse enters the fullscreen container.
 *
 * @event mouseout
 * @param {MouseEvent} event - The mouseout event object, triggered when the mouse leaves the fullscreen container.
 */
fullscreenContainer.addEventListener('mouseover', showFullScreenContainer);
fullscreenContainer.addEventListener('mouseout', hideContainer);

/**
 * Adds event listeners to the sound button container to show and hide it
 * when the mouse enters and leaves this area.
 *
 * @event mouseover
 * @param {MouseEvent} event - The mouseover event object, triggered when the mouse enters the sound button container.
 *
 * @event mouseout
 * @param {MouseEvent} event - The mouseout event object, triggered when the mouse leaves the sound button container.
 */
soundButtonContainer.addEventListener('mouseover', showFullScreenContainer);
soundButtonContainer.addEventListener('mouseout', hideContainer);


/**
 * Toggles fullscreen mode when the fullscreen container is clicked.
 *
 * @event click
 * @param {MouseEvent} event - The click event object, triggered when the fullscreen container is clicked.
 */
fullscreenContainer.addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        gameCanvas.requestFullscreen();
    }
});




/**
 * Adds an event listener for the 'touchstart' event on the element with ID 'touchLeft'.
 * Detects double-tap gestures and modifies the keyboard object to simulate pressing the left arrow key with or without the shift key.
 * @param {TouchEvent} e - The touch event object.
 */
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


/**
 * Adds an event listener for the 'touchend' event on the element with ID 'touchLeft'.
 * Resets the state of the LEFT and SHIFT keys and sets NONE to true when the touch ends.
 * @param {TouchEvent} e - The touch event object.
 */
document.getElementById('touchLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
    keyboard.SHIFT = false;
    keyboard.NONE = true;
});


/**
 * Adds an event listener for the 'touchstart' event on the element with ID 'touchRight'.
 * Detects double-tap gestures and modifies the keyboard object to simulate pressing the right arrow key with or without the shift key.
 * @param {TouchEvent} e - The touch event object.
 */
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


/**
 * Adds an event listener for the 'touchend' event on the element with ID 'touchRight'.
 * Resets the state of the RIGHT and SHIFT keys and sets NONE to true when the touch ends.
 * @param {TouchEvent} e - The touch event object.
 */
document.getElementById('touchRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
    keyboard.SHIFT = false;
    keyboard.NONE = true;
});


/**
 * Handles touch start events by visually simulating a button press and updating the keyboard state.
 * @param {string} buttonId - The ID of the button element being interacted with.
 */
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


/**
 * Handles touch end and touch cancel events by visually resetting the button state and updating the keyboard state.
 * @param {string} buttonId - The ID of the button element being interacted with.
 */
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


/**
 * Adds event listeners for touch events to all elements with the class 'buttonWrapper'.
 * Handles touchstart, touchend, and touchcancel events by calling the corresponding functions.
 *
 * @event touchstart
 * @param {TouchEvent} e - The touchstart event object, triggered when a touch point is placed on the button.
 *
 * @event touchend
 * @param {TouchEvent} e - The touchend event object, triggered when a touch point is removed from the button.
 *
 * @event touchcancel
 * @param {TouchEvent} e - The touchcancel event object, triggered when the touch event is interrupted.
 */
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


/**
 * Starts the game by hiding the landing screen and setting up necessary event listeners and conditions.
 * Determines if the game should start based on screen width and device orientation.
 * Initializes the game and manages the appearance of the landing screen or device notice.
 */
function startGame(){
    if (window.innerWidth > 1024) {
        hideLandingScreen();
        menuTheme.pause();
        gameHasStarted = true;
    } 
    else if (window.matchMedia("(orientation: landscape)").matches) {
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

    // if (window.matchMedia("(orientation: landscape)").matches && /Mobi|Android/i.test(navigator.userAgent) || /iPad|Tablet/i.test(navigator.userAgent)) {

    // }
    init();
}


/**
 * Sets the `userInteracted` flag to `true` to indicate that the user has interacted with the webpage.
 */
function handleUserInteraction() {
    userInteracted = true;
}

/**
 * Sets up event listeners to detect user interactions with the webpage and tab visibility changes.
 * - Adds `click` and `keydown` event listeners to set the `userInteracted` flag to `true`.
 * - Adds a `visibilitychange` event listener to set the `userInteracted` flag to `true` when the tab becomes visible.
 */
function setupUserInteractionListener() {

    // Add event listeners for user interactions
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Handle tab visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            handleUserInteraction();
        }
    });
}


/**
 * Enables or disables the 'OkayButton' based on the current device orientation.
 * The button is enabled if the orientation is landscape; otherwise, it is disabled.
 */
function disOrEnableOkButton() {
    let button = document.getElementById('OkayButton');
    
    // Überprüfe die Orientierung basierend auf window.orientation (sicher für mobile Geräte)
    let isLandscape = window.innerWidth > window.innerHeight;

    // Zusätzlich mit Media-Query absichern (für Desktop und einige Geräte)
    if (isLandscape || window.matchMedia("(orientation: landscape)").matches) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}


// /**
//  * Adds an event listener for orientation changes to call the `disOrEnableOkButton` function.
//  */
// window.addEventListener('orientationchange', disOrEnableOkButton);


/**
 * Displays a notice prompting the user to rotate their device, with a sliding animation.
 * The notice and background overlay are styled and animated to appear on the screen.
 */
function slideInTurnDeviceNotice() {
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderRotateDeviceNotice();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


/**
 * Hides the landing screen with a fade-out animation.
 * The landing screen is hidden after the animation completes.
 */
function hideLandingScreen(){
    let landingScreen = document.getElementById('landingScreen');
    landingScreen.style.animation = 'fadeOut 0.5s ease-in-out forwards';

    setTimeout(()=> {
        landingScreen.style.display = 'none';
    }, 500);
}


/**
 * Shows the landing screen with a fade-in animation.
 * Resets game state and handles the background music based on the global volume setting.
 */
function showLandingScreen(){
    gameHasStarted = false;
    window.localStorage.setItem('reload', 'menu');
    gameTheme.pause();
    if (globalVolume || localStorage.getItem('volume') == 'on') {
        checkAndStartBackgroundMusic();
    } else {
        checkAndStartBackgroundMusic();
    }
    let landingScreen = document.getElementById('landingScreen');
    landingScreen.style.display = 'Block';
    landingScreen.style.animation = 'fullFadeIn 0.5s ease-in-out forwards';
}


/**
 * Slides in a controls pop-up with an animation.
 * The pop-up content is set to the result of `renderControls()`, and a grey background overlay is shown.
 */
function slideInControls(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderControls();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


/**
 * Slides in a story pop-up with an animation.
 * The pop-up content is set to the result of `renderStory()`, and a grey background overlay is shown.
 */
function slideInStory(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderStory();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}


/**
 * Closes the pop-up by fading out the grey background and sliding out the pop-up.
 * The content of the pop-up is cleared after the animation completes.
 */
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


/**
 * Renders the appropriate control layout based on the device type and screen size.
 * - Returns horizontal mobile controls if the device is mobile or the screen width is less than 1024px and in landscape mode.
 * - Returns vertical mobile controls if the device is mobile and in portrait mode.
 * - Returns keyboard controls for other devices.
 * 
 * @returns {string} The HTML content for the controls layout.
 */
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


/**
 * Displays the second page of horizontal mobile controls.
 * Animates a fade-out effect on the current content, updates the content, and then animates a fade-in effect.
 */
function showSecondPageHorizontalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{

    descriptionContainer.innerHTML = renderSecondPageHorizontalMobileControls();
    descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';

    }, 300);
}


/**
 * Displays the first page of horizontal mobile controls.
 * Animates a fade-out effect on the current content, updates the content, and then animates a fade-in effect.
 */
function showFirstPageHorizontalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{
        descriptionContainer.innerHTML = renderFirstPageHorizontalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}


/**
 * Displays the second page of vertical mobile controls.
 * Animates a fade-out effect on the current content, updates the content, and then animates a fade-in effect.
 */
function showSecondPageVerticalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';

    setTimeout(()=>{
        descriptionContainer.innerHTML = renderSecondPageVerticalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}


/**
 * Displays the first page of vertical mobile controls.
 * Animates a fade-out effect on the current content, updates the content, and then animates a fade-in effect.
 */
function showFirstPageVerticalMobileControls(){
    let descriptionContainer = document.getElementById('descriptionContainer');

    descriptionContainer.style.animation = 'fullFadeOut 0.3s ease-in-out forwards';
    setTimeout(()=>{
        descriptionContainer.innerHTML = renderFirstPageVerticalMobileControls();
        descriptionContainer.style.animation = 'fullFadeIn 0.3s ease-in-out forwards';
    }, 300);
}


/**
 * Slides in a success parchment pop-up with an animation.
 * Sets the pop-up content to the result of `renderSuccessParchment()`, and shows a grey background overlay.
 */
function slideInSuccessParchment() {
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderSuccessParchment();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}



/**
 * Slides in a failure parchment pop-up with an animation.
 * - Sets the pop-up content to the result of `renderFailureParchment()`.
 * - Shows a grey background overlay with a fade-in effect.
 */
function slideInFailureParchment(){
    let popUp = document.getElementById('popUp');
    let greyBackground = document.getElementById('greyBackground');

    popUp.innerHTML = renderFailureParchment();
    greyBackground.style.display = 'block';
    greyBackground.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    popUp.style.animation = 'slideIn 0.5s ease-in-out forwards';
}

