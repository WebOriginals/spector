if (window.screen.width < 767) {
    if (document.querySelector('.video-other__slider')) {
        let cardOther_ = new Swiper('.video-other__slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 800,
            loop:true,

            breakpoints: {
                // when window width is >= 320px

                320: {
                    slidesPerView: 1.2,
                },

                767: {
                    slidesPerView: 3.2,
                },

                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }
}