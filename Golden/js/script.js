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