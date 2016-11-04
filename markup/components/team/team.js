var progressBar = (function () {
    return {
        init: function (selector, speed) {
            let val = $(selector).data('value');
            let bar = $(selector).find('.team-member__stats-line');
            $(bar).animate({
                width: val,
            }, speed);
        }
    };
})();

$(document).ready(function () {
    $('.team-member__stats').each(function () {
        progressBar.init(this, 3000);
    });
});


$(document).ready(function () {
    let slider = $('.team-slider__list');
    let options = {
        dots: true,
        dotsClass: 'team-slider__dots',
        infinite: true
    };
    let documentSize = $(document).innerWidth();
    let destroyed = true;
    if (documentSize > 650) {
        slider.slick(options);
        slider.slick('init', function () {
            $(this).equalize({
                target: '.team-slider__item',
                property: 'height'
            });
        });
        destroyed = !destroyed;
    }
    $(window).on('resize', function () {
        let docSize = $(document).innerWidth();
        if (docSize < 650 && !destroyed) {
            slider.slick('unslick');
            destroyed = !destroyed;
        } else if (docSize >= 650 && destroyed) {
            slider.slick(options);
            destroyed = !destroyed;
        }
    });
});
