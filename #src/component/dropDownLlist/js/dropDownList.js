if( $( '.dropDownList-title' ).length > 0) {
    $(".dropDownList-title").click(function () {
        parameters = {
            duration: 300,
        }
        var elem = this;
        var block = $(elem).closest('.wrapper-dropDownList');
        var hidden = $(block).find('.dropDownList-hidden');
        $(hidden).slideToggle(parameters);
        $(elem).toggleClass("open");
    });

}