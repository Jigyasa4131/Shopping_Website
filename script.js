// Get the element with ID 'bar' (usually the hamburger icon for opening the navbar)
const bar = document.getElementById('bar');

// Get the element with ID 'close' (usually the 'X' icon for closing the navbar)
const close = document.getElementById('close');

// Get the element with ID 'navbar' (the actual navigation menu container)
const nav = document.getElementById('navbar');

// Check if the 'bar' element exists (to avoid errors if it isn't found)
if(bar) {
    // When 'bar' is clicked, add the 'active' class to the navbar
    // This will make the navbar visible (if styled correctly with CSS)
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Check if the 'close' element exists
if(close) {
    // When 'close' is clicked, remove the 'active' class from the navbar
    // This will hide the navbar
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}