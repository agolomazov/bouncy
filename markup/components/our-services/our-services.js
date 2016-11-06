var tabsController = (() => {
    let props = {
        container: '',
        height: 0
    };

    let calculateHeight = () => {
        props.container.find('.tab').each(function () {
            $(this).css('display', 'block');
            console.log($(this).height());
            if (props.height < props.container.height()) {
                props.height = props.container.height();
            }
            $(this).css('display', 'none');
        });
        props.container.find('.tab').each(function () {
            $(this).css('display', '');
        });
        console.log(props.height);
        return props.height;
    };

    let switchTabs = (target) => {
        let el = props.container.find('.tab-active');
        // el.css('opacity', '0');
        el.animate({
            opacity: 0
        }, 200, function () {
            el.removeClass('tab-active');
            target.addClass('tab-active');
            target.animate({
                opacity: 1
            }, 200);
        });
    };

    let clearActiveLinks = () => {
        props.container.find('.link-active').removeClass('link-active');
    };

    let processClick = function (e) {
        let el = $(this);
        let targetId = el.data('target');
        let target = $('#' + targetId);

        e.preventDefault();
        clearActiveLinks();

        el.addClass('link-active');
        switchTabs(target);
    };

    let init = (selector) => {
        props.container = $(selector);
        // props.container.css('min-height', calculateHeight() + 'px');
        $('.tab').each(function () {
            $(this).css('opacity', '0');
        });
        $('.tab-active').css('opacity', '1');
        $('.tab-link').on('click', processClick);
    };

    return {
        init
    };
})();

tabsController.init('#services-tabs');


$('#service1').roundSlider({
    radius: 60,
    width: 4,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 85,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal1'
});
function skillVal1(args) {
    return args.value;
}

$('#service2').roundSlider({
    radius: 60,
    width: 4,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 75,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal2'
});
function skillVal2(args) {
    return args.value;
}

$('#service3').roundSlider({
    radius: 60,
    width: 4,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 85,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal3'
});
function skillVal3(args) {
    return args.value;
}

$('.rs-tooltip-text').counterUp();
