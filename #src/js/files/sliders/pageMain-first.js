if (document.querySelector('.main-first__slider')) {
    let first = new Swiper(".main-first__slider", {
        spaceBetween: 10,
        speed: 800,
        loop:true,
        pagination: {
            el: ".main-first__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            },
        },
    });
}