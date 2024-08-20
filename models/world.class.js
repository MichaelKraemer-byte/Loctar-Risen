class World {
    character = new Character();
    level = level_1;
    statusBars = [
        new HPstatusBar(),
        new AxeStatusBar(),
        new CoinStatusBar(),
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    currentGround;
    characterNewYSetted = false;
    gameOver = false;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    };


    /**
     * Starts multiple intervals to regularly check various game elements and conditions.
     * Sets up intervals for adding Endboss status bars, checking platform landings, obstacle collisions,
     * melee interactions, throwing objects, body-to-body collisions, and throwable object collisions.
     * Also includes intervals for removing throwable objects and checking treasure collisions.
     */
    run() {
        this.startEndbossStatusBarInterval();
        this.startPlatformLandingCheckInterval();
        this.startObstacleCollisionCheckInterval();
        this.startMeleeInteractionCheckInterval();
        this.startThrowableObjectCollisionInterval();
        this.startThrowableObjectCheckInterval();
        this.startBodyToBodyCollisionCheckInterval();
        this.startThrowableObjectRemovalInterval();
        this.startTreasureCollisionCheckInterval();
    }

    /**
     * Sets up an interval to periodically add or remove Endboss status bars.
     */
    startEndbossStatusBarInterval() {
        setInterval(() => {
            this.addEndbossStatusbarToMap();
        }, 1000 / 20);
    }

    /**
     * Sets up an interval to periodically check for platform landings.
     */
    startPlatformLandingCheckInterval() {
        setInterval(() => {
            this.checkPlatformLanding();
        }, 1000 / 150);
    }

    /**
     * Sets up an interval to periodically check for obstacle collisions.
     */
    startObstacleCollisionCheckInterval() {
        setInterval(() => {
            this.checkObstacleCollisions();
        }, 1000 / 150);
    }

    /**
     * Sets up an interval to periodically check for melee interactions.
     */
    startMeleeInteractionCheckInterval() {
        setInterval(() => {
            this.checkMelee();
        }, 1000 / 32);
    }

    /**
     * Sets up an interval to periodically check for throwable objects.
     */
    startThrowableObjectCheckInterval() {
        setInterval(() => {
            this.checkIfThrowingObjects();
        }, 1000 / 32);
    }

    /**
     * Sets up an interval to periodically check for body-to-body collisions.
     */
    startBodyToBodyCollisionCheckInterval() {
        setInterval(() => {
            this.checkBodyToBodyCollisions();
        }, 1000 / 32);
    }

    /**
     * Sets up an interval to periodically check for collisions with throwable objects.
     */
    startThrowableObjectCollisionInterval() {
        setInterval(() => {
            this.checkThrowableObjectCollision();
        }, 1000 / 50);
    }

    /**
     * Sets up an interval to periodically remove throwable objects from the game.
     */
    startThrowableObjectRemovalInterval() {
        setInterval(() => {
            this.removeThrowableObjects();
        }, 1000 / 32);
    }

    /**
     * Sets up an interval to periodically check for collisions with treasures.
     */
    startTreasureCollisionCheckInterval() {
        const checkTreasureCollision = setInterval(() => {
            this.checkTreasureCollision(checkTreasureCollision);
        }, 1000 / 100);
    }


    /**
     * Sets the world context for all level objects, including the character, enemies, endboss, obstacles, and platforms.
     */
    setWorld() {
        // Set the world context for the character
        this.character.world = this;
    
        // Set the world context for enemies
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            enemy.gameHasStarted = true;
        });
    
        // Set the world context for endbosses
        this.level.endboss.forEach(endboss => {
            endboss.world = this;
            endboss.gameHasStarted = true;
        });
    
        // Set the world context for obstacles/platforms
        this.level.obstacles.forEach(obstacle => {
            obstacle.world = this;
            obstacle.gameHasStarted = true;
        });
    
        // Set the world context for platforms
        this.level.platforms.forEach(platform => {
            platform.world = this;
            platform.gameHasStarted = true;
        });
    }


    /**
     * Checks if the character is landing on a platform and updates its state accordingly.
     */
    checkPlatformLanding() {
        this.level.platforms.forEach(platform => {
            if (
                this.character.isColliding(platform) &&
                this.character.bodyBottom <= platform.y + 25
            ) {
                // Character is standing on a platform
                this.character.isStandingOnObstacle = true;
                this.character.speedY = 0;
                this.character.jumpingProcess = false;
                this.character.y = platform.y - this.character.height + this.character.offset.bottom;
            } else {
                // Character is not standing on a platform, check for falling
                setTimeout(() => {
                    this.checkFallingFromPlatform();
                }, 100);
            }
        });
    }

    /**
     * Checks if the character has fallen from a platform and updates its state accordingly.
     */
    checkFallingFromPlatform() {
        if (this.character.y < 280 && !this.keyboard.SPACE) {
            // Character has fallen from the platform
            this.character.isStandingOnObstacle = false;
        }
    }

    /**
     * Draws the game elements on the canvas, including objects with parallax effects and status bars.
     */
    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Save the current canvas state
        this.ctx.save();

        // Apply camera translation
        this.ctx.translate(this.camera_x, 0);

        // Draw level objects with parallax effects
        this.drawObjectInParallaxEffect(this.level.skies);
        this.drawObjectInParallaxEffect(this.level.backDecors);
        this.drawObjectInParallaxEffect(this.level.middleDecors);
        this.drawObjectInParallaxEffect(this.level.foregrounds);

        // Draw status bars
        this.addMultipleFixedObjectsToMap(this.statusBars);

        // Draw level objects
        this.addObjectsToMap(this.level.obstacles);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.treasures);
        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        // Draw throwable objects
        this.addThrowableObjectsToMap(this.level.throwableObjects);

        // Draw other level elements with parallax effects
        this.drawObjectInParallaxEffect(this.level.axe);
        this.drawObjectInParallaxEffect(this.level.coin);
        this.drawObjectInParallaxEffect(this.level.grounds);

        // Restore the canvas state
        this.ctx.restore();

        // Request the next frame for continuous drawing
        requestAnimationFrame(() => {
            this.draw();
        });
    }
        


    /**
     * Checks for collisions between the character and treasures.
     * @param {number} treasureCollisionInterval - Interval ID for treasure collision checking.
     */
    checkTreasureCollision(treasureCollisionInterval) {
        this.level.treasures.forEach(treasure => {
            if (this.character.isColliding(treasure) && this.keyboard.Q) {
                this.gameOver = true;
                treasure.img.src = treasure.unlockedImage; // Change treasure image when collected
                this.character.playSound(this.character.winSound, 1, 1); // Play sound effect
                slideInSuccessParchment(); // Display success message
                clearInterval(treasureCollisionInterval); // Stop checking for treasure collisions
            }
        });
    }


