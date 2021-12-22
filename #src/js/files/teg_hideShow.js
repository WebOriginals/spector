const tegs = document.querySelectorAll('.articles-teg__bottom input');

if(tegs.length > 0){
    const btn = document.querySelector('.articles-teg__button');
    const textBtn = btn.querySelector('p');
    const wrapper = document.querySelector('.articles-teg__bottom');

    btn.addEventListener('click', () => {

        btn.classList.toggle('active');
        let descript1 = 'Показать все тэги';
        let descript2 = 'Скрыть тэги';
        textBtn.innerText = descript1;
        if(btn.classList.contains('active')){
            textBtn.innerText = descript2;
        }
        wrapper.classList.toggle('height');
    })
}
