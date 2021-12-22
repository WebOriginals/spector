if (document.querySelector('.main-project__slider')) {
    let sliderTop = new Swiper(".main-project__slider", {
        init: false,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 2.3,
                spaceBetween: 30
            },


            2500: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },

            3500: {
                slidesPerView: 4.5,
                spaceBetween: 30
            },
        }
    });
    sliderTop.init();
}
