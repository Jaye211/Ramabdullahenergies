const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});