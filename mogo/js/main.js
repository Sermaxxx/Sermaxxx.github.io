$(function(){
    $('.quotes__slides').slick({
        prevArrow: '<button class="arrow-prev"> <img src="images/arrow-prev.svg"> </button>',
        nextArrow: '<button class="arrow-next"> <img src="images/arrow-next.svg"> </button>',
    });
});

// Accordion

let acordions = document.querySelectorAll('.do__accordion');
let texts = document.querySelectorAll('.do__text');


acordions.forEach(acordion => {
    acordion.addEventListener('click', function () {
        let text = this.nextElementSibling;
        texts.forEach(txt => {
            txt.classList.remove('do__text--active');
        });
        acordions.forEach(a => {
            a.classList.remove('do__accordion--active');
        })
        text.classList.add('do__text--active');
        acordion.classList.add('do__accordion--active');
    });
});

// Nav Menu

let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
let close = document.querySelector('.header__close');
let menuItems = document.querySelectorAll('.header__nav-item');


burger.addEventListener('click', ()=> {
    nav.classList.add('header__nav--active');
})

close.addEventListener('click', ()=> {
    nav.classList.remove('header__nav--active');
})

menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        nav.classList.remove('header__nav--active');
    })
});
