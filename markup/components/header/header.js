/* eslint-disable */
$('.nav-toggle').click(function (e) {
    $('.nav-menu').slideToggle(500);
});

debounce(function(){
    $(window).resize(function(){
        if($(window).width() > 720){
            $('.nav-menu').removeAttr('style');
        }
    });
}, 200);
/* eslint-enable */
