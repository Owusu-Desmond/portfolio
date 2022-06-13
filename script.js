const hamburger = document.querySelector(".Menu");
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn')
// When the menu is click
hamburger.addEventListener('click', (event) => {
    mobileMenu.classList.add('visible');
    // disable scroll when mobile menu appear
    document.body.style.overflow = 'hidden';
});
// close nav links when the close button is click
closeBtn.addEventListener('click', (event) => {
    mobileMenu.classList.remove('visible');
    // enable scroll when mobile menu appear
    document.body.style.overflow = 'scroll';
});
mobileMenu.addEventListener('click', (event) => {
    if(event.target.classList.contains("link")){
        // hide moblile menu    
        mobileMenu.classList.remove('visible');
        // enable scroll when mobile menu appear
        document.body.style.overflow = 'scroll';
    }
})