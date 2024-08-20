
/**
 * Renders a notice popup asking users to rotate their device.
 * 
 * @returns {string} The HTML string for the rotate device notice popup.
 */
function renderRotateDeviceNotice(){
    return /*html*/`
    <div class="noticePopUp">
        <img class="horizontalParchment" src="./assets/WebImages/controllparchment-horizontal.png">
        <div class="adviceSentence">
            <h1 class="parchmentTitle">Please rotate<br>your device</h1>
            <button id="OkayButton" disabled onclick="closePopUp(); hideLandingScreen();" class="okayButton">Okay</button>
        </div>
    </div>
    `
}


/**
 * Renders the keyboard controls popup for desktop users.
 * @returns {string} The HTML string for the desktop keyboard controls popup.
 */
function renderKeyboardControls(){
    return /*html*/`
    <div id="controlsPopUp" class="desktopControlsPopUp">
        <img class="horizontalParchment" src="./assets/WebImages/controllparchment-horizontal.png">
        <div class="keyboardDescriptionContainer">
        <svg class="crossSVG" onclick="closePopUp()" xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 2em; height: 2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M957.3376 883.0976 586.24 512l371.0976-371.0976c20.1728-20.1728 20.48-53.76 0-74.24-20.6848-20.6848-53.76-20.48-74.24 0L512 437.76 140.9024 66.6624c-20.1728-20.1728-53.76-20.48-74.24 0-20.5824 20.6848-20.48 53.76 0 74.24L437.76 512 66.6624 883.0976c-20.1728 20.1728-20.48 53.76 0 74.24 20.6848 20.6848 53.76 20.48 74.24 0L512 586.24l371.0976 371.0976c20.1728 20.1728 53.76 20.48 74.24 0C978.0224 936.7552 977.8176 903.68 957.3376 883.0976z"/></svg>
            <h1 class="parchmentTitle">Walking:</h1>
                <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">D</span></p>
                <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">A</span></p>
                <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Hold shift</span></p>
            <h1 class="parchmentTitle">Action:</h2>
                <p class="parchmentText"><span class="explainIntro">Jump:</span><span class="explainAnswer">Space</span></p>
                <p class="parchmentText"><span class="explainIntro">Melee attack</span><span class="explainAnswer">Q</span></p>
                <p class="parchmentText"><span class="explainIntro">Throwing</span><span class="explainAnswer">E</span></p>
        </div>
    </div>
    `
}


/**
 * Renders the vertical mobile controls popup.
 * @returns {string} The HTML string for the vertical mobile controls popup.
 */
function renderVerticalMobileControls(){
    return /*html*/`
    <div id="controlsPopUp" class="controlsPopUp">
        <img class="verticalParchment" src="./assets/WebImages/controllparchment-vertical.png">
        <svg class="crossSVG" onclick="closePopUp()" xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M957.3376 883.0976 586.24 512l371.0976-371.0976c20.1728-20.1728 20.48-53.76 0-74.24-20.6848-20.6848-53.76-20.48-74.24 0L512 437.76 140.9024 66.6624c-20.1728-20.1728-53.76-20.48-74.24 0-20.5824 20.6848-20.48 53.76 0 74.24L437.76 512 66.6624 883.0976c-20.1728 20.1728-20.48 53.76 0 74.24 20.6848 20.6848 53.76 20.48 74.24 0L512 586.24l371.0976 371.0976c20.1728 20.1728 53.76 20.48 74.24 0C978.0224 936.7552 977.8176 903.68 957.3376 883.0976z"/></svg>
        <div class="mobileControlDescriptionContainer">
            <div id="descriptionContainer" class="descriptionAndButtonContainer">
                <div class="mobileControlDescriptionContainer">
                    <h1 class="parchmentTitle">Walking:</h1>
                    <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
                    <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
                    <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
                    <img class="mobileWalkExplain-Image" src="./assets/WebImages/mobileWalkExplain.png">
                </div>
                <div class="description-btn-flip-container" onclick="showSecondPageVerticalMobileControls()">
                    <a href="#" class="description-btn-flip" data-back="Page 2" data-front="Page 1"></a>
                </div>
            </div>
        </div>
    </div>
    `
}


