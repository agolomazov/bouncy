var progressBar = (function () {
    var init = function (selector) {
        let val = $(selector).data('value');
        let bar = $(selector).find('.team-member__stats-line');
        $(bar).animate({
            width: val,
        }, 500);
    };
    return {
        init
    };
})();
// progressBar.init();
$('.team-member__stats').each(function () {
    progressBar.init(this);
});
