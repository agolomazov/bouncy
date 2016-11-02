var servicesTabs = (() => {
    const params = {
        container: '',
        tabClass: ''
    };

    let hideAll = (selector) => {
        $(selector).hide();
    };

    let switchTab = (selector) => {
        hideAll(params.tabClass);
        $('#' + selector).show();
    };

    let init = (selector, options) => {
        params.container = $(selector);
        params.tabClass = options.tabClass;
        params.activeClass = options.activeClass;
        $('.our-services__tabs-link').on('click', function (event) {
            event.preventDefault();
            switchTab($(this).data('target'));
        });
    };





    return {
        init
    };
})();

servicesTabs.init('services-tabs', {tabClass: '.our-services__service', activeClass: 'service-active'});
