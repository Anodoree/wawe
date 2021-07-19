$(function() {

  $('.nav__btn').on('click', function() {
    $('.nav__list').toggleClass('nav__list--active');
  });

  $('.nav__link').on('click', function() {
    $('.nav__list').removeClass('nav__list--active');
  });

  $('.header__logo').on('click', function() {
    $('.nav__list').removeClass('nav__list--active');
  });

  $('.blog__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});