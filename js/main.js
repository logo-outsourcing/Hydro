$(document).ready(function () {
    var bLazy = new Blazy();

    //Animation scroll

    $('.header__navigation--scroll[href^="#"]').click(function () {
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').removeClass('header__hidden');
        $('.header__close').removeClass('header__visible');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;

    });
    //Open gallery

    $("a.single_image").fancybox();
    $("a.zoom").fancybox({
        buttons: [
            "close",
        ],
        touch: {
            vertical: true, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
        },
    });

// Open burger menu

    $('.header__open').click(function (e) {
        e.preventDefault();
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').toggleClass('header__hidden');
        $('.header__close').toggleClass('header__visible');
    });

//Close burger menu

    $('.header__close').click(function (e) {
        e.preventDefault();
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').removeClass('header__hidden');
        $('.header__close').removeClass('header__visible');
    });

//Fixed menu when scrolling
    $(window).scroll(function () {

        if ($(window).scrollTop() > 1200) {
            if ($('.header__wrap').addClass('header__wrap--fixed')) {
            }
        } else {
            if ($('.header__wrap').removeClass('header__wrap--fixed')) {
            }
        }
    });

//Open more details

    $(".main__button--open").on("click", function () {
        $(".main__info--mobile").addClass('main__info--open');
        $(".main__button--open").toggleClass('main__button--hidden');
        $(".main__button--close").toggleClass('main__button--visible');
    });

//Close more details

    $(".main__button--close").on("click", function () {
        $(".main__info--mobile").removeClass('main__info--open');
        $(".main__button--open").toggleClass('main__button--hidden');
        $(".main__button--close").toggleClass('main__button--visible');
    });

//Slider
    $('.contemporary__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        slidesToShow: 1,
        slide: "div",
        dotsClass: ' slick-dots contemporary__dots',
        prevArrow: ".contemporary__prev",
        nextArrow: ".contemporary__next",
    });
    $('.contemporary__transformer--slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        slidesToShow: 1,
        slide: "div",
        dotsClass: ' slick-dots contemporary__dots',
        prevArrow: ".contemporary__transformer--prev",
        nextArrow: ".contemporary__transformer--next",
    });
    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);

        $(document).on('click', function(e){
            var target = $(e.target);

            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).removeClass("open");
        setTimeout( function(){
            $(modal).parents(".overlay").removeClass("open");
        }, 350);

    });

    $('.js-button').on("click", function () {
        $('.interactive__info').addClass("interactive__info--open");
        $('.interactive__picture').addClass("interactive__picture--hidden");
        $('.interactive__picture--changed').addClass("interactive__picture--visible");
    });
    $('.js-button-false').on("click",function () {
            $(this).addClass("interactive__button--false");
            $(this).addClass("interactive__button--wron");
    });
    $('.js-button-true').on("click",function () {
        $(this).addClass("interactive__button--true");
        $(this).addClass("interactive__button--check");
    });
    $(document).on('click', 'a', function (event) {
        event.preventDefault();
    });
    $(".interactive__farther").click(function () {
        $('.interactive__info').removeClass("interactive__info--open");
        $('.interactive__picture').removeClass("interactive__picture--hidden");
        $('.interactive__picture--changed').removeClass("interactive__picture--visible");
        var question = $(this).attr('data-src');
        if (question < 12) {
            var current = '#question_' + question;
            var next = '#question_' + (parseInt(question) + 1);
            $(current).addClass('interactive__item--hidden');
            $(next).removeClass('interactive__item--hidden')
        }
    });
});