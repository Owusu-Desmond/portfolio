let menu = document.querySelector(".Menu");
const navItems = document.querySelector('.navItems')
// When the menu is click
menu.addEventListener('click', (event) => {
    navItems.classList.toggle('nav-displayed')
});
