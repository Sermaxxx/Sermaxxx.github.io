$(function(){

    $('.storage__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button class="storage__arrow-left"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="storage__arrow-right"><img src="images/arrow-right.png" alt=""></button>'
    })


  
});



const $burger = document.querySelector('.header__menu'),
      $headerInner = document.querySelector('.header__top-inner'),
      $wrapper = document.querySelector('.header__top-wrapper');


$burger.addEventListener('click', ()=> {
    $headerInner.classList.toggle('header__top-inner--menu');
    $wrapper.classList.toggle('animate__slideInDown');
})



const questions = document.querySelectorAll('.faq__question span'),
      questionsBlock = document.querySelectorAll('.faq__question'),
      close = document.querySelectorAll('.faq__question-close')


questions.forEach(question => {
    question.addEventListener('click', ()=> {
        for (let i = 0; i < questionsBlock.length; i++) {
            questionsBlock[i].classList.remove('faq__question--active');
        }
        
        question.parentElement.classList.toggle('faq__question--active');
    })
})

close.forEach(cls => {
    cls.addEventListener('click', function() {
        for (let i = 0; i < questionsBlock.length; i++) {
            questionsBlock[i].classList.remove('faq__question--active');
        }
    })
})