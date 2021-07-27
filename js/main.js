$(function() {

  $('.header__burger').on('click', function() {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger__lay').toggleClass('burger__lay--active');
    $('body').toggleClass('overflow-hidden');
  });

  $('.header__logo, .menu__link').on('click', function() {
    $('.header__menu').removeClass('header__menu--active');
    $('.burger__lay').removeClass('burger__lay--active');
    $('body').removeClass('overflow-hidden');
  });

  $(".menu__link, .logo, .hero__icon").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function() {
    let h = document.documentElement.clientHeight;
    if ($(this).scrollTop() >= (h / 10)) {
      $('.header').addClass('header--scroll');
      $('.header__menu').addClass('header__menu--scroll');
      $('.header__logo').addClass('header__logo--scroll');
    } else {
      $('.header').removeClass('header--scroll');
      $('.header__menu').removeClass('header__menu--scroll');
      $('.header__logo').removeClass('header__logo--scroll');
    }
  });

  $('.blog__list').slick({
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});