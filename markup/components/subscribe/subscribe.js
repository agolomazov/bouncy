$(document).ready(function () {
    var $windowSize = $(this).outerWidth();
    if ($windowSize <= 600) {
        $('.form-subscribe').equalize({
            target: '.form-element',
            property: 'height'
        });
    }
    $( window ).on('resize', function ( e ) {
        var windowSize = $(document).outerWidth();
        if (windowSize <= 600) {
            $('.form-subscribe').equalize({
                target: '.form-element',
                property: 'height'
            });
        } else {
            $('.form-subscribe').equalize('destroy');
        }
    });
});