/**
 * Renders the first page of vertical mobile controls.
 * @returns {string} The HTML string for the first page of vertical mobile controls.
 */
function renderFirstPageVerticalMobileControls(){
    return /*html*/`
    <div class="mobileControlDescriptionContainer">
        <h1 class="parchmentTitle">Walking:</h1>
        <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
        <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
        <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
        <img class="mobileWalkExplain-Image" src="./assets/WebImages/mobileWalkExplain.png">
    </div>
    <div class="description-btn-flip-container" onclick="showSecondPageVerticalMobileControls()">
        <a href="#" class="description-btn-flip" data-back="Page 2" data-front="Page 1"></a>
    </div>
    `
}


/**
 * Renders the second page of vertical mobile controls.
 * @returns {string} The HTML string for the second page of vertical mobile controls.
 */
function renderSecondPageVerticalMobileControls(){
    return /*html*/`
        <h1 class="parchmentTitle">Action:</h1>
        <div class="descriptionContainerSecondPage">
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Jump: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/jump.png"></div></div>
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Melee attack: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/Q.png"></div></div>
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Throw: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/E.png"></div></div>
        </div>
        <div class="description-btn-flip-container" onclick="showFirstPageHorizontalMobileControls()">
            <a href="#" class="description-btn-flip" data-back="Page 1" data-front="Page 2"></a>
        </div>
    `
}


/**
 * Renders the horizontal mobile controls popup.
 * @returns {string} The HTML string for the horizontal mobile controls popup.
 */
