const btnHamburger = document.querySelector('#btnMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', (e) => {
  e.preventDefault();
  header.classList.toggle('open');
  if (header.classList.contains('open')) {
    body.classList.add('noscroll');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  } else {
    body.classList.remove('noscroll');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
});