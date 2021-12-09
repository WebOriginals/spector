if (document.querySelector('.insta__slider')) {
    let sliderTop = new Swiper(".insta__slider", {
        init: false,
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 800,
        loop: true,

        breakpoints: {
            // when window width is >= 320px

            767: {
                slidesPerView: 4.3,
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },

            1350: {
                slidesPerView: 5.5,
                spaceBetween: 30
            },

            1650: {
                slidesPerView: 6.3,
                spaceBetween: 30
            },

            2500: {
                slidesPerView: 8.5,
                spaceBetween: 30
            },

            3500: {
                slidesPerView: 12.5,
                spaceBetween: 30
            },
        }
    });
    sliderTop.init();
}
