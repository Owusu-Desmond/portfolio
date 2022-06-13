const mobileMenu = document.querySelector(".Menu");
const navItems = document.querySelector('.navItems');
const closeBtn = document.querySelector('.close-btn')
// When the menu is click
mobileMenu.addEventListener('click', (event) => {
    navItems.classList.toggle('nav-displayed');
});
// close nav links when the close button is click
closeBtn.addEventListener('click', (event) => {
    navItems.classList.toggle('nav-displayed');
});