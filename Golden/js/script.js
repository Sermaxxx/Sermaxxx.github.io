var link = $('.nav-item a');
link.on('click', function (e) {
   e.preventDefault();
   link.removeClass('active');
   $(this).addClass('active');
   var x = $(this).attr('href');
   var y = $(x).offset().top
   $('html').animate ({
      scrollTop: y
   }, 1000)
})

$(window).scroll(function () {
   console.log($(this).scrollTop());
   if ($(this).scrollTop() < 500) {
       $("#top").fadeOut();        
   } else {
       $("#top").fadeIn();
   }
})
$("#top").click(function () {
   $("html").animate({
       scrollTop: 0
   }, 500);
})