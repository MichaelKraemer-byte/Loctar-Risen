/**
 * Represents a movable object in a game, extending from `DrawableObject`.
 * This class handles properties related to movement, collision, and other dynamic behaviors.
 * 
 * @class
 * 
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {

    /**
     * The speed of the object.
     * @type {number}
     */
    speed = 0.15;

    /**
     * Boolean indicating the direction of the object.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * The vertical speed of the object.
     * @type {number}
     */
    speedY = 0;

    /**
     * Acceleration value affecting the object's movement.
     * @type {number}
     */
    acceleration = 4;

    /**
     * The health points of the object.
     * @type {number}
     */
    HP = 100;

    /**
     * Boolean indicating whether the object is currently in a damage process.
     * @type {boolean}
     */
    damageProcess = false;

    /**
     * Duration of the damage process in milliseconds.
     * @type {number}
     */
    damageProcessTime = 300;

    /**
     * Boolean indicating whether a collision is currently detected.
     * @type {boolean}
     */
    collision = false;

    /**
     * Reference to the world object that the movable object interacts with.
     * @type {World}
     */
    world;

    /**
     * The number of axes (likely for detecting collisions or movements).
     * @type {number}
     */
    axes = 0;

    /**
     * The number of coins collected by the object.
     * @type {number}
     */
    coins = 0;

    /**
     * Boolean indicating whether the object has been used.
     * @type {boolean}
     */
    used = false;

    /**
     * Boolean indicating whether a melee attack is currently in process.
     * @type {boolean}
     */
    meleeAttackProcess = false;

    /**
     * Boolean indicating whether the melee attack range is within the character.
     * @type {boolean}
     */
    meleeRangeToCharacter = false;

    /**
     * Initial speed of the object.
     * @type {number}
     */
    initialSpeed = 0;

    /**
     * Boolean indicating whether the object is standing on an obstacle.
     * @type {boolean}
     */
    isStandingOnObstacle = false;

    /**
     * Boolean indicating whether the object is currently walking.
     * @type {boolean}
     */
    walkingAnimation = false;

    /**
     * Boolean indicating whether the object is on a platform.
     * @type {boolean}
     */
    isOnPlatform = false;

    /**
     * The vertical position of the current platform.
     * @type {number}
     */
    currentPlatformY = 0;

    /**
     * Boolean indicating whether the object is visible to the character.
     * @type {boolean}
     */
    objectViewsCharacter = false;

    /**
     * Boolean indicating whether the object is walking.
     * @type {boolean}
     */
    isWalking = false;

    /**
     * Boolean indicating whether the object is attacking.
     * @type {boolean}
     */
    isAttacking = false;

    /**
     * The current ground or surface the object is on.
     * @type {Ground}
     */
    currentGround;

    /**
     * The vertical position from the bottom of the object.
     * @type {number}
     */
    bodyBottom = 280;

    /**
     * Object representing the offset values from the object's edges.
     * @type {Object}
     * @property {number} top - Offset from the top edge.
     * @property {number} bottom - Offset from the bottom edge.
     * @property {number} right - Offset from the right edge.
     * @property {number} left - Offset from the left edge.
     */
    offset = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    };


    /**
 * Determines if the player character is on the same vertical level (height) as the current object.
 * 
 * This method checks if the bottom of the player character's body is aligned with the bottom of the object's body.
 * It also checks if the player character's body is within a vertical range (±50 pixels) of the object's body.
 * 
 * @returns {boolean} True if the player character is on the same height as the object, otherwise false.
 */
    characterIsOnHeight(){
        return this.world.character.bodyBottom == this.bodyBottom || 
            (this.world.character.bodyBottom + 50 >= this.bodyBottom - 50 && 
            this.world.character.bodyBottom - 50 <= this.bodyBottom + 50)
    }


/**
 * Updates the `bodyBottom` property to reflect the current position and dimensions of the object.
 * 
 * This method periodically (every 50 milliseconds) recalculates the `bodyBottom` property based on the object's `y` position,
 * `height`, and `offset.bottom`. This is used to track the vertical position of the object's bottom edge.
 * 
 */
    setBodyVariables(){
        setInterval (()=> {
            this.bodyBottom = this.y + this.height - this.offset.bottom;
        }, 50);
    }


