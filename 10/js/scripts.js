let navMainHeader = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.main-header__toggle');

navMainHeader.classList.remove('main-header__wrapper--nojs');


navToggle.addEventListener('click', function () {
  if (navMainHeader.classList.contains('main-header__wrapper--closed')) {
    navMainHeader.classList.remove('main-header__wrapper--closed');
    navMainHeader.classList.add('main-header__wrapper--opened');
  } else {
    navMainHeader.classList.add('main-header__wrapper--closed');
    navMainHeader.classList.remove('main-header__wrapper--opened');
  }
});

console.log ("hello")
