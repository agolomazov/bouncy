$(document).ready(function () {
    var portfolioContainer = $('#portfolio-items');
    portfolioContainer.mixItUp({
        selectors: {
            target: '.portfolio-item',
            filter: '.filter'
        },
        layout: {
            display: 'flex',
            containerClass: '',
            containerClassFail: 'fail'
        },
        animation: {
            enable: true,
            effects: 'fade stagger(50ms)',
            duration: 600,
            easing: 'ease'
        },
        callbacks: {
            onMixLoad: function (state) {
                $('.filter-all').addClass('active-control');
                portfolioContainer.masonry({
                    itemSelector: '.portfolio-item',
                    gutter: 20
                });
                portfolioContainer.masonry('reloadItems');
            },
            onMixEnd: function (state) {
                portfolioContainer.masonry({
                    itemSelector: '.portfolio-item',
                    gutter: 20
                });
                portfolioContainer.masonry('reloadItems');
            }
        }
    });
    var filters = $('.filter');
    filters.on('click', function (e) {
        $('.filter, .filter-all').removeClass('active-control');
        $(this).addClass('active-control');
    });
});
