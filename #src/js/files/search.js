const btnsSearch = document.querySelectorAll('.search');
const wrapperSearch = document.querySelector('.header-body-search');
const closeSearch = document.querySelector('.header-body-search__close');

btnsSearch.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        console.log(1);
        event.preventDefault();
        wrapperSearch.classList.add('open-search');
    })
})



closeSearch.addEventListener('click', (event) => {
    wrapperSearch.classList.remove('open-search');
})