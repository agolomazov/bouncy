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
// progressBar.init();
$('.team-member__stats').each(function () {
    progressBar.init(this, 3000);
});
