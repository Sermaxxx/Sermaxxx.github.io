$(document).ready(function () {
    $('.ask').on('click', function () {
       var answer = $(this).parent().find('.answer');
       $('.answer').not(answer).slideUp();
       answer.slideToggle(600)
       name();
                      
       
    }) 
})