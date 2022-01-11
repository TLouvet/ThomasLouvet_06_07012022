// Keeps track of which media has been displayed last
let currentLightboxMedia = 0;
// Global list used in multiple functions keeping track of available medias on the current page
let displayableMedia = null;
//Toggle keyboard arrow navigation in the lightbox 
let isLightBoxOpen = false;

/**
 * Opens a dialog modal and captures focus
 */
function displayLightbox(link) {    
    // Get media to display
    displayableMedia = getDisplayableMedia();
    const lightbox = document.getElementById("lightbox_modal");
	lightbox.style.display = "block";
    isLightBoxOpen = true;
    // setFocus && navigation
    const focusableElements = getLightboxFocusableElements();
    focusableElements[0].focus();
    listenForTab(focusableElements);
    
    //Find image in nodelist and display
    const displayableMediaArray = Array.from(displayableMedia);
    //if video stop it from playing in small view mode
    currentLightboxMedia = displayableMediaArray.findIndex( media => link == media.getAttribute('src'));
    displayCurrentMedia(currentLightboxMedia);
}

/**
 * List all medias of the current page
 * @returns 
 */
function getDisplayableMedia(){
    return document.querySelectorAll(".clickable-photo")
}

/**
 * Get focusable elements of the modal in order to trap focus
 * @returns list of elements in descending order
 */
function getLightboxFocusableElements(){
    let focusableElementsArray = [];
    focusableElementsArray.push(document.getElementById("lightbox-prev"));
    focusableElementsArray.push(document.getElementById("lightbox-next"));
    focusableElementsArray.push(document.getElementById("lightbox-close"));

    return focusableElementsArray;
}

/**
 * Select next or previous media in the lightbox
 * @param {number} number 
 */
function changeDisplayedMedia(number){
    if (number == 1){
        currentLightboxMedia += 1; 
        if (currentLightboxMedia == displayableMedia.length){
            currentLightboxMedia = 0;
        }
    }
    else {
        currentLightboxMedia -= 1;
        if (currentLightboxMedia == -1){
            currentLightboxMedia = displayableMedia.length -1;
        }
    }
   displayCurrentMedia(currentLightboxMedia);
}

/**
 * Display selected media in the lightbox
 * @param {number} index 
 */
 function displayCurrentMedia(index){
    const centralPart = document.getElementsByClassName("central-part")[0];
    centralPart.innerHTML= "";
    const newImage= getNewMediaToDisplay(index);
    centralPart.innerHTML = newImage.tag;
    centralPart.innerHTML+= `<p>${newImage.title}</p>`;
 }

/**
 * 
 * @param {number} index 
 * @returns - object containing HTML code + media title
 */
function getNewMediaToDisplay(index){
    const displayableMediaArray = Array.from(displayableMedia);
    const newMediaSrc = displayableMediaArray[index].getAttribute('src');
    if(displayableMediaArray[index].tagName == "IMG"){
        const newMediaTitle = displayableMediaArray[index].getAttribute('alt');
        return {
            tag: `<img src=${newMediaSrc} alt=${newMediaTitle} class="lightbox-img" />`,
            title: newMediaTitle
        }    
    }
    else {
        const newMediaTitle = displayableMediaArray[index].getAttribute('aria-label');
        return {
            tag:` 
            <video controls class="lightbox-img" autoplay>
                <source src=${newMediaSrc} type="video/mp4" />
            </video>`,
            title: newMediaTitle
        }
    }
}

/**
 * Event listener when focus is traped
 * left and right to switch to next media
 */
function getLightboxKeyboardNav() {   
    document.addEventListener('keydown', (e) => {
        if (isLightBoxOpen && e.key === "ArrowLeft"){ 
            changeDisplayedMedia(-1);
        }
        else if (isLightBoxOpen && e.key === "ArrowRight"){
            changeDisplayedMedia(1);
        }
    })
}


/**
 * Closes lighbox and gives back focus to sortBy button, before all of the medias
 */
function closeLightbox(){
    document.getElementsByClassName("central-part")[0].innerHTML= "";
    const lightbox = document.getElementById("lightbox_modal");
	lightbox.style.display = "none";
    isLightBoxOpen = false;
    document.getElementById("tri").focus();
}

getLightboxKeyboardNav();