/**
 * Sets the vertical position (`y`) of the object so that it is grounded on the floor level of an obstacle.
 * 
 * This method adjusts the object's `y` position to align its bottom edge with the top edge of the provided obstacle.
 * 
 * @param {Object} obstacle - The obstacle object that the current object will be grounded on.
 */
    setYOnFloor(obstacle) {
        this.y = obstacle.y - this.height + this.offset.bottom;
    }

/**
 * Sets the object's health points (HP) to zero, marking it as dead.
 * 
 * This method is used to indicate that the object has been defeated or has died.
 * 
 */
    dies(){
        this.HP = 0;
    }

/**
 * Reduces the object's health points (HP) by a specified amount of damage.
 * 
 * This method subtracts the given damage value from the object's HP. It also checks if the object is a valid source of damage
 * and starts a damage process if necessary. The object's HP is clamped to a minimum of zero.
 * 
 * @param {number} damage - The amount of damage to apply to the object.
 * @param {Object} object - The object causing the damage.
 */
    reduceHP(damage, object){
        if (object != object.used  || (object instanceof Minotaur_1) || (object instanceof Endboss)) {
            this.checkAndStartDamageProcess();
            this.HP -= damage;
        };
        if (this.HP < 0) {
            this.HP = 0;
        };
    }


/**
 * Checks if the damage process has started and initiates it if not already in progress.
 * 
 * This method starts the damage process if it is not already active, which typically involves visual or sound effects
 * indicating that the object is taking damage.
 * 
 */
    checkAndStartDamageProcess() {
        if (!this.damageProcess) {
            this.startDamageProcess();
        }
    }


/**
 * Increases the inventory of the object based on the type of collision object.
 * 
 * This method updates the inventory (axes or coins) of the object depending on whether the collision object is an instance of
 * `Axe` or `Coin`. It ensures that the inventory values do not exceed a maximum limit.
 * 
 * @param {Object} collisionObject - The object that caused the collision and whose type determines the inventory increase.
 * @returns {void}
 */
    increaseInventoryOf(collisionObject) {
        if (collisionObject instanceof Axe) {
            this.axes += 20;
            if (this.axes > 100) {
                this.axes = 100;
            };
        };
        if (collisionObject instanceof Coin) {
            this.coins += 25;
            if (this.coins > 100) {
                this.coins = 100;
            };
        };
    }


/**
 * Checks if the object is considered dead based on its health points (HP).
 * 
 * This method returns true if the object's HP is less than or equal to zero, indicating that the object is dead.
 * 
 * @returns {boolean} True if the object's HP is zero or less, otherwise false.
 */
    isDead(){
        return this.HP <= 0
    }


/**
 * Starts the damage process for the object, indicating that it is currently taking damage.
 * 
 * This method sets a flag to indicate that the object is in a damage state and sets a timeout to reset this flag after a
 * specified duration (`damageProcessTime`).
 * 
 * @returns {void}
 */
    startDamageProcess() {
        this.damageProcess = true;
        setTimeout (() => { 
            this.damageProcess = false
        }, this.damageProcessTime);
    }


/**
 * Checks if the object is colliding with another object.
 * 
 * This method determines if the bounding boxes of the current object and the specified object overlap. It considers the
 * position and dimensions of both objects to perform this check.
 * 
 * @param {Object} obj - The object to check for collision with the current object.
 * @returns {boolean} True if the objects are colliding, otherwise false.
 */
    isColliding(obj){
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R zu L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T zu B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&  // L zu R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom // B zu T
    };


/**
 * Checks if the object is grounded on top of another object.
 * 
 * This method determines if the bottom of the current object is aligned with or below the top edge of the specified object,
 * and if the current object's horizontal position is within the bounds of the other object.
 * 
 * @param {Object} obj - The object to check for grounding with the current object.
 * @returns {boolean} True if the object is grounded on the specified object, otherwise false.
 */
    isGroundedOn(obj){
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&  // R zu L
               this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
               this.bodyBottom <= obj.y  // L zu R
    }


