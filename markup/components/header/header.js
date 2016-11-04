/* eslint-disable */
$('.nav-toggle').click(function (e) {
    $('.nav-menu').slideToggle(500);
});

$(window).resize(function(){
    if($(window).width() > 720){
        $('.nav-menu').removeAttr('style');
    }
});

$('.sloga__title-text').typed({
    strings: [
        'Hello, everyone!',
        'We are code cafe',
        'We the best code cafe in internet! ;)'
    ],
    startDelay: 500,
    stringsElement: null,
    showCursor: true,
    typeSpeed: 50,
    contentType: 'text',
    backDelay: 3000
});

new WOW().init({
    offset: 0
});
/* eslint-enable */
