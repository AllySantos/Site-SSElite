$(document).ready(function () {
    $("#lightSliderParceiros").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 2, // slidemove will be 1 if loop is true
        slideMargin: 0,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,


        rtl: false,
        adaptiveHeight: false,


        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    });
});