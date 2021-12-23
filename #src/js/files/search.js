const btnSearch = document.querySelector('.search');
const wrapperSearch = document.querySelector('.header-body-search');
const closeSearch = document.querySelector('.header-body-search__close');


btnSearch.addEventListener('click', (event) => {
    event.preventDefault();
    wrapperSearch.classList.add('open-search');

})
closeSearch.addEventListener('click', (event) => {
    wrapperSearch.classList.remove('open-search');
})