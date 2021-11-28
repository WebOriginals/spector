if (document.querySelector('.card-top-sliderMain')) {
    let card = new Swiper(".card-top-sliderThumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let card2 = new Swiper(".card-top-sliderMain", {
        spaceBetween: 10,
        pagination: {
            el: ".card-top-sliderMain__pagination",
            clickable: true,
        },
        thumbs: {
            swiper: card,
        },
    });
}