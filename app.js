const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const nav = document.getElementById('nav');
const overlay = document.querySelector('.overlay');

const openNav = () => {
    nav.classList.add('show-nav');
    overlay.classList.add('show-overlay');
};

const closeNav = () => {
    nav.classList.remove('show-nav');
    overlay.classList.remove('show-overlay');
};

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);