function renderHorizontalMobileControls(){
    return /*html*/`
    <div id="controlsPopUp" class="controlsPopUp">
        <img class="horizontalParchment" src="./assets/WebImages/controllparchment-horizontal.png">
        <svg class="crossSVG" onclick="closePopUp()" xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M957.3376 883.0976 586.24 512l371.0976-371.0976c20.1728-20.1728 20.48-53.76 0-74.24-20.6848-20.6848-53.76-20.48-74.24 0L512 437.76 140.9024 66.6624c-20.1728-20.1728-53.76-20.48-74.24 0-20.5824 20.6848-20.48 53.76 0 74.24L437.76 512 66.6624 883.0976c-20.1728 20.1728-20.48 53.76 0 74.24 20.6848 20.6848 53.76 20.48 74.24 0L512 586.24l371.0976 371.0976c20.1728 20.1728 53.76 20.48 74.24 0C978.0224 936.7552 977.8176 903.68 957.3376 883.0976z"/></svg>
        <div class="mobileControlDescriptionContainer">
            <div class="descriptionAndButtonContainer">
                <div id="descriptionContainer" class="centerDescriptionContainer">
                    <h1 class="parchmentTitle">Walking:</h1>
                    <div class="descriptionAndImageContainer">
                        <div class="descriptionContainer">
                            <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
                            <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
                            <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
                        </div>
                        <img class="mobileWalkExplain-Image" src="./assets/WebImages/mobileWalkExplain.png">
                    </div>
                    <div class="description-btn-flip-container" onclick="showSecondPageHorizontalMobileControls()">
                        <a href="#" class="description-btn-flip" data-back="Page 2" data-front="Page 1"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}


/**
 * Renders the second page of the horizontal mobile controls popup.
 * @returns {string} The HTML string for the second page of the horizontal mobile controls popup.
 */
function renderSecondPageHorizontalMobileControls() {
    return /*html*/`
        <h1 class="parchmentTitle">Action:</h1>
        <div class="descriptionContainerSecondPage">
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Jump: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/jump.png"></div></div>
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Melee attack: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/Q.png"></div></div>
            <div class="mobileSecondDescriptionRow"><span class="parchmentText">Throw: </span><div class="explainImgContainer"><img class="explainImg" src="assets/buttons/controller/E.png"></div></div>
        </div>
        <div class="description-btn-flip-container" onclick="showFirstPageHorizontalMobileControls()">
            <a href="#" class="description-btn-flip" data-back="Page 1" data-front="Page 2"></a>
        </div>
    `
}


/**
 * Renders the first page of the horizontal mobile controls popup.
 * @returns {string} The HTML string for the first page of the horizontal mobile controls popup.
 */
function renderFirstPageHorizontalMobileControls() {
    return /*html*/`
        <h1 class="parchmentTitle">Walking:</h1>
        <div class="descriptionAndImageContainer">
            <div class="descriptionContainer">
                <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
                <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
                <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
            </div>
            <img class="mobileWalkExplain-Image" src="./assets/WebImages/mobileWalkExplain.png">
        </div>
        <div class="description-btn-flip-container" onclick="showSecondPageHorizontalMobileControls()">
            <a href="#" class="description-btn-flip" data-back="Page 2" data-front="Page 1"></a>
        </div>
`
}

/**
 * Renders the HTML content for the story popup, including the story parchment, close button, and story text.
 * @returns {string} The HTML string for the story popup container.
 */
function renderStory(){
    return /*html*/`
    <div class="storyPopUpContainer">
        <img class="storyParchment" src="./assets/WebImages/storyparchment-removebg-preview.png" alt="story-parchment">
        <svg class="crossSVG storyCrossSVG" onclick="closePopUp()" xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M957.3376 883.0976 586.24 512l371.0976-371.0976c20.1728-20.1728 20.48-53.76 0-74.24-20.6848-20.6848-53.76-20.48-74.24 0L512 437.76 140.9024 66.6624c-20.1728-20.1728-53.76-20.48-74.24 0-20.5824 20.6848-20.48 53.76 0 74.24L437.76 512 66.6624 883.0976c-20.1728 20.1728-20.48 53.76 0 74.24 20.6848 20.6848 53.76 20.48 74.24 0L512 586.24l371.0976 371.0976c20.1728 20.1728 53.76 20.48 74.24 0C978.0224 936.7552 977.8176 903.68 957.3376 883.0976z"/></svg>
        <div class="storyParchmentContainer">
            <h1 class="storyTitle">Skarr's Journey:<br>Loctar Risen</h1>
            <div class="storyTextContainer">
                <p class="storyParagraph" id="story">
                    In the shadowy valley hidden between jagged mountains, there lived a young orc named Skarr, a proud member of the Axe Clan. His people were renowned for their strength, loyalty, and relentless pursuit of Loctarâ€”honor and glory in battle. Like his ancestors before him, Skarr trained daily, driven by the dream of becoming a warrior worthy of his clanâ€™s legacy.<br><br>

                    One fateful morning, Skarr awoke to an unsettling silence. The village, usually alive with the sounds of the forge and laughter, was eerily quiet. As he stepped outside, he was met with a scene of devastation. His home, his villageâ€”everything lay in ruins, scorched and broken. The telltale signs of battleâ€”giant footprints and shattered weaponsâ€”pointed to their ancient enemies: the savage trolls and ruthless minotaurs. These creatures, long envious of the Axe Clanâ€™s honor and strength, had finally struck.<br><br>

                    Desperate, Skarr searched the wreckage for any sign of his family. Amidst the debris, he found a torn piece of his sisterâ€™s cloakâ€”proof that they had been taken. But as he continued his search, his eyes fell upon something else: an ancient chest, half-buried under the rubble. This was no ordinary chestâ€”it was a relic passed down through generations, said to contain the secrets to the clanâ€™s greatest strength.<br><br>

                    With trembling hands, Skarr opened the chest. Inside, he found a map and a few scattered coins, each engraved with the symbol of Loctar. As he studied the map, he realized it marked the locations of sacred treasures hidden throughout the land. These treasures were no mere goldâ€”they were powerful relics, imbued with the essence of his ancestors, and vital to unlocking the strength needed to defeat the trolls and minotaurs.<br><br>

                    Skarr's father had often told him stories of these relics, which were left by the clan's founders to protect the Axe Clan in times of dire need. It was said that without these treasures, no warrior, no matter how brave, could hope to defeat the ancient enemies that now held his family captive. The trolls and minotaurs had used dark magic to bind Skarrâ€™s family, and only the power of these relics could break the spell. Without them, a direct assault would be doomed to fail, and his family would remain lost forever.<br><br>

                    Understanding the gravity of his mission, Skarr swore an oath to complete the Trial of Loctar. He set off on his journey, driven by the need to gather the sacred treasures that would restore the Loctar of his clan and give him the power to rescue his family. Each coin he found was more than just a step closer to glory; it was a piece of the strength he needed to confront his enemies.<br><br>

                    Through treacherous lands filled with enemies, Skarr fought not just for survival, but to prove himself worthy of his ancestorsâ€™ legacy. The treasures he sought were scattered across dangerous terrains, guarded by fierce creatures. But with every battle fought and every coin collected, Skarr grew stronger, fueled by the memories of his family and the unyielding spirit of the Axe Clan.<br><br>

                    Skarr knew that the path ahead would be fraught with danger, but he was determined. Only by gathering these sacred items could he hope to rescue his family and ensure that the Axe Clan would rise again, its honor restored and its glory renewed. As Skarr embarked on this perilous quest, he knew that Loctar was not just a goalâ€”it was his destiny.

                </p>
            </div>
        </div>
    </div>
    `;
}


/**
 * Renders the HTML content for the success parchment popup, including the congratulations message and buttons.
 * @returns {string} The HTML string for the success parchment popup container.
 */
function renderSuccessParchment() {
    return /*html*/`
    <div class="finisherPopUpContainer">
        <div class="finisherParchmentContainer">
            <h1 class="finisherTitle wonTitle">Congratulations!<br>You have succeed!</h1>
            <div class="finishButtonsContainer">
                <button onclick="closePopUp(); backToMenu();" class="okayButton">Menu</button>
                <button onclick="closePopUp(); resetGame();" class="okayButton">Play again</button>
            </div>
        </div>
    </div>
    `;
}


/**
 * Renders the HTML content for the failure parchment popup, including the failure message and buttons.
 * @returns {string} The HTML string for the failure parchment popup container.
 */
function renderFailureParchment() {
    return /*html*/`
    <div class="finisherPopUpContainer">
        <div class="finisherParchmentContainer">
            <h1 class="finisherTitle lostColor">You have lost!</h1>
            <div class="finishButtonsContainer">
                <button onclick="closePopUp(); backToMenu();" class="okayButton">Menu</button>
                <button onclick="closePopUp(); resetGame();" class="okayButton">Play again</button>
            </div>
        </div>
    </div>
    `;
}


/**
 * Renders the HTML content for the landing screen, including the game title and navigation buttons.
 * @returns {string} The HTML string for the landing screen container, featuring the title and buttons for starting the game, viewing controls, story, and legal notice.
 */
function renderLandingScreen(){
    return /*html*/`
      <div class="landingHeroContent">
        <h1 class="landingTitle">Loctar Risen</h1>
        <div class="landingButtonsContainer">
          <div class="landingPlayButtonContainer" onclick="startGame()">
            <a href="#" class="btn-flip landingPlayButton" data-back="Let's go" data-front="Start Game"></a>
          </div>

          <div onclick="slideInControls()">
            <a href="#" class="btn-flip landingSubButtons" data-back="Gameplay" data-front="Controls"></a>
          </div>
          <div onclick="slideInStory()">
            <a href="#" class="btn-flip landingSubButtons" data-back="About" data-front="Story"></a>
          </div>
          <a href="impressum.html" class="btn-flip landingSubButtons impressumButton impressum-btn-flip landing-impressum-btn-flip" data-back="Inprint" data-front="Legal Notice"></a>    
        </div>
      </div>
    `;
}