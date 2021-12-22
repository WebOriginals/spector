if (window.screen.width > 900) {
    let render = (component, initState = {}, mountNode = 'app') => {
        initState.render = (stateRepresentation, options = {}) => {

            const start = (options.focus) ? document.getElementById(options.focus).selectionStart : 0;
            (document.getElementById(mountNode) || {}).innerHTML = stateRepresentation

            if (options.focus) {
                let f = document.getElementById(options.focus)
                f.selectionStart = start
                f.focus()
            }
        }

        let stateRepresentation = component(initState)

        initState.render((typeof stateRepresentation === 'function') ? stateRepresentation() : stateRepresentation)
    }

    let Shoppable = ({image, hotspots}) =>
        `<div class="hints">
                ${hotspots.map(({title, old_price, new_price, coordinates, url}, hotspotIndex) =>
            `<div id="hint--${hotspotIndex}" class="hint" style="top:${coordinates[0]}%;left:${coordinates[1]}%;z-index:${hotspotIndex + 1}">
                    <div class="hint__point">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="13.5" fill="white" stroke="#EB8B55"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C13.4477 8 13 8.44772 13 9V13H9C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H13V19C13 19.5523 13.4477 20 14 20C14.5523 20 15 19.5523 15 19V15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H15V9C15 8.44772 14.5523 8 14 8Z" fill="#EB8B55"/>
                        </svg>
                    </div>
                    <a href="${url}" class="hint__link" target="_blank">
                        <div class="hint__body project-main-spoller-grid__elem">
                            <div class="project-main-spoller-grid__img" style='background-image: url("img/catalog/good1.png");'></div>
                            <div class="project-main-spoller-grid__name">${title.replace(/^(.{16}).+/, "$1…")}</div>
                            <div class="project-main-spoller-grid__price">
                               <!--<div class="hint__old-price">${old_price}</div>-->
                                <div class="hint__new-price">${new_price}</div>
                            </div>
                            
                        </div>
                    </a>
                </div>`).join('')
        }
            </div>`;


    render(
        Shoppable,
        {
            image: "",
            hotspots: [
                {
                    title: "Простая плита",
                    old_price: "19 999 р.",
                    new_price: "16 999 р.",
                    url: "https://eightouncecoffee.ca/products/hario-v60-02-matte-black-metal",
                    coordinates: [60, 70]
                },
                {
                    title: "Духовка Гореие",
                    old_price: "19 999 р.",
                    new_price: "16 999 р.",
                    url: "https://eightouncecoffee.ca/products/hario-matte-black-scoop",
                    coordinates: [80, 70]
                },
                {
                    title: "Дорогая вытяжка",
                    old_price: "19 999 р.",
                    new_price: "16 999 р.",
                    url: "https://eightouncecoffee.ca/products/hario-matte-black-scoop",
                    coordinates: [15, 71]
                },
                {
                    title: "Краная Раковина ",
                    old_price: "19 999 р.",
                    new_price: "16 999 р.",
                    url: "https://eightouncecoffee.ca/products/hario-scale-timer",
                    coordinates: [68, 35]
                }
            ],
            options: {
                theme: "white"
            }
        },
        "project"
    );
}

