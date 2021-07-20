$(function() {

  $('.nav__btn').on('click', function() {
    $('.header__menu').toggleClass('header__menu--active');
  });

  $('.menu__link').on('click', function() {
    $('.header__menu').removeClass('header__menu--active');
  });

  $('.header__logo').on('click', function() {
    $('.header__menu').removeClass('header__menu--active');
  });

  $(".menu__link").on("click", smoothScroll);
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



  $('.blog__list').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});