/**
 * Checks if the object is horizontally within range of another object for an attack.
 * 
 * This method determines if the current object's horizontal position intersects with the attack range of the specified object,
 * considering a defined attack range on the X-axis.
 * 
 * @param {Object} obj - The object to check for horizontal range with the current object.
 * @returns {boolean} True if the object is within the horizontal attack range, otherwise false.
 */
    isHorizontalInRange(obj){
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 30; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Minotaur
        const minotaurLeft = obj.x + obj.offset.left - attackRangeX;
        const minotaurRight = obj.x + obj.width - obj.offset.right + attackRangeX;

        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > minotaurLeft &&
                                    this.x + this.offset.left < minotaurRight;
    
        return isHorizontalInRange;
    }


/**
 * Checks if the current object is within melee attack range of a Minotaur.
 * 
 * This method calculates the horizontal and vertical attack ranges of the Minotaur and checks if the current object
 * falls within these ranges. It also verifies that the object is on or below the Minotaur's level.
 * 
 * @param {Object} obj - The target object to check against the Minotaur's melee range.
 * @returns {boolean} True if the object is within the Minotaur's melee range and on or below its level, otherwise false.
 */
    isInMeleeRangeForMinotaur(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 30; 
        const attackRangeY = 5; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Minotaur
        const minotaurLeft = obj.x + obj.offset.left - attackRangeX;
        const minotaurRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Minotaur
        const minotaurTop = obj.y + obj.offset.top - attackRangeY;
        const minotaurBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > minotaurLeft &&
                                    this.x + this.offset.left < minotaurRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > minotaurTop &&
                                  this.y + this.offset.top < minotaurBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }
    

/**
 * Checks if the current object is within melee attack range of the Endboss.
 * 
 * This method calculates the horizontal and vertical attack ranges of the Endboss and checks if the current object
 * falls within these ranges. It also verifies that the object is on or below the Endboss's level.
 * 
 * @param {Object} obj - The target object to check against the Endboss's melee range.
 * @returns {boolean} True if the object is within the Endboss's melee range and on or below its level, otherwise false.
 */
    isInMeleeRangeForEndboss(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 50; 
        const attackRangeY = 50; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Endboss
        const endbossLeft = obj.x + obj.offset.left - attackRangeX;
        const endbossRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Endboss
        const endbossTop = obj.y + obj.offset.top - attackRangeY;
        const endbossBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > endbossLeft &&
                                    this.x + this.offset.left < endbossRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > endbossTop &&
                                  this.y + this.offset.top < endbossBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }
    

/**
 * Checks if the current object is within melee attack range of the player character.
 * 
 * This method calculates the horizontal and vertical attack ranges of the player character and checks if the current object
 * falls within these ranges. It also verifies that the object is on or below the character's level.
 * 
 * @param {Object} obj - The target object to check against the character's melee range.
 * @returns {boolean} True if the object is within the character's melee range and on or below its level, otherwise false.
 */  
    isInMeleeRangeForCharacter(obj) {
        // Angriffsradius auf der X-Achse und Y-Achse
        const attackRangeX = 40; 
        const attackRangeY = 10; 
        
        // Berechne die horizontalen Grenzen des Angriffsradius des Charakters
        const characterLeft = obj.x + obj.offset.left - attackRangeX;
        const characterRight = obj.x + obj.width - obj.offset.right + attackRangeX;
        
        // Berechne die vertikalen Grenzen des Angriffsradius des Charakters
        const characterTop = obj.y + obj.offset.top - attackRangeY;
        const characterBottom = obj.y + obj.height - obj.offset.bottom + attackRangeY;
        
        // Überprüfe, ob der Charakter innerhalb der horizontalen Reichweite ist
        const isHorizontalInRange = this.x + this.width - this.offset.right > characterLeft &&
                                    this.x + this.offset.left < characterRight;
    
        // Überprüfe, ob der Charakter innerhalb der vertikalen Reichweite ist
        const isVerticalInRange = this.y + this.height - this.offset.bottom > characterTop &&
                                  this.y + this.offset.top < characterBottom;
        
        // Überprüfe, ob der Charakter sich auf der gleichen oder unteren Ebene befindet
        const isOnOrBelow = this.y + this.height >= obj.y;
    
        return isHorizontalInRange && isVerticalInRange && isOnOrBelow;
    }


