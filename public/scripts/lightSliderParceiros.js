$(document).ready(function () {
    $("#lightSliderParceiros").lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 4, // slidemove will be 1 if loop is true
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
        prevHtml: '<i class="fas fa-chevron-left"  style="font-size: 2.5rem; color: #3EC6FF;" ></i>',
        nextHtml: '<i class="fas fa-chevron-right" style="font-size: 2.5rem; color: #3EC6FF;"></i>',


        rtl: false,
        adaptiveHeight: false,


        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    item: 3,
                    autoWidth: false,
                    slideMove: 3, // slidemove will be 1 if loop is true
                    slideMargin: 30,

                }
            },
            {
                breakpoint: 1000,
                settings: {
                    item: 2,
                    autoWidth: false,
                    slideMove: 2,
                    slideMargin: 30,
                }
            },

            {
                breakpoint: 650,
                settings: {
                    item: 1,
                    autoWidth: false,
                    slideMove: 1,
                    slideMargin: 0,
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