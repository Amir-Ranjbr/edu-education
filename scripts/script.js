'use strict';

const iconMenu = document.getElementById('icon-menu');
const menu = document.querySelector('.nav__bar');

iconMenu.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnClick);
document.addEventListener('keydown', closeMenuOnEsc);

function toggleMenu() {
  menu.classList.toggle('open');
  iconMenu.classList.toggle('fa-bars');
  iconMenu.classList.toggle('fa-times');
}

function closeMenuOnClick(event) {
  if (!iconMenu.contains(event.target) && menu.classList.contains('open')) {
    toggleMenu();
  }
}

function closeMenuOnEsc(event) {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    toggleMenu();
  }
}
