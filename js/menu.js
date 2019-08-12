var menuButton = document.querySelector('.menu__toggle');
var body = document.querySelector('body');
menuButton.addEventListener('click', function toggleMenu(){
    menuButton.classList.toggle('toggle--active');
    body.classList.toggle('mobile__menu--active');
});

const navItems = document.querySelectorAll('.navigation__links > li');

// On click

navItems.forEach ( element => {
  element.addEventListener('mouseout', function(){
    element.classList.remove('submenu--active');
  });
});


window.addEventListener('click', function(e){

  navItems.forEach(element => {
    if (element.contains(e.target)){
      element.classList.toggle('submenu--active');
    }
    else {
      element.classList.remove('submenu--active');
    }
  });
});