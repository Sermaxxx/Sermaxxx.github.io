const menuBtn = document.querySelector('.header__menu-btn'),
      menu = document.querySelector('.header__nav ul'),
      menuItem = document.querySelectorAll('.header__nav ul li'),
      closeMenu = document.querySelector('.close-menu'),
      body = document.querySelector('body'),
      opacityyy = document.querySelector('.opacityyy');

menuBtn.addEventListener('click', function () {
    menu.style.transform = 'translateX(0px)';
    menuBtn.style.display = 'none';
    opacityyy.style.display = 'block';
})

closeMenu.addEventListener('click', function () {
    hide();
})

menuItem.forEach(element => {
    element.addEventListener('click', function () {
        hide()
    })
});


function hide() {
    menu.style.transform = '  translateX(100%)';
    menuBtn.style.display = 'block';
    opacityyy.style.display = 'none';
}