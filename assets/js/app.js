/*
=====================
JS Table of Conttent 
=====================
01. Mobile Menu 
04. AOS Animation

*/

(function ($) {
  "use strict";



 /*
  ------------------------  
  01. Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class, main").toggleClass("mobile-device-active");
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });






  
  if ($('.testimonials-area').length > 0) {
    
    $('.main-slider-box').slick({
      autoplay:false,
      centerMode: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      arrows:false,
      dots: true,
      prevArrow: $('.slider-next'),
      nextArrow: $('.slider-prev'),
      draggable: true,
      focusOnSelect:false,
      responsive: [{
          breakpoint: 1280, 
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
            
          }
        }
      ]
    });
  }



  
}(jQuery));



