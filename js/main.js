$(function(){

    $('.friends-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
      });

});