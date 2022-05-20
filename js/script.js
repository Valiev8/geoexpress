// СКРИПТ МЕНЮ БУРГЕР

let header__burger = document.querySelector('.header_burger');
let menu = document.querySelector('.menu ul');
let back = document.querySelector('body');
let nav__list = document.querySelector('.nav-list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
    back.classList.toggle('lock');
}

nav__list.onclick = function () {
    nav__list.classList.remove('active');
    back.classList.toggle('lock');
}



