if (document.querySelector('.card-top-sliderMain')) {
    let card = new Swiper(".card-top-sliderThumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        speed: 800,
    });
    let card2 = new Swiper(".card-top-sliderMain", {
        spaceBetween: 10,
        speed: 800,
        pagination: {
            el: ".card-top-sliderMain__pagination",
            clickable: true,
        },
        thumbs: {
            swiper: card,
        },
    });
}