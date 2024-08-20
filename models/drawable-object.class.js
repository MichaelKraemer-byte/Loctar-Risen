/**
 * Repräsentiert ein allgemeines darstellbares Objekt im Spiel.
 * 
 * Diese Klasse dient als Basis für alle Objekte, die auf dem Bildschirm angezeigt werden, und bietet grundlegende
 * Eigenschaften und Methoden zur Verwaltung von Bilddarstellung und Positionierung.
 * 
 * @class
 * 
 * @abstract
 */
class DrawableObject {

    /**
     * Die anfängliche x-Koordinate des Objekts.
     * 
     * @type {number}
     */
    initialX = 0;

    /**
     * Die aktuelle x-Koordinate des Objekts.
     * 
     * @type {number}
     */
    x = 0;

    /**
     * Die aktuelle y-Koordinate des Objekts.
     * 
     * @type {number}
     */
    y = 280;

    /**
     * Das Bild des Objekts.
     * 
     * @type {HTMLImageElement}
     */
    img;

    /**
     * Die Höhe des Objekts.
     * 
     * @type {number}
     */
    height = 200;

    /**
     * Die Breite des Objekts.
     * 
     * @type {number}
     */
    width = 200;

    /**
     * Ein Cache von Bildern, die für das Objekt verwendet werden.
     * 
     * @type {Object.<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * Der Index des aktuell angezeigten Bildes.
     * 
     * @type {number}
     */
    currentImage = 0;

    /**
     * Ein Flag, das angibt, ob eine Abklingzeit aktiv ist.
     * 
     * @type {boolean}
     */
    cooldown = false;

    /**
     * Die Zeit in Millisekunden, die für die Abklingzeit erforderlich ist.
     * 
     * @type {number}
     */
    RECHARGE_TIME = 500;

    /**
     * Der Index des aktuell angezeigten Bildes für Animationen.
     * 
     * @type {number}
     */
    currentImageIndex = 0;

    /**
     * Ein Flag, das angibt, ob das Spiel gestartet wurde.
     * 
     * @type {boolean}
     */
    gameHasStarted = false;

    /**
     * Die Welt, in der das Objekt existiert. Kann für Interaktionen oder Positionierung verwendet werden.
     * 
     * @type {World}
     */
    world;

    // Weitere Methoden und Logik der Klasse...

    



/**
 * Draws a frame around the object for debugging purposes.
 * - Draws a green rectangle around the object's bounding box.
 * - Draws a red rectangle around the object's offset area.
 * 
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 */
 drawFrame(ctx) {
    if (this instanceof ThreeBlockPlatform || this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss || this instanceof ThrowableObject || this instanceof Axe) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    // Offset rectangle form
    if (this instanceof ThreeBlockPlatform || this instanceof Character || this instanceof Minotaur_1 || this instanceof Endboss || this instanceof ThrowableObject || this instanceof Axe) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "red";
        ctx.rect(
            this.x + this.offset.left,
            this.y + this.offset.top,
            this.width - this.offset.left - this.offset.right,
            this.height - this.offset.top - this.offset.bottom
        );
        ctx.stroke();
    }
}

/**
 * Draws the object on the canvas.
 * - Uses the object's image and draws it at the object's position with its width and height.
 * 
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 */
draw(ctx) {
    try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
        console.warn('Error loading image', e);
        console.log('Could not load image', this.img);
    }
}

/**
 * Loads an image from the specified path and assigns it to the object's `img` property.
 * 
 * @param {string} path - The path to the image file.
 */
loadImage(path) {
    this.img = new Image();
    this.img.src = path;
}

/**
 * Loads multiple images from an array of paths and caches them.
 * - Each image is cached in the `imageCache` property.
 * 
 * @param {string[]} array - An array of image file paths.
 */
 loadImages(array) {
    array.forEach((path) => {
        this.img = new Image();
        this.img.src = path;
        this.imageCache[path] = this.img;
    });
}

/**
 * Plays an animation by cycling through an array of image paths.
 * - Updates the object's image to the next one in the sequence.
 * 
 * @param {string[]} images - An array of image file paths for the animation.
 */
 playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
}

/**
 * Plays a single frame of animation and stops at the latest image.
 * - Updates the object's image to the next one in the sequence and stops when the last image is reached.
 * 
 * @param {string[]} images - An array of image file paths for the animation.
 * @param {number} animationInterval - The interval ID for clearing the animation.
 */
 playSingleAnimation(images, animationInterval) {
    if (this.currentImageIndex < images.length) {
        let path = images[this.currentImageIndex];
        this.img = this.imageCache[path];
        this.currentImageIndex++;
    } else {
        clearInterval(animationInterval); // Stop the animation when the last image is reached
    }
}

/**
 * Plays a single frame of animation and stops at the last image.
 * - Keeps the last image displayed after reaching the end of the animation sequence.
 * 
 * @param {string[]} images - An array of image file paths for the animation.
 */
playSingleAnimationAndStopAtLatestImage(images) {
    if (this.currentImage < images.length) {
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    } else {
        // Keep the last image displayed when the end of the animation is reached
        let path = images[images.length - 1];
        this.img = this.imageCache[path];
    }
}

/**
 * Plays a sound with specified volume and playback speed.
 * - If global volume is enabled, the sound is played; otherwise, it is paused.
 * 
 * @param {HTMLAudioElement} audio - The audio element to play.
 * @param {number} volume - The volume level for the sound (0.0 to 1.0).
 * @param {number} audioSpeed - The playback speed for the sound (e.g., 1.0 for normal speed).
 */
playSound(audio, volume, audioSpeed) {
    if (globalVolume) {
        audio.volume = volume;
        audio.playbackRate = audioSpeed;
        audio.play();
    } else {
        audio.volume = volume;
        audio.playbackRate = audioSpeed;
        audio.pause();
    }
}

/**
 * Pauses the specified audio.
 * 
 * @param {HTMLAudioElement} audio - The audio element to pause.
 */
 pauseSound(audio) {
    audio.pause();
}

/**
 * Starts the cooldown period for the object.
 * - Sets a cooldown flag and schedules its reset after the specified recharge time.
 */
 startCooldown() {
    this.cooldown = true;
    setTimeout(() => {
        this.cooldown = false;
    }, this.RECHARGE_TIME);
}

/**
 * Checks if the object is currently in cooldown and starts the cooldown if not.
 */
checkAndStartCooldown() {
    if (!this.cooldown) {
        this.startCooldown();
    }
}

/**
 * Checks if the object is visible within the canvas viewport.
 * - Determines visibility based on the object's position and the camera's position.
 * 
 * @returns {boolean} `true` if the object is visible; otherwise, `false`.
 */
 isVisible() {
    if (this.world) {
        return this.x + this.width > -this.world.camera_x && this.x < -this.world.camera_x + this.world.canvas.width;
    }
    return false;
}

}