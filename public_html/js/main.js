$(document).ready(function () {

    function heroSectionMargin() {
        let headerH = $('header').innerHeight();
        $('.hero').css('margin-top', headerH);
    }

    heroSectionMargin();
    
    $(window).resize(function () {
        heroSectionMargin();
    })

    $('.owl-carousel').owlCarousel({
        items : 1,
        loop : true
    });

});