/**
 * Checks for collisions between the character and all obstacles in the level.
 */
checkObstacleCollisions() {
    this.level.obstacles.forEach(obstacle => {
        if (this.character.isColliding(obstacle)) {
            const charBounds = this.getCharacterBounds();
            const obsBounds = this.getObstacleBounds(obstacle);
            this.handleCollision(charBounds, obsBounds, obstacle);
        } else {
            this.scheduleFallingCheck();
        }
    });
}


/**
 * Calculates and returns the bounds of the character.
 * 
 * @returns {Object} The character's bounds including top, bottom, left, and right.
 */
getCharacterBounds() {
    return {
        top: this.character.y + this.character.offset.top,
        bottom: this.character.y + this.character.height - this.character.offset.bottom,
        left: this.character.x + this.character.offset.left,
        right: this.character.x + this.character.width - this.character.offset.right
    };
}


/**
 * Calculates and returns the bounds of the given obstacle.
 * 
 * @param {Object} obstacle - The obstacle object.
 * @returns {Object} The obstacle's bounds including top, bottom, left, and right.
 */
getObstacleBounds(obstacle) {
    return {
        top: obstacle.y + obstacle.offset.top,
        bottom: obstacle.y + obstacle.height - obstacle.offset.bottom,
        left: obstacle.x + obstacle.offset.left,
        right: obstacle.x + obstacle.width - obstacle.offset.right
    };
}


