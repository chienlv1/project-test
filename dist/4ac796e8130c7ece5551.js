let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.visibility != 'visible') {
        nav.style.visibility = 'visible';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.visibility = 'hidden';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});