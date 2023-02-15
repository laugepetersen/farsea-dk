const burgerMenu = document.querySelector('nav .menu-icon');
const menu = document.querySelector('#burger-menu');
const closeIcon = menu.querySelector('.close-btn');

burgerMenu.addEventListener('click', function() {
  document.body.classList.add('no-scroll');
  menu.classList.add('open');
});

closeIcon.addEventListener('click', function() {
  document.body.classList.remove('no-scroll');
  menu.classList.remove('open');
});