/**
 * Handles the collision between the character and an obstacle.
 * Determines the side of collision and adjusts the character's position accordingly.
 * 
 * @param {Object} charBounds - The bounds of the character.
 * @param {Object} obsBounds - The bounds of the obstacle.
 * @param {Object} obstacle - The obstacle object.
 */
handleCollision(charBounds, obsBounds, obstacle) {
    const overlapTop = charBounds.bottom - obsBounds.top;
    const overlapBottom = obsBounds.bottom - charBounds.top;
    const overlapLeft = charBounds.right - obsBounds.left;
    const overlapRight = obsBounds.right - charBounds.left;
    const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight);
    
    if (minOverlap === overlapTop && overlapTop > 0) {
        this.handleTopCollision(obstacle);
    } else if (minOverlap === overlapBottom && overlapBottom > 0) {
        this.handleBottomCollision(obstacle);
    } else if (minOverlap === overlapLeft && overlapLeft > 0) {
        this.handleLeftCollision(obstacle);
    } else if (minOverlap === overlapRight && overlapRight > 0) {
        this.handleRightCollision(obstacle);
    }
}


/**
 * Handles the collision when the character hits the top of an obstacle.
 * 
 * @param {Object} obstacle - The obstacle object.
 */
handleTopCollision(obstacle) {
    this.character.isStandingOnObstacle = true;
    this.character.speedY = 0;
    this.character.y = obstacle.y - this.character.height + this.character.offset.bottom + 10;
}


/**
 * Handles the collision when the character hits the bottom of an obstacle.
 * 
 * @param {Object} obstacle - The obstacle object.
 */
handleBottomCollision(obstacle) {
    this.character.isStandingOnObstacle = true;
    this.character.jumpingProcess = false;
    this.character.speedY = 0;
    this.character.y = obstacle.y + obstacle.height - this.character.offset.bottom;
}


/**
 * Handles the collision when the character hits the left side of an obstacle.
 * 
 * @param {Object} obstacle - The obstacle object.
 */
handleLeftCollision(obstacle) {
    this.character.x = obstacle.x - this.character.width + this.character.offset.right;
}

/**
 * Handles the collision when the character hits the right side of an obstacle.
 * 
 * @param {Object} obstacle - The obstacle object.
 */
handleRightCollision(obstacle) {
    this.character.x = obstacle.x + obstacle.width - this.character.offset.left;
}


/**
 * Schedules a check to see if the character is falling from a platform.
 */
scheduleFallingCheck() {
    setTimeout(() => {
        this.checkFallingFromPlatform();
    }, 100);
}


/**
 * Checks for collisions between the character and various objects in the game.
 */
checkBodyToBodyCollisions() {
    this.checkEnemyCollisions();
    this.checkEndbossCollisions();
    this.checkAxeCollisions();
    this.checkCoinCollisions();
}

/**
 * Checks for collisions between the character and enemies.
 * If the character is standing on an enemy and falling, the enemy dies.
 * If the character collides from other directions, it reduces the character's health.
 */
checkEnemyCollisions() {
    this.level.enemies.forEach(enemy => {
        if (!enemy.isDead() && this.character.isColliding(enemy)) {
            if (this.character.isStandingOn(enemy) && this.character.isFalling()) {
                this.handleEnemyStamp(enemy);
            } else if (this.character.y > 260) {
                this.handleEnemyCollision(enemy);
            }
        }
    });
}


