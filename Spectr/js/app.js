var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }, any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let unlock = true;
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// menu ==================================
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    let liSecondLevel = document.querySelectorAll('.menuSecondLevel__li');
    let liOneLevel = document.querySelectorAll('.menu__list > li');
    let logo = document.querySelector('.header__logo');


    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {

                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const subMenuTitle = document.querySelector('.menu__sub-link-title');
const body = document.querySelector('.menu__sub-list');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        body.parentNode.classList.remove('_active');
    });
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// menu ==================================



subMenuTitle.addEventListener('click', (event) => {
    body.parentNode.classList.remove('_active');
})
//BodyLock ======================
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}

function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//BodyLock ======================
//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
        selects_init();

}
let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height +'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideToggle = (target, duration = 500, event) => {
    if (!target.classList.contains('_slide')) {
        if(event.target.closest('.serch-option'))
            return;
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration, event);
        }
    }
}
function selects_init() {
    for (let index = 0; index < selects.length; index++) {
        const select = selects[index];

        if(!select.hasAttribute('multiple')){
            select_init(select);
        }
    }
    //select_callback();
    document.addEventListener('click', function (e) {
        selects_close(e);
        
    });
    document.addEventListener('keydown', function (e) {
        if (e.which == 27) {
            selects_close(e);
        }
    });
}

function selects_close(e) {
    const selects = document.querySelectorAll('.select');
    if (!e.target.closest('.select')) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            select.classList.remove('_active');
            _slideUp(select_body_options, 100);
        }
    }
}

function select_init(select) {

    const select_parent = select.parentElement;
    const select_modifikator = select.getAttribute('name');
    const select_selected_option = select.querySelector('option:checked');
    select.setAttribute('data-default', select_selected_option.value);

    select.style.display = 'none';

    let select_block = 'select_' + select_modifikator;
    if( !select_parent.classList.contains(select_block)){
        select_parent.insertAdjacentHTML('beforeend', '<div class="select ' + select_block + '"></div>');
        let new_select = select.parentElement.querySelector('.select.' + select_block);
        new_select.appendChild(select);
    }

    select_item(select);
}
function hasClassedParent(el, cssClass) {
    if(el.parentNode && el.parentNode.tagName !== 'BODY') {
      if(el.parentNode.classList.contains(cssClass)) {
        return el.parentNode;
      } else {
        return hasClassedParent(el.parentNode, cssClass);
      }
    } else {
      return null;
    }
  }
function select_item(select) {
    const select_parent = select.parentElement;
    const select_items = select_parent.querySelector('.select__item');
    const select_options = select.querySelectorAll('option');
    const select_selected_option = select.querySelector('option:checked');
    const select_selected_text = select_selected_option.text;
    const select_type = select.getAttribute('data-type');

    if (select_items) {
        select_items.remove();
    }

    let select_type_content = '';
    if (select_type == 'input') {
        select_type_content = '<div class="select__value"><input autocomplete="off"  type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
    } else {
        select_type_content = '<div class="select__value"><span>' + select_selected_text + '</span></div>';
    }
    select_parent.insertAdjacentHTML('beforeend',
        '<div class="select__item">' +
        '<div class="select__title">' + select_type_content + '</div>' +

        '<div class="select__options">' + select_get_options(select_options) + '</div>' +
        '</></div>');

    select_actions(select, select_parent);
}

