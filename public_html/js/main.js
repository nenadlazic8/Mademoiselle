$(document).ready(function () {

    //CHECK HEADER

    function heroSectionMargin() {
        let headerH = $('header').innerHeight();
        $('.hero').css('margin-top', headerH);
    }

    heroSectionMargin();
    
    $(window).resize(function () {
        heroSectionMargin();
    })

    //OWL CAROUSEL

    $('.owl-carousel').owlCarousel({
        items : 1,
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        autoplayTimeout : 3500
    });

    //ANIMATION ON SCROLL

    //AOS.init();

    //COSTUME ANIMATIONS
    
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });

});




