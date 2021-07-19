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

  $(".nav__link").on("click", smoothScroll);
  $(".logo").on("click", smoothScroll);
  $(".header__icon").on("click", smoothScroll);

  function smoothScroll(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  };



  $('.blog__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});