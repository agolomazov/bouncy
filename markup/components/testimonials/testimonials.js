$(document).ready(function () {
    var $sliderSlick = $('.testimonials__list');
    var $destroyed = true;
    var $documentSize = $(document).innerWidth();
    var $sliderOptions = {
        arrows: false,
        dots: true,
        dotsClass: 'testimonials__dots',
        infinite: true
    };
    if ($documentSize > 600) {
        $sliderSlick.slick($sliderOptions);
        $sliderSlick.slick('init', function () {
            $(this).equalize({
                target: '.testimonials__list-item',
                property: 'height'
            });
        });
        $destroyed = !$destroyed;
    }
    $(window).on('resize', function (e) {
        var documentSize = $(document).innerWidth();
        if (documentSize < 600 && !$destroyed) {
            $sliderSlick.slick('unslick');
            $destroyed = !$destroyed;
        } else if (documentSize >= 600 && $destroyed) {
            $sliderSlick.slick($sliderOptions);
            $destroyed = !$destroyed;
        }
    });
});
