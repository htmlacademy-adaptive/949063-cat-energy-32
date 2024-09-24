/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger');
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.classList.remove('main-navigation--nojs');

burger.addEventListener('click', () => {
  if (burger.classList.contains('burger--closed')) {
    burger.classList.remove('burger--closed');
    burger.classList.add('burger--opened');
    mainNavigation.style.display = 'block';
  } else {
    burger.classList.remove('burger--opened');
    burger.classList.add('burger--closed');
    mainNavigation.style.display = 'none';
  }
});
