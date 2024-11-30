const elements = document.getElementsByClassName('fave-circle');

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

//---------------------------

// To account for click and make the descriptions accessible on mobile
// TODO once the animation is fixed then do a position fix on mobile
elementsArray.forEach((element) => {
    element.addEventListener('touchstart', (event) => {
        const isHighlighted = element.classList.contains('highlight');
        elementsArray.forEach((el) => el.classList.remove('highlight'));
        if (!isHighlighted) {
            element.classList.add('highlight');
        }
    });
});  