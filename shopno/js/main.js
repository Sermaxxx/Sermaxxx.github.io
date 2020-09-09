$(function () {

    $('.about__slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });


    $('.say__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        fade: true,
        nextArrow: '<button class="say__arrow say__arrow-right"><img src="images/slide-right.png" alt=""></button>',
        prevArrow: '<button class="say__arrow say__arrow-left"><img src="images/slide-left.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    
                }
            }
        ]
    });
});

$(function () {
    $('.say__slide-rate').rateYo({
        precision: 2,
    });
});



const $services_link = document.querySelectorAll('.services__item-link');
const $services__close = document.querySelectorAll('.services__item-close');

$services_link.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.add('services__item--active');
    })
})

$services__close.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.remove('services__item--active');
    })
})
