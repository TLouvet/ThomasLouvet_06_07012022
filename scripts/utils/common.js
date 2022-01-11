/**
 * Event listener when focus is traped
 * @param {HTMLElement[]} focusElements  - array of HTML elements
 */
 function listenForTab(focusElements){
    const firstFocusableElement = focusElements[0];
    const lastFocusableElement = focusElements[focusElements.length-1];
    document.addEventListener('keydown', (e) => {
        if (e.key === "Tab"){
            
            if (e.shiftKey && document.activeElement == firstFocusableElement){
                lastFocusableElement.focus();
                e.preventDefault();
            }
            
            if (document.activeElement == lastFocusableElement){ 
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }

    })
}
