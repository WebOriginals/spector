if(document.querySelectorAll('.card-slider__slider').length > 0){
    document.querySelectorAll('.card-slider__slider').forEach((el) => {
        let body = el.parentElement.parentElement;
        let prev = body.querySelector('.card-slider-top__prevBtn');
        let next = body.querySelector('.card-slider-top__nextBtn');
        let cardSlider_ = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 5,
            speed: 800,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                // when window width is >= 320px

                320: {
                    slidesPerView: 1.5,
                },

                767: {
                    slidesPerView: 3.2,
                },

                1200: {
                    slidesPerView: 4,
                },
            },
        });
    })
}



