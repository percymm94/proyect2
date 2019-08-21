const buttonMenu = document.body.querySelector('.js_menu');
const body = document.body;

buttonMenu.addEventListener('click', function () {
    body.classList.toggle('show-menu');
})