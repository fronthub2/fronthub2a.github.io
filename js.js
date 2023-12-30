//кнопка адаптива
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__menu-bottom');
const displayAct = document.querySelector('header__menu-bottom')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu-bottom--active');
})



