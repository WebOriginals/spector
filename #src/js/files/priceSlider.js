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

