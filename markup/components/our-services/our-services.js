var servicesTabs = (() => {
    let container;

    let init = (selector) => {
        console.log('init of servicesTabs'); // TODO: remove on prod
        container = document.getElementById(selector);
        console.log(container);
    };

    return {
        init
    };
})();

servicesTabs.init('.our-services__tabs');
