/**
 * Represents the status of keyboard inputs in the game.
 * 
 * This class tracks the current state of keys that are pressed or released by the user.
 * 
 * @class
 */
class Keyboard {
    /**
     * Indicates whether the left arrow key is pressed.
     * 
     * @type {boolean}
     */
    LEFT = false;

    /**
     * Indicates whether the right arrow key is pressed.
     * 
     * @type {boolean}
     */
    RIGHT = false;

    /**
     * Indicates whether the space key is pressed.
     * 
     * @type {boolean}
     */
    SPACE = false;

    /**
     * Indicates whether the down arrow key is pressed.
     * 
     * @type {boolean}
     */
    DOWN = false;

    /**
     * Indicates whether the shift key is pressed.
     * 
     * @type {boolean}
     */
    SHIFT = false;

    /**
     * Indicates whether the 'E' key is pressed, used for throwing actions.
     * 
     * @type {boolean}
     */
    E = false;

    /**
     * Indicates whether the 'Q' key is pressed.
     * 
     * @type {boolean}
     */
    Q = false;

    /**
     * Indicates whether no keys are pressed.
     * 
     * @type {boolean}
     */
    NONE = true;
}