const menu = document.getElementById('menu-icon');
const nav = document.getElementById('nav')

menu.addEventListener('click', () => {
    nav.classList.toggle("show-nav");
    console.log('clck')
})