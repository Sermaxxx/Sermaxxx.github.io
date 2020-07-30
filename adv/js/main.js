$(function(){
    $('.reviews__content-slider').slick({
        slidesToShow: 3,
        prevArrow: '<button class="arrow-left"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="arrow-right"><img src="images/arrow-right.png" alt=""></button>',
    });

});


new WOW().init();



let compare = document.querySelector("#compare");
let tariff = document.querySelector("#tariff");
let tariffItems = document.querySelectorAll('.tariff__items');
let tariffItem = document.querySelectorAll('.tariff__item');
let tariffInfoItem = document.querySelectorAll('.tariff__info-item');
let tariffItemTitle = document.querySelectorAll('.tariff__item-title');


compare.addEventListener('click' , comp);
tariff.addEventListener('click' , trf);

function comp() {
    tariff.classList.remove('tariff__type-item--active');
    compare.classList.add('tariff__type-item--active');
    tariffItems.forEach(e  => {
        e.classList.add('compare__items');
    })
    tariffItem.forEach(e  => {
        e.classList.add('compare__item');
    })
    tariffInfoItem.forEach(e  => {
        e.classList.add('compare__info-item');
    })
    tariffItemTitle.forEach(e  => {
        e.classList.add('compare__item-title');
    })
}

function trf() {
    compare.classList.remove('tariff__type-item--active');
    tariff.classList.add('tariff__type-item--active');
    tariffItems.forEach(e  => {
        e.classList.remove('compare__items');
    })
    tariffItem.forEach(e  => {
        e.classList.remove('compare__item');
    })
    tariffInfoItem.forEach(e  => {
        e.classList.remove('compare__info-item');
    })
    tariffItemTitle.forEach(e  => {
        e.classList.remove('compare__item-title');
    })
}



let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('.reviews__content-slider');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab=> {
            tab.classList.remove('reviews__menu-item--active')
        })
        tab.classList.add('reviews__menu-item--active');
        target.classList.add('active');
    });
});


let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let btn = document.querySelector('.header__callme');


btn.addEventListener('click', () => {
    modal.style.display = 'block';
});