/**
 * Handles the scenario where the character stamps on an enemy.
 * 
 * @param {Enemy} enemy - The enemy that the character is stamping on.
 */
handleEnemyStamp(enemy) {
    this.character.stampJump();
    enemy.dies(); // Enemy dies
}


/**
 * Handles the scenario where the character collides with an enemy from other directions.
 * 
 * @param {Enemy} enemy - The enemy that the character is colliding with.
 */
handleEnemyCollision(enemy) {
    this.character.reduceHP(1, enemy);
    this.updateHealthBar();
}

/**
 * Checks for collisions between the character and endbosses.
 * If a collision occurs, reduces the character's health by 2.
 */
checkEndbossCollisions() {
    this.level.endboss.forEach(endboss => {
        if (!endboss.isDead() && this.character.isColliding(endboss)) {
            this.character.reduceHP(2, endboss);
            this.updateHealthBar();
        }
    });
}


/**
 * Checks for collisions between the character and axes.
 * If a collision occurs, increases the character's axe inventory and removes the axe from the level.
 */
checkAxeCollisions() {
    this.level.axe.forEach(axe => {
        if (this.character.isColliding(axe)) {
            this.handleAxeCollection(axe);
        }
    });
}


/**
 * Handles the collection of an axe by the character.
 * 
 * @param {Axe} axe - The axe that the character is collecting.
 */
handleAxeCollection(axe) {
    this.character.playSound(this.character.collectAxeSound, 1, 3);
    this.character.increaseInventoryOf(axe);
    this.updateAxeCount();
    this.removeCollectableObject(axe);
}


/**
 * Checks for collisions between the character and coins.
 * If a collision occurs, increases the character's coin inventory and removes the coin from the level.
 */
checkCoinCollisions() {
    this.level.coin.forEach(coin => {
        if (this.character.isColliding(coin)) {
            this.handleCoinCollection(coin);
        }
    });
}


/**
 * Handles the collection of a coin by the character.
 * 
 * @param {Coin} coin - The coin that the character is collecting.
 */
handleCoinCollection(coin) {
    this.character.playSound(this.character.collectCoinSound, 0.1, 1.3);
    this.character.increaseInventoryOf(coin);
    this.updateCoinCount();
    this.removeCollectableObject(coin);
}


/**
 * Updates the character's health bar based on the current health.
 */
updateHealthBar() {
    this.statusBars[0].setPercentage(this.character.HP);
}


/**
 * Updates the character's axe count in the status bar.
 */
updateAxeCount() {
    this.statusBars[1].setPercentage(this.character.axes);
}


/**
 * Updates the character's coin count in the status bar.
 */
updateCoinCount() {
    this.statusBars[2].setPercentage(this.character.coins);
}


/**
 * Removes a collectable object (like an axe or coin) from the level.
 * 
 * @param {Object} object - The collectable object to be removed.
 */
removeCollectableObject(object) {
    // Implementation for removing the object from the level
}


/**
 * Checks for collisions between throwable objects and enemies or the endboss.
 * This function is triggered when there are throwable objects in the level or when the user presses the 'E' key.
 */
checkThrowableObjectCollision() {
    if (this.level.throwableObjects[0] || this.keyboard.E) {
        this.checkEnemyCollisionsWithThrowables();
        this.checkEndbossCollisionsWithThrowables();
    }
}



 /**
 * Checks for collisions between throwable objects and enemies.
 * If a collision is detected, it plays a sound, sets the collision status, and reduces enemy health.
 */
checkEnemyCollisionsWithThrowables() {
    this.level.throwableObjects.forEach((throwObject) => {
        if (throwObject && !throwObject.used) {
            this.level.enemies.forEach((enemy) => {
                if (!enemy.isDead() && throwObject.isColliding(enemy)) {
                    this.handleThrowableHit(enemy, throwObject);
                }
            });
        }
    });
}



 /**
 * Checks for collisions between throwable objects and the endboss.
 * If a collision is detected, it plays a sound, sets the collision status, and reduces endboss health.
 */
