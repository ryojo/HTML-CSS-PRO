$(function(){

    //abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e){
    e.preventDefault(); //prevenir ao clicar e não vai direcionar nada!
    $('.nav').toggleClass('active');
    });

});  