if (document.querySelector('.sliderTop__container')) {
    let sliderTop = new Swiper(".sliderTop__container", {
        init: false,
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 800,

        breakpoints: {
            // when window width is >= 320px

            767: {
                slidesPerView: 4.3,
                spaceBetween: 30
            },

            1350: {
                slidesPerView: 5.5,
                spaceBetween: 30
            },

            1650: {
                slidesPerView: 8,
                spaceBetween: 30
            },

            2500: {
                slidesPerView: 10,
                spaceBetween: 30
            },

            3500: {
                slidesPerView: 14,
                spaceBetween: 30
            },
        }
    });
    sliderTop.init();
}
