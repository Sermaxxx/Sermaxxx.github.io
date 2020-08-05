$(function(){
    $('.quotes__slides').slick({
        prevArrow: '<button class="arrow-prev"> <img src="images/arrow-prev.svg"> </button>',
        nextArrow: '<button class="arrow-next"> <img src="images/arrow-next.svg"> </button>',
    });
});


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
})

