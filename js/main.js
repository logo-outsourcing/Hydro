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
});