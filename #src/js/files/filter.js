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

