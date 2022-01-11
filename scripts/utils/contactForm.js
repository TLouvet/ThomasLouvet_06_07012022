/**
 * Opens a dialog modal and captures focus
 */
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const focusableElements = getContactFocusableElements();
    focusableElements[1].focus();
    listenForTab(focusableElements);   
    listenForConfirmation();
}

/**
 * Event listener for Form confirmation
 * Just prints values in the console
 */
function listenForConfirmation(){
    document.getElementById("modal-send-formData")
    .addEventListener('click', (e) => {
        const informations ={
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            message: document.getElementById('message').value,
        }
        console.log(informations);
        closeModal();
    })
}   


/**
 * Get focusable elements of the modal in order to trap focus
 * @returns
 */
function getContactFocusableElements(){
    let focusableElementsArray = [];
    focusableElementsArray.push(document.getElementById("modal-close-btn"));
    focusableElementsArray.push(document.getElementById("firstName"));
    focusableElementsArray.push(document.getElementById("lastName"));
    focusableElementsArray.push(document.getElementById("email"));
    focusableElementsArray.push(document.getElementById('message'));
    focusableElementsArray.push(document.getElementById("modal-send-formData"));
    return focusableElementsArray;
}

/**
 * Closes modal and gives back focus to the main page, on the next element
 */
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.getElementById("tri").focus();
}
