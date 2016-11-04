/* eslint-disable */
$('.nav-toggle').click(function (e) {
    $('.nav-menu').slideToggle(500);
});

$(window).resize(function(){
    if($(window).width() > 720){
        $('.nav-menu').removeAttr('style');
    }
});
/* eslint-enable */
