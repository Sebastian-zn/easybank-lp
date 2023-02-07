const btnHamburger = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', (e) => {
  e.preventDefault();
  header.classList.toggle('open');
  if (header.classList.contains('open')) {
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  } else {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
});