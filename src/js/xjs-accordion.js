var xjs = xjs || {};

xjs.accordion = function() {

    var allPanels = $('.accordion > .accordion__panel');
    var allTitles = $('.accordion > .accordion__title');


    $('.accordion > .accordion__title > a').click(function() {

        // if it's opened close it
        if( $(this).parent().hasClass('accordion__title--active') ) {
            $(this).parent().removeClass('accordion__title--active').next().slideUp(300);
        }
        // if it's closed open it and close all others
        else {
            allPanels.slideUp(300);
            allTitles.removeClass('accordion__title--active');
            $(this).parent().addClass('accordion__title--active').next().slideDown(300);
        }

        return false;
    });

};

$(document).ready(function (){
    xjs.accordion();
});