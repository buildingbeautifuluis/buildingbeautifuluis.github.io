var menuButton = document.querySelector('.menu__toggle');
var body = document.querySelector('body');
menuButton.addEventListener('click', function toggleMenu(){
    menuButton.classList.toggle('toggle--active');
    body.classList.toggle('mobile__menu--active');
});