function select_actions(original, select) {
    const select_item = select.querySelector('.select__item');
    const select_body_options = select.querySelector('.select__options');
    const select_options = select.querySelectorAll('.select__option');
    const select_type = original.getAttribute('data-type');
    const select_input = select.querySelector('.select__input');
    select_item.addEventListener('click', function (event) {
        let selects = document.querySelectorAll('.select');
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            if (select != select_item.closest('.select')) {
                select.classList.remove('_active');

                _slideUp(select_body_options, 100);
            }
        }
        _slideToggle(select_body_options, 100, event);
        select.classList.toggle('_active');
       
        document.querySelectorAll(".serch-option").forEach(el=>{
            if(hasClassedParent(el, "_active")){
                el.focus({
                    preventScroll: true
                  });
            }
        })
        
    });
 
    for (let index = 0; index < select_options.length; index++) {
        const select_option = select_options[index];
        const select_option_value = select_option.getAttribute('data-value');
        const select_option_text = select_option.innerHTML;

        if (select_type == 'input') {
            select_input.addEventListener('keyup', select_search);
        } else {
            if (select_option.getAttribute('data-value') == original.value) {
                select_option.style.display = 'none';
            }
        }
        select_option.addEventListener('click', function () {
            for (let index = 0; index < select_options.length; index++) {
                const el = select_options[index];
                el.style.display = 'block';
            }
            if (select_type == 'input') {
                select_input.value = select_option_text;
                original.value = select_option_value;

            }  else {
                select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
                original.value = select_option_value;
                select_option.style.display = 'none';
                $(original).on('change');
                $(original).trigger("change");
            }
        });
    }
}

function select_get_options(select_options) {
    if (select_options) {
        let select_options_content = '';
        for (let index = 0; index < select_options.length; index++) {
            const select_option = select_options[index];
            const select_option_value = select_option.value;
            if (select_option_value != '') {
                const select_option_text = select_option.text;
                select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
            }
        }
        return select_options_content;
    }
}

function select_search(e) {
    let select_block = e.target.closest('.select ').querySelector('.select__options');
    let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
    let select_search_text = e.target.value.toUpperCase();

    for (let i = 0; i < select_options.length; i++) {
        let select_option = select_options[i];
        let select_txt_value = select_option.textContent || select_option.innerText;
        if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
            select_option.style.display = "";
        } else {
            select_option.style.display = "none";
        }
    }
}

function selects_update_all() {
    let selects = document.querySelectorAll('select');
    if (selects) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            select_item(select);
        }
    }
}





if(document.querySelector("#map")){
    const map = L.map('map')
        .setView({
            lat: 59.96831,
            lng: 30.31748,
        }, 16);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
        },
    ).addTo(map);

    const mainPinIcon = L.icon({
        iconUrl: '/img/icons/point-map.svg',
        iconSize: [70, 70],
        iconAnchor: [37, 65],
    });

    const mainPinMarker = L.marker(
        {
            lat: 59.96831,
            lng: 30.31748,
        },
        {
            icon: mainPinIcon,
        },
    );

    mainPinMarker.addTo(map);

    mainPinMarker.on('moveend', (evt) => {
        console.log(evt.target.getLatLng());
    });
}


//Spollers =======================
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

    function spollerCLick(e) {
        const spoller = e.target;
        if (spollersGo) {
            spollersGo = false;

            if (spoller.closest('._spollers').classList.contains('_one')) {
                let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
                for (let i = 0; i < curent_spollers.length; i++) {
                    let el = curent_spollers[i];
                    if (el != spoller) {
                        el.classList.remove('_active');
                        _slideUp(el.nextElementSibling);
                    }
                }
            }


            if(spoller.classList.contains('_spoller')){
                spoller.classList.toggle('_active');
            }else{
                spoller.parentNode.classList.toggle('_active');
            }
            if(spoller.classList.contains('_spoller')){
                _slideToggle(spoller.nextElementSibling);
            }else{
                _slideToggle(spoller.parentNode.nextElementSibling);
            }


            setTimeout(function () {
                spollersGo = true;
            }, 500);
        }
    }

    function spollersInit() {
        for (let index = 0; index < spollers.length; index++) {
            const spoller = spollers[index];
            let spollerMax = spoller.getAttribute('data-max');

            if (spollerMax && window.innerWidth > spollerMax) {
                if (spoller.classList.contains('_init')) {
                    spoller.classList.remove('_active');
                    spoller.classList.remove('_init');
                    spoller.nextElementSibling.style.cssText = '';
                    spoller.removeEventListener("click", spollerCLick);
                }
            } else if (!spoller.classList.contains('_init')) {
                spoller.classList.add('_init');
                spoller.addEventListener("click", spollerCLick);
            }
        }
    }

    function spollersShowActive() {
        for (let index = 0; index < spollers.length; index++) {
            const spoller = spollers[index];
            if (spoller.classList.contains('_active')) {
                _slideToggle(spoller.nextElementSibling);
            }
        }
    }

    window.addEventListener("resize", spollersInit);

    setTimeout(function () {
        spollersShowActive();
        spollersInit();
    }, 0);
}
//Spollers =======================

