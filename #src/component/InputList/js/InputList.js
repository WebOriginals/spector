( function( $ ){

    // Настройки

    const settings = {
        select_value : 'select-value',
        action : 'select_edit',
        class_open : 'open',
        class_transfotm : 'transfotm',
        class_wrapper : 'wrapper-input',
        class_block : 'wrapper-size',
        class_buffer : 'input-buffer',
        class_items : 'list__itams',
        class_selector : 'js_size_selector',
        class_disabel : 'list__itams-disabel',
        wrapper_list : 'wrapper-list',
        input_search : 'serch',
    };

    let hendler = {

        // Инициализация

        construct : function(){
            if( $( "." + settings.class_wrapper ).length ){
                $( "." + settings.class_wrapper ).unbind( "click." + settings.action );
                $( "." + settings.class_wrapper ).bind( "click." + settings.action, function (){
                    hendler.select_action( this );
                });

            }
        },

        // Нажатие на блок селекта

        select_action : function( elem ){

            var input = $( elem ).find( 'input' ); // Инпут блока
            var value = $( elem ).find( '.' + settings.select_value ); // Значение блока
            var block = $( elem ).closest( '.' + settings.class_block ); // Находим общую обертку
            var selector = $( block ).find( '.' + settings.class_selector ); // Находим облок элементов внутри общей обертки
            var items = $( selector ).find( '.' + settings.class_items ).not( '.' + settings.class_disabel ); // Находим все item внутри общей обертки
            var wr = $( block ).find( '.' + settings.wrapper_list );
            var serch = $( block ).find( '.' + settings.input_search );

            //console.log($(serch)[0]);
            //console.log($('.' + settings.input_search));

            //$(serch).unbind('input').bind('input', function(){ console.log(this); });

            var block_type = $( block ).data( 'type' ) || 'select'; // Тип селекта
            wr.css('width', (elem.clientWidth + 2) + 'px');
            $( window ).resize(function() {
                wr.css('width', (elem.clientWidth + 2) + 'px');
            });

            // Закрыть селект

            var close_select = function(){
                $( items ).unbind( 'click.' + settings.action ); // Отменяем оброботчик кликов на item
                $( document ).unbind( 'mouseup.' + settings.action ); // Отменяем обработчик клика вне общей обертки
                $( selector ).removeClass( settings.class_open ); // Закрываем блок
                $( block ).removeClass( settings.class_transfotm ); // Изменяем стрелку селекта
            };

            $( selector ).toggleClass( settings.class_open ); // Открываем или скрываем

            $( serch ).on('input', function (){
                var val = $( this ).val().trim();

                if(val !== ''){

                    items.each(function (elem){
                        //console.log($( this ).text());
                        if($(items[elem]).text().search(val) == -1){
                            $( this ).addClass('hide');
                        } else {
                            $( this ).removeClass('hide');
                        }
                    })
                }
            });


            if( $( block ).hasClass( settings.input_search ) ) {
                var getSearch = function (){
                    console.log( this );
                    var val = $( this ).val().trim();
                    console.log(val);
                    if (val !== '') {

                        items.each(function (elem) {
                            console.log(elem);
                            if (elem.text.search(val) == -1) {
                                elem.addClass('hide');
                            } else {
                                elem.removeClass('hide');
                            }
                        })
                    }
                };
                $($(serch)[0]).unbind('input').bind('input', function(){ console.log(this); });

            };

            // Если открыли блок селекта

            if( $( selector ).hasClass( settings.class_open ) ){

                $( block ).addClass( settings.class_transfotm ); // Изменяем стрелку селекта

                // Определяем обработчик

                /** Новый код **/

                switch( block_type ){

                    case 'select' :
                        $( items ).unbind( 'click.' + settings.action ).bind( 'click.' + settings.action, function(){
                            $( value ).text( $( this ).text() ); // Берем текст из item и сохраняем в видимое выбраное значение
                            $( input ).val( $( this ).data( 'value' ) || $( this ).text()).trigger("change"); // Берем дата параметр или текст из item и сохраняем в наш input
                            ready_close();
                        });
                        break;

                    case 'checkbox' :
                        $( selector ).find( 'input[type="checkbox"]' ).unbind( 'change.' + settings.action ).bind( 'change.' + settings.action, function(){
                            var count_checked = $( selector ).find( 'input:checked' ); // считаем кол-во выбранных элементов
                            var values = [];
                            $(count_checked).each(function(){
                                values.push( ( $( this ).data( 'name' ) || $( this ).val() ) );
                            });
                            values.join(', ')
                            var text = values.join(', ');
                            $( value ).text( text || 'Не задано' );
                            ready_close();
                        });
                        break;
                }

                // Проверить текст и закрыть

                var ready_close = function(){

                    if(window.screen.width<=1023) {
                        $(value).text(value.text().substring(0, 27)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 27) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    } else {
                        $(value).text(value.text().substring(0, 50)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 50) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    }

                    close_select();
                }

                /** Новый код конец **/

                /** старый код

                 $( items ).unbind( 'click.' + settings.action ).bind( 'click.' + settings.action, function(){

                    switch( block_type ){
                        case 'select' :
                            $( value ).text( $( this ).text() ); // Берем текст из item и сохраняем в видимое выбраное значение
                            $( input ).val( $( this ).data( 'value' ) || $( this ).text()).trigger("change"); // Берем дата параметр или текст из item и сохраняем в наш input
                            break;

                        case 'checkbox' :
                            setTimeout( function(){ console.log($( selector ).find( 'input:checked' ).length) }, 1000);
                            var count_checked = $( selector ).find( 'input:checked' ); // считаем кол-во выбранных элементов
                            var values = [];
                            $(count_checked).each(function(){
                                values.push($(this).val());
                            });
                            values.join(', ')
                             var text = values.join(', ');
                             $( value ).text( text );
                            break;
                    }

                    if(window.screen.width<=1023) {
                        $(value).text(value.text().substring(0, 27)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 27) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    } else {
                        $(value).text(value.text().substring(0, 50)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 50) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    }

                    close_select();
                });

                 старый код конец **/

                // Определяем обработчик клика вне блока

                $( document ).unbind( 'mouseup.' + settings.action ).bind( 'mouseup.' + settings.action, function( e ){

                    // Если нажали не на нашу общую обертку или не на блок внутри нее

                    if( !$( block ).is( e.target ) && $( block ).has( e.target ).length === 0 ){ close_select(); }
                });

            } else { close_select(); }
        }
    };

    window.obora_selector = hendler;

    $( document ).ready( function(){ hendler.construct(); });

})( jQuery );