/**
 * Determines if the current object is hit by a specific attacking entity based on the image source.
 * 
 * This method checks if the image source of the current object matches the specific frames of the attacking entity's
 * animation, indicating a hit. It supports different types of entities such as Minotaur or Endboss.
 * 
 * @param {Object} obj - The attacking entity that may have hit the current object.
 * @returns {boolean} True if the current object is hit by the specified entity's attack, otherwise false.
 */
    hitBy(obj) {
        if (obj instanceof Minotaur_1) {

            return this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_004.png') ||
                   this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_005.png') ||
                   this.img.src.includes('assets/crafties/minotaur/Minotaur_1/PNG/PNGSequences/Slashing/0_Minotaur_Slashing_006.png');
        }
        if (obj instanceof Endboss) {
            return this.img.src.includes('assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_006.png') ||
                   this.img.src.includes('assets/trolls/_PNG/2_TROLL/Troll_02_1_ATTACK_007.png');
        }
        return false;
    }


/**
 * Checks if the current object is running against a given obstacle.
 * 
 * This method determines if the current object is colliding with the obstacle horizontally, which is checked
 * by comparing the object's and obstacle's horizontal boundaries.
 * 
 * @param {Object} obstacle - The obstacle to check for collision with the current object.
 * @returns {boolean} True if the current object is running against the obstacle, otherwise false.
 */
    runningagainst(obstacle) {
        return this.x + this.width - this.offset.right > obstacle.x + obstacle.offset.left &&
        this.x + this.offset.left < obstacle.x + obstacle.width - obstacle.offset.right;
    }


/**
 * Resets the object's speed to its initial value.
 * 
 * This method sets the current speed of the object back to the speed defined when the object was initialized.
 */
    resetSpeed(){
        this.speed = this.initialSpeed;
    }


/**
 * Checks if the current object is standing on a given object.
 * 
 * This method determines if the current object is vertically aligned with the given object and within a certain
 * range above it. It checks if the current object is horizontally aligned with the given object and positioned
 * within a vertical range relative to the top of the given object.
 * 
 * @param {Object} obj - The object to check if the current object is standing on.
 * @returns {boolean} True if the current object is standing on the given object, otherwise false.
 */
    isStandingOn(obj) {
        // Berechnung der relevanten Kanten
        const characterBottom = this.y + this.height - this.offset.bottom;
        const characterTop = this.y + this.offset.top;
        const enemyBottom = obj.y + obj.height - obj.offset.bottom;
        const enemyTop = obj.y + obj.offset.top;
    
        // Überprüfung, ob der Charakter horizontal über dem Feind ist
        const horizontallyAligned = 
            this.x < obj.x + obj.width &&
            this.x + this.width > obj.x;
    
        // Überprüfung, ob der Charakter sich vertikal in einem Bereich des Feindes befindet
        const verticallyAligned = 
            characterBottom > enemyTop && 
            characterTop < enemyBottom;
    
        // Der Charakter muss sich innerhalb eines bestimmten Bereichs über dem Feind befinden
        const isOnTop = verticallyAligned && 
                         (characterBottom - enemyTop) < (this.height / 2);
    
        // Der Charakter muss den Feind horizontal berühren und sich vertikal in der Nähe des Feindes befinden
        return horizontallyAligned && isOnTop && (characterTop < enemyBottom);
    }


/**
 * Initiates a stamp jump, increasing the vertical speed of the object.
 * 
 * This method sets the vertical speed of the object to a predefined value to simulate a jump and plays a jump sound effect.
 */
    stampJump(){
        this.speedY = 30;
        this.playSound(this.stampJumpSound, 0.4, 1);
    }
    

/**
 * Moves the object to the left by adjusting its position and changing its direction.
 * 
 * This method sets the object's direction to left, marks it as walking, and updates its position by subtracting the
 * object's speed from its x-coordinate.
 */
    walkLeft(){
        this.otherDirection = true;
        this.isWalking = true;
        this.x -= this.speed;
    };


/**
 * Moves the object to the right by adjusting its position and changing its direction.
 * 
 * This method sets the object's direction to right, marks it as walking, and updates its position by adding the
 * object's speed to its x-coordinate.
 */
    walkRight(){
        this.otherDirection = false;
        this.isWalking = true;
        this.x += this.speed;
    };


