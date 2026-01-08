const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.primary-nav');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    nav.style.display = expanded ? 'none' : 'block'; // Toggle navigation visibility
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example usage
const emailInput = document.querySelector('#email'); // Assuming there's an input with id 'email'
emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
    }
});
