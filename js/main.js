$(function() {

  $('.header__burger').on('click', function() {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger__lay').toggleClass('burger__lay--active');
    $('body').toggleClass('overflow-hidden');
  });

  $('.menu__link').on('click', function() {
    $('.header__menu').removeClass('header__menu--active');
    $('.burger__lay').toggleClass('burger__lay--active');
    $('body').toggleClass('overflow-hidden');
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
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.gallery__list');

});