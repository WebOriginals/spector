 if (document.querySelector('.cardGood-img__slider')) {
    let cardGood_ = new Swiper(".cardGood-img__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        pagination: {
            el: ".cardGood-img__pagination",
            clickable: true,
        },
    });

 }
 $('.cardGood-img__pagination .swiper-pagination-bullet').hover(function() {
     $( this ).trigger( "click" );
 });