checkEndbossCollisionsWithThrowables() {
    this.level.throwableObjects.forEach((throwObject) => {
        if (throwObject && !throwObject.used) {
            this.level.endboss.forEach((endboss) => {
                if (endboss.isVisible() && !endboss.isDead() && throwObject.isColliding(endboss)) {
                    this.handleThrowableHit(endboss, throwObject);
                    this.statusBars[3].setPercentage(endboss.calculatePercentage(endboss.HP, 300));
                }
            });
        }
    });
}



 /**
 * Handles the actions when a throwable object hits an enemy or the endboss.
 * Plays a sound, sets the collision status to true, and reduces the target's health by 40.
 * 
 * @param {Object} target - The enemy or endboss that is hit by the throwable object.
 * @param {Object} throwObject - The throwable object that collides with the target.
 */
handleThrowableHit(target, throwObject) {
    this.character.playSound(this.character.throwingAxeHitSound, 0.3, 1);
    throwObject.collision = true;
    target.reduceHP(40, throwObject.used);
}


    /**
 * Checks and handles melee attacks for the character and enemies/bosses.
 * 
 * This function orchestrates the melee attack logic for both the character and enemies/bosses.
 * It first performs melee attacks by the character (`characterMelee`) and then checks for melee attacks
 * on the character from enemies and bosses (`enemyAndBossMelee`).
 * 
 */
    checkMelee(){
        this.characterMelee();
        this.enemyAndBossMelee();
    }


/**
 * Checks and handles melee attacks from enemies and bosses on the character.
 */
enemyAndBossMelee() {
    this.handleEnemyMeleeAttacks();
    this.handleBossMeleeAttacks();
}



 /**
 * Handles melee attacks from enemies on the character.
 * If the enemy is within range and attacking, the character's HP is reduced.
 */
handleEnemyMeleeAttacks() {
    this.level.enemies.forEach((enemy) => {
        if (this.character.isHorizontalInRange(enemy)) {
            enemy.speed = 0;
        }
        if (this.shouldEnemyAttack(enemy)) {
            this.executeEnemyAttack(enemy);
        } else {
            enemy.resetSpeed();
        }
    });
}



 /**
 * Checks if the enemy should attack the character based on its state and position.
 * 
 * @param {Object} enemy - The enemy to check.
 * @returns {boolean} - Returns true if the enemy should attack, otherwise false.
 */
shouldEnemyAttack(enemy) {
    return (
        !enemy.meleeAttackProcess &&
        this.character.isInMeleeRangeForMinotaur(enemy) &&
        !enemy.isDead() &&
        !enemy.damageProcess
    );
}



 /**
 * Executes the enemy's melee attack on the character.
 * 
 * @param {Object} enemy - The enemy performing the attack.
 */
executeEnemyAttack(enemy) {
    enemy.meleeRangeToCharacter = true;
    if (enemy.isAttacking) {
        if (this.character.isDead()) {
            enemy.hitSound.pause();
        } else {
            enemy.playSound(enemy.hitSound, 0.1, 0.9);
        }
        this.character.reduceHP(5, enemy);
        this.updateHealthBar();
    }
}



 /**
 * Handles melee attacks from the boss on the character.
 * If the boss is within range and attacking, the character's HP is reduced.
 */
handleBossMeleeAttacks() {
    this.level.endboss.forEach((endboss) => {
        if (this.shouldBossAttack(endboss)) {
            this.executeBossAttack(endboss);
        } else {
            endboss.resetSpeed();
        }
    });
}



 /**
 * Checks if the boss should attack the character based on its state and position.
 * 
 * @param {Object} endboss - The boss to check.
 * @returns {boolean} - Returns true if the boss should attack, otherwise false.
 */
