function renderRotateDeviceNotice(){
    return /*html*/`
    <div class="noticePopUp">
        <img class="horizontalParchment" src="../assets/WebImages/controllparchment-horizontal.png">
        <div class="adviceSentence">
            <h1 class="parchmentTitle">Please rotate<br>your device</h1>
            <button id="OkayButton" disabled onclick="closePopUp(); hideLandingScreen();">OK</button>            
        </div>
    </div>
    `
}


function renderKeyboardControls(){
    return /*html*/`
    <div id="controlsPopUp" class="controlsPopUp">
        <img class="horizontalParchment" src="../assets/WebImages/controllparchment-horizontal.png">
    </div>
    `
}


function renderVerticalMobileControls(){
    return /*html*/`
    <div id="controlsPopUp" class="controlsPopUp">
        <img class="verticalParchment" src="../assets/WebImages/controllparchment-vertical.png">
        <div class="mobileControlDescriptionContainer">
            <h1 class="parchmentTitle">Walking:</h1>
            <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
            <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
            <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
            <img class="mobileWalkExplain-Image" src="../assets/WebImages/mobileWalkExplain.png">
        </div>
    </div>
    `
}


function renderHorizontalMobileControls(){
    return /*html*/`
    <div id="controlsPopUp" class="controlsPopUp">
        <img class="horizontalParchment" src="../assets/WebImages/controllparchment-horizontal.png">
        <div class="mobileControlDescriptionContainer">
            <div class="descriptionAndButtonContainer">
                <div id="descriptionContainer" class="align-center-column">
                    <h1 class="parchmentTitle">Walking:</h2>
                    <div class="descriptionAndImageContainer">
                        <div class="descriptionContainer">
                            <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
                            <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
                            <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
                        </div>
                        <img class="mobileWalkExplain-Image" src="../assets/WebImages/mobileWalkExplain.png">
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


function renderSecondPageHorizontalMobileControls() {
    return /*html*/`
        <h1 class="parchmentTitle">Action:</h2>
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

function renderFirstPageHorizontalMobileControls() {
    return /*html*/`
        <h1 class="parchmentTitle">Walking:</h2>
        <div class="descriptionAndImageContainer">
            <div class="descriptionContainer">
                <p class="parchmentText"><span class="explainIntro">Walk right: </span><span class="explainAnswer">Tap bright frame</span></p>
                <p class="parchmentText"><span class="explainIntro">Walk left: </span><span class="explainAnswer">Tap dark frame</span></p>
                <p class="parchmentText"><span class="explainIntro">Run: </span><span class="explainAnswer">Double Tap</span></p>
            </div>
            <img class="mobileWalkExplain-Image" src="../assets/WebImages/mobileWalkExplain.png">
        </div>
        <div class="description-btn-flip-container" onclick="showSecondPageHorizontalMobileControls()">
            <a href="#" class="description-btn-flip" data-back="Page 2" data-front="Page 1"></a>
        </div>
`
}