/**
 * Sets the vertical position of the object so that it is aligned with the top of the given obstacle.
 * 
 * This method adjusts the y-coordinate of the current object so that it is positioned on top of the given obstacle,
 * taking into account the object's height and offset.
 * 
 * @param {Object} obstacle - The obstacle to align the object's vertical position with.
 */
    setYOnFloor(obstacle) {
        this.y = obstacle.y - this.height + this.offset.bottom;
    }


    // applyGravity() {
    //     setInterval(() => {
    //         if (this.isAboveGround()  && !this.isStandingOnObstacle && !this.isStandingOnObstacle) {
    //             this.y -= this.speedY;
    //             this.speedY -= this.acceleration;
    //         }
    //     }, 28); 
    // }


/**
 * Applies gravity to the object, adjusting its vertical position and speed.
 * 
 * This method updates the object's vertical position (`y`) based on its current speed (`speedY`) and applies gravity
 * by decreasing the speed (`speedY`) over time. The updates are made at a fixed interval to simulate gravity.
 */
    applyGravityForThrowableObjects() {
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 28); 
    }


/**
 * Determines if the object is above the ground or not.
 * 
 * This method checks if the object is currently above ground based on its vertical speed and position. It returns true
 * if the object is moving upward or is below a certain vertical threshold, otherwise false.
 * 
 * @returns {boolean} True if the object is above ground, otherwise false.
 */
    isAboveGround(){
        if (this.speedY > 0 && !this.isStandingOnObstacle) {
            return true;
        } else if (this.y < 280 && !this.isStandingOnObstacle) {
            return true; 
        }
         else {
            return false;
        }
    };    

    

/**
 * Resets the object's vertical speed to zero.
 * 
 * This method sets the object's vertical speed (`speedY`) to zero, effectively stopping any vertical movement.
 */
    resetSpeedY(){
        this.speedY = 0;
    }


/**
 * Checks if the object is currently jumping.
 * 
 * This method determines if the object is in the process of jumping based on its vertical speed. It returns true if the
 * vertical speed (`speedY`) is positive, indicating an upward movement.
 * 
 * @returns {boolean} True if the object is jumping, otherwise false.
 */
    isJumping() {
        return this.speedY > 0;
    }


/**
 * Checks if the object is currently falling.
 * 
 * This method determines if the object is falling based on its vertical speed. It returns true if the vertical speed
 * (`speedY`) is less than or equal to -0.1, indicating a downward movement.
 * 
 * @returns {boolean} True if the object is falling, otherwise false.
 */
    isFalling(){
        return this.speedY <= -0.1;
    }


/**
 * Sets the object's vertical position to the ground level and stops its vertical movement.
 * 
 * This method adjusts the object's vertical position to ensure it is at ground level (y = 280) if it is below this
 * level. It also stops any vertical movement by setting the vertical speed (`speedY`) to zero and marks the object
 * as standing on an obstacle.
 */
    setOnGroundLevel(){
        if (this.y > 280) {
            this.y = 280;
            this.speedY = 0;
            this.isStandingOnObstacle = true;
        }   
    }


/**
 * Initiates a jump for the object.
 * 
 * This method sets the object as not standing on an obstacle and starts the jumping process by setting a positive
 * vertical speed (`speedY`). It also marks the object as in the process of jumping.
 */
    jump(){
        this.isStandingOnObstacle = false;
        this.jumpingProcess = true;                        
        this.speedY = 38;
    };


/**
 * Initiates the running action for the object.
 * 
 * This method sets the object's speed to a higher value to simulate running and plays a running sound effect. The
 * running speed is set to 5.5 units.
 */
    run(){
        this.speed = 5.5;
        this.playSound(this.walkSound, 0.35, 3);
    }


    /**
 * Berechnet den Prozentsatz eines Wertes im Verhältnis zu einem maximalen Wert.
 * 
 * @param {number} value - Der aktuelle Wert.
 * @param {number} maxValue - Der maximale Wert, von dem der Prozentwert berechnet wird.
 * @returns {number} - Der Prozentwert des aktuellen Wertes.
 */
calculatePercentage(value, maxValue) {
    if (maxValue === 0) {
        return 0; // Vermeidung von Division durch 0
    }
    return (value / maxValue) * 100;
}

}