//catalog
let searchElements =  document.querySelectorAll('.serch-option');

const searchOptions = (event) => {
    let val = event.value.trim().toLowerCase();
    let body = event.closest('.select__options');
    let listElements = body.querySelectorAll('.select__option');
    if(val !== ''){
        listElements.forEach(function (elem){
            if(elem.innerText.toLowerCase().search(val) == -1){
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        })
    } else {
        listElements.forEach(function (elem){
            elem.classList.remove('hide');
        })
    }
};

searchElements.forEach(searchElement => {
    searchElement.oninput = function (){
        searchOptions(this);
    }
});


if(document.querySelector('.catalogFilter-body__middle-filter')) {
    let btnFilter = document.querySelector('.catalogFilter-body__middle-filter');
    let filterBody = document.querySelector('.catalogFilter-body-all');
    let close = document.querySelector('.catalogFilter-body-all__top .close');
    btnFilter.addEventListener('click', () => {
        filterBody.classList.add('active');
        document.querySelector('body').classList.add('_lock');
    })

    close.addEventListener('click', () => {
        filterBody.classList.remove('active');
        document.querySelector('body').classList.remove('_lock');
    })
}


//RANGE
const priceSlider = document.querySelector('.droplist-aside-body__slider');
if (priceSlider) {

    let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');

    noUiSlider.create(priceSlider, {
        start: [10000, 40000],
        connect: true,
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0})],
        range: {
            'min': [3000],
            'max': [100000]
        }
    });



    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);


    function setPriceValues() {
        let priceStartValue;
        let priceEndValue;
        if (priceStart.value != '') {
            priceStartValue = priceStart.value;
        }
        if (priceEnd.value != '') {
            priceEndValue = priceEnd.value;
        }
        priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }

    let snapValues = [
        document.getElementById('price-start'),
        document.getElementById('price-end')
    ];
    priceSlider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].value = values[handle];
    });
}





//slider
if (document.querySelector('.applications__container')) {
    let applications = new Swiper(".applications__container", {
        init: false,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        navigation: {
            nextEl: ".applications-button-next",
            prevEl: ".applications-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px

            990: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1350: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    applications.init();
}

if (document.querySelector('.sliderTop__container')) {
    let sliderTop = new Swiper(".sliderTop__container", {
        init: false,
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 800,

        breakpoints: {
            // when window width is >= 320px

            767: {
                slidesPerView: 4.3,
                spaceBetween: 30
            },

            1350: {
                slidesPerView: 5.5,
                spaceBetween: 30
            },

            1650: {
                slidesPerView: 8,
                spaceBetween: 30
            },

            2500: {
                slidesPerView: 10,
                spaceBetween: 30
            },

            3500: {
                slidesPerView: 14,
                spaceBetween: 30
            },
        }
    });
    sliderTop.init();
}

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
     $('.cardGood-img__pagination .swiper-pagination-bullet').hover(function() {
         $( this ).trigger( "click" );
     });
 }


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
if(document.querySelectorAll('.card-slider__slider').length > 0){
    document.querySelectorAll('.card-slider__slider').forEach((el) => {
        let body = el.parentElement.parentElement;
        let prev = body.querySelector('.card-slider-top__prevBtn');
        let next = body.querySelector('.card-slider-top__nextBtn');
        console.log(body);
        console.log(prev);
        console.log(next);
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
//slider