shouldBossAttack(endboss) {
    return (
        !endboss.meleeAttackProcess &&
        this.character.isInMeleeRangeForEndboss(endboss) &&
        !endboss.isDead() &&
        !endboss.damageProcess
    );
}



 /**
 * Executes the boss's melee attack on the character.
 * 
 * @param {Object} endboss - The boss performing the attack.
 */
executeBossAttack(endboss) {
    endboss.meleeRangeToCharacter = true;
    if (endboss.isAttacking) {
        if (this.character.isDead()) {
            endboss.hitSound.pause();
        } else {
            endboss.playSound(endboss.hitSound, 1, 1);
        }
        this.character.reduceHP(10, endboss);
        this.updateHealthBar();
    }
}



 /**
 * Updates the character's health bar based on the current health.
 */
updateHealthBar() {
    this.statusBars[0].setPercentage(this.character.HP);
}



/**
 * Checks and handles melee attacks by the character on enemies and bosses.
 */
characterMelee() {
    this.handleCharacterMeleeOnEnemies();
    this.handleCharacterMeleeOnBosses();
}



 /**
 * Handles melee attacks by the character on enemies.
 * If the enemy is within range and the character is attacking, the enemy's HP is reduced.
 */
handleCharacterMeleeOnEnemies() {
    this.level.enemies.forEach((enemy) => {
        if (this.shouldCharacterAttack(enemy)) {
            this.executeCharacterAttack(enemy);
        } else {
            enemy.resetSpeed();
        }
    });
}



 /**
 * Handles melee attacks by the character on the boss.
 * If the boss is within range and the character is attacking, the boss's HP is reduced.
 */
handleCharacterMeleeOnBosses() {
    this.level.endboss.forEach((endboss) => {
        if (this.shouldCharacterAttack(endboss)) {
            this.executeCharacterAttack(endboss);
        } else {
            endboss.resetSpeed();
        }
    });
}



 /**
 * Checks if the character should attack the enemy or boss based on the state and position.
 * 
 * @param {Object} target - The enemy or boss to check.
 * @returns {boolean} - Returns true if the character should attack, otherwise false.
 */
shouldCharacterAttack(target) {
    return (
        !this.character.meleeAttackProcess &&
        target.isInMeleeRangeForCharacter(this.character) &&
        !target.isDead() &&
        !target.damageProcess &&
        this.keyboard.Q
    );
}



 /**
 * Executes the character's melee attack on an enemy or boss.
 * 
 * @param {Object} target - The enemy or boss being attacked.
 */
executeCharacterAttack(target) {
    target.reduceHP(30, target);
    this.character.playSound(this.character.meleeHitSound, 1, 1);
}



/**
 * Checks if the character is throwing an object and processes the throwing action.
 * 
 * This function checks if the `E` key is pressed, the character is not dead, has throwable objects in inventory,
 * and is not on cooldown. If all conditions are met, it creates a new throwable object, adds it to the level's
 * throwable objects array, updates the character's inventory of throwable objects, and starts a cooldown period.
 * 
 */
    checkIfThrowingObjects(){
        if (this.keyboard.E && !this.character.isDead() && this.character.axes !== 0 && !this.character.cooldown) {
            let axe = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
            this.level.throwableObjects.push(axe);
            this.character.axes -= 20;
            this.statusBars[1].setPercentage(this.character.axes);
            this.character.checkAndStartCooldown();
        };
    }


/**
 * Removes throwable objects from the level if they are no longer visible or have been used.
 * 
 * This function iterates through all throwable objects in the level and removes them from the array if:
 * 1. They are not visible, or
 * 2. They have been used.
 * The function also ensures that the character is not on cooldown while performing these operations.
 * 
 */
    removeThrowableObjects(){
        this.level.throwableObjects.forEach((throwObject) => {
            if(!this.character.cooldown){
                if (!throwObject.isVisible() || throwObject.used) {
                    const index = this.level.throwableObjects.indexOf(throwObject);
                    if (index > -1) {
                        this.level.throwableObjects.splice(index, 1);
                    }
                }
            }
        });
    }


