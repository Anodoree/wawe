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

  $(".menu__link, .logo, .header__icon").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function() {
    let i = document.documentElement.clientHeight;
    if ($(this).scrollTop() >= i) {
      $('.header__nav').addClass('header__nav--fixed');
      $('.header__logo').addClass('header__logo--fixed');
    } else {
      $('.header__nav').removeClass('header__nav--fixed');
      $('.header__logo').removeClass('header__logo--fixed');
    }
  });



  $('.blog__list').slick({
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});