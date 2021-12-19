if(document.querySelectorAll('.three').length > 0){
    document.querySelectorAll('.three').forEach((el) => {

        let threeSlider_ = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 800,

            breakpoints: {
                // when window width is >= 320px

                320: {
                    slidesPerView: 1.2,
                },

                767: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                },

            },
        });
    })
}



