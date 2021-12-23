if(document.querySelector('.working_us__grid')){

    let cardSlider_ = new Swiper('.working_us__grid', {
        slidesPerView: 1,
        spaceBetween: 35,
        speed: 800,

        breakpoints: {
            // when window width is >= 320px

            320: {
                slidesPerView: 1.5,
            },

            767: {
                slidesPerView: 3.2,
            },

            1200: {
                slidesPerView: 5,
            },
        },
    });

}



