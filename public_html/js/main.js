$(document).ready(function () {

    //CHECK HEADER

    function heroSectionMargin() {
        let headerH = $('header').innerHeight();
        $('.hero').css('margin-top', headerH);
        $('.contact-content').css('margin-top', headerH);
        $('.blog-single-header').css('margin-top', headerH);
        $('.single-service-content').css('margin-top', headerH);
        
    }

    heroSectionMargin();

    $(window).resize(function () {
        heroSectionMargin();
    });

    //OWL CAROUSEL

    if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 7000
        });
    }



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


    //FORM VALIDATION

    if ($('.contact-form').length > 0) {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
            },
            rules: {
                name: {
                    required: true,
                    rangelength: [2, 20]
                },
                email: {
                    required: true,
                    email: true
                },

                subject: {
                    required: true,
                    rangelength: [2, 20]

                },

                message: {
                    required: true,
                    maxlength: 255
                }


            },
            messages: {
                name: {
                    required: 'Name and surename is required field.',
                    rangelength: 'Name must have between 2 and 20 characters.'
                },
                email: {
                    required: 'Email is required field.',
                    email: 'Enter valid email.'
                },

                subject: {
                    required: 'Subject is required field.',
                    rangelength: 'Subject must have between 2 and 20 characters.'
                },

                message: {
                    required: 'Message is required field.',
                    maxlength: 'Max characters are 255.'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
            }

        });
    }

});





