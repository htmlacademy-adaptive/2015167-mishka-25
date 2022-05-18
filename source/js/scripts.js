let navMainHeader = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.main-header__toggle');
let modalWindow = document.querySelector('.modal-container')
let openModal = document.querySelector('.user-list__link')
let modal = document.querySelector('.modal')

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

openModal.addEventListener('click', function () {
  if (modalWindow.classList.contains('modal-container--closed')) {
    modalWindow.classList.remove('modal-container--closed');
  } else {
    modalWindow.classList.add('modal-container--closed');
  }
});

modalWindow.addEventListener('click', function () {
    modalWindow.classList.add('modal-container--closed');
});
