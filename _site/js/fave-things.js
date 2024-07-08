const elements = document.getElementsByClassName('circle');

// Convert HTMLCollection to array for easier manipulation
const elementsArray = Array.from(elements);

// Function to add 'hovered' class to all elements in elementsArray
function addHoverClass() {
    elementsArray.forEach(function(element) {
        element.classList.add('hovered');
    });
}

// Function to remove 'hovered' class from all elements in elementsArray
function removeHoverClass() {
    elementsArray.forEach(function(element) {
        element.classList.remove('hovered');
    });
}

// Adding event listeners to each element in elementsArray
elementsArray.forEach(function(element) {
    // Adding event listener for hover
    element.addEventListener('mouseover', addHoverClass);

    // Adding event listener for mouseout
    element.addEventListener('mouseout', removeHoverClass);
});