/**
 * Adds throwable objects to the map if they are present.
 * 
 * This function takes an array of throwable objects and adds them to the map if the array is not empty.
 * It utilizes the `addObjectsToMap` method to handle the actual addition to the map.
 * 
 * @param {ThrowableObject[]} throwableObjects - An array of `ThrowableObject` instances to be added to the map.
 * 
 */
    addThrowableObjectsToMap(throwableObjects){
        if (throwableObjects[0]) {
            this.addObjectsToMap(throwableObjects);
        }
    }


/**
 * Draws objects with a parallax effect based on their speed.
 * 
 * This function iterates through a list of background layers and applies a parallax effect by translating
 * the background based on its speed and the current camera position. The background objects are drawn with
 * the adjusted position.
 * 
 * @param {Array<Object>} layer - An array of background objects to be drawn with the parallax effect. Each object should have a `speed` property and a `draw` method.
 * 
 */
    drawObjectInParallaxEffect(layer) {
        layer.forEach(bg => {
            let adjustedX = bg.speed * this.camera_x; // Anpassen der Geschwindigkeit für Parallaxen-Effekt
            this.ctx.save(); // Speichert den Zustand vor der Verschiebung
            this.ctx.translate(adjustedX, 0); // Hintergrund basierend auf Geschwindigkeit verschieben
            this.addToMap(bg);
            this.ctx.restore(); // Stellt den Zustand nach der Verschiebung wieder her
        });
    }


/**
 * Adds multiple objects to the map.
 * 
 * This function iterates through an array of objects and adds each one to the map using the `addToMap` method.
 * 
 * @param {Array<Object>} objects - An array of objects to be added to the map. Each object should have a `draw` method.
 * 
 */
    addObjectsToMap(objects){
        objects.forEach( o => {
            this.addToMap(o)
        });
    }


/**
 * Adds a movable object to the map.
 * 
 * This function draws a movable object on the map. If the object requires flipping (indicated by `otherDirection`), it will be flipped before drawing.
 * 
 * @param {Object} movableObject - The movable object to be added to the map. It should have `draw` and `flipImage` methods, and possibly an `otherDirection` property.
 * 
 */
    addToMap(movableObject){
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        };

        movableObject.draw(this.ctx);
        // movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


/**
 * Adds a fixed object to the map.
 * 
 * This function draws a fixed object on the map while adjusting for the current camera position. The camera is translated to ensure the object is drawn correctly relative to the camera's position.
 * 
 * @param {Object} object - The fixed object to be added to the map. It should have a `draw` method.
 * 
 */
    addFixedObjectToMap(object){
        this.ctx.translate(-this.camera_x, 0);
        object.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);
    }


/**
 * Adds multiple fixed objects to the map.
 * 
 * This function iterates through an array of fixed objects and adds each one to the map using the `addFixedObjectToMap` method.
 * 
 * @param {Array<Object>} objects - An array of fixed objects to be added to the map. Each object should have a `draw` method.
 * 
 */
    addMultipleFixedObjectsToMap(objects){
        objects.forEach( obj => {
            this.addFixedObjectToMap(obj)
        });
    }


