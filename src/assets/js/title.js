$(document).ready(function(){
  $('.title-slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    customPaging: function(slider, i) {
      return '<span class="custom-dot">' + (i + 1) + ' / ' + slider.slideCount + '</span>';
    }
  });
});