/**
 * Flips a movable object horizontally for drawing.
 * 
 * This function flips the image of a movable object horizontally by translating and scaling the canvas context. 
 * The object's `x` position is also adjusted to account for the flip.
 * 
 * @param {Object} movableObject - The movable object to be flipped. It should have a `width` and `x` property.
 * 
 * @returns {void}
 */
    flipImage(movableObject){
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


/**
 * Reverts the horizontal flip applied to a movable object.
 * 
 * This function restores the canvas context to its previous state and adjusts the `x` position of the movable object back to its original value.
 * 
 * @param {Object} movableObject - The movable object whose flip state needs to be reverted. It should have an `x` property.
 * 
 */
    flipImageBack(movableObject){
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }


/**
 * Removes a collectable object from the level.
 * 
 * This function removes a collectable object (either an `Axe` or a `Coin`) from the respective array in the level. 
 * If the object is an `Axe`, it is removed from the `level.axe` array. If it is a `Coin`, it is removed from the `level.coin` array.
 * 
 * @param {Object} objectToRemove - The collectable object to be removed. This object must be an instance of either `Axe` or `Coin`.
 * 
 */
    removeCollectableObject(objectToRemove) {
        if (objectToRemove instanceof Axe) {
            let index = this.level.axe.indexOf(objectToRemove);
            if (index !== -1) {
                this.level.axe.splice(index, 1);
            }
        } else if (objectToRemove instanceof Coin) {
            let index = this.level.coin.indexOf(objectToRemove);
            if (index !== -1) {
                this.level.coin.splice(index, 1);
            }
        }
    }


    // addEndbossStatusbarToMap() {
    //     const endbossStatusBar = this.statusBars.find(bar => bar instanceof EndbossStatusBarOfHP);



    //     this.level.endboss.forEach((endboss) => {
    //         if (!endbossStatusBar) {
    //             if (!endboss.isDead() && endboss.isVisible()) {
    //                 this.statusBars.push(new EndbossStatusBarOfHP());
    //             }
    //         } else {
    //             if (endboss.isDead() || !endboss.isVisible()) {
    //                 const index = this.statusBars.indexOf(endbossStatusBar);
    //                 this.statusBars.splice(index, 1);
    //             }
    //         }            
    //     })
    // }


/**
 * Adds or removes Endboss status bars to/from the statusBars array based on the visibility and health of the Endbosses.
 * 
 * This method iterates through all Endbosses in the level and manages the Endboss status bars displayed on the screen. 
 * It adds a new status bar for each Endboss that is not dead and is visible, positioning it below the previous status bars 
 * to prevent overlapping. If an Endboss is dead or not visible, its corresponding status bar is removed.
 * 
 * **Initial Setup**:
 * - Initializes the vertical offset (`yOffset`) for positioning new status bars.
 * 
 * **Adding Status Bars**:
 * - Filters existing status bars to find any associated with the current Endboss.
 * - Creates and adds a new status bar if the Endboss is alive and visible.
 * - Sets the `y` position of the new status bar based on the number of existing Endboss status bars to avoid overlap.
 * - Links the newly created status bar with the corresponding Endboss (if needed).
 * 
 * **Removing Status Bars**:
 * - Removes the status bar for an Endboss if it is dead or not visible.
 * 
 */
    addEndbossStatusbarToMap() {
        // Initialisierung des y-Wertes für die neue StatusBar
        let yOffset = 0;
    
        // Durchlaufe alle Endbossen
        this.level.endboss.forEach((endboss) => {
            // Filtert alle EndbossStatusBars aus dem statusBars-Array
            const endbossStatusBars = this.statusBars.filter(bar => bar instanceof EndbossStatusBarOfHP);
            
            // Überprüfen, ob es bereits eine StatusBar für den Endboss gibt
            const existingBar = endbossStatusBars.find(bar => bar.endboss === endboss);
    
            if (!endboss.isDead() && endboss.isVisible()) {
                if (!existingBar) {
                    // Neue StatusBar für den Endboss hinzufügen
                    const newBar = new EndbossStatusBarOfHP();
                    newBar.y = 20 * endbossStatusBars.length; // y-Position basierend auf der Anzahl der vorhandenen StatusBars anpassen
                    newBar.endboss = endboss; // Verknüpfen Sie den Endboss mit der StatusBar (falls benötigt)
                    this.statusBars.push(newBar);
                }
            } else {
                if (existingBar) {
                    // Existierende StatusBar entfernen
                    const barIndex = this.statusBars.indexOf(existingBar);
                    if (barIndex !== -1) {
                        this.statusBars.splice(barIndex, 1);
                    }
                }
            }
        });
    }
}

