if (window.matchMedia("(max-width: 500px)").matches) {
  /* the viewport is less than 768 pixels wide */

  var $slickEl = $('.center-three-points');

  $slickEl.slick({
      centerMode: true,
      centerPadding: '50px',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: false,
      infinite: true,
      prevArrow: $('.prev-three-point'),
      nextArrow: $('.next-three-point'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            dots: true,
            prevArrow: $('.prev-three-point'),
            nextArrow: $('.next-three-point'),
            slidesToShow: 1
          }
        }
      ]
    });
} 



if (window.matchMedia("(max-width: 500px)").matches) {
    /* the viewport is less than 768 pixels wide */

    var $slickEl = $('.center');

    $slickEl.slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              dots: true,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
              slidesToShow: 1
            }
          }
        ]
      });
  } 



  if (window.matchMedia("(max-width: 500px)").matches) {
    /* the viewport is less than 768 pixels wide */

    var $slickEl = $('.centerr');

    $slickEl.slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        prevArrow: $('.preev'),
        nextArrow: $('.neext'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              dots: true,
              prevArrow: $('.preev'),
              nextArrow: $('.neext'),
              slidesToShow: 1
            }
          }
        ]
      });
  } 


/* CAPABILITIES BANNER SLIDER*/

  if (window.matchMedia("(max-width: 500px)").matches) {
    /* the viewport is less than 768 pixels wide */

    var $slickEl = $('.banner-slider');

    $slickEl.slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      });
  } 


  /* HAVE A QUESTION */

  if (window.matchMedia("(max-width: 500px)").matches) {
    /* the viewport is less than 768 pixels wide */

    var $slickEl = $('.have-a-question-slider');

    $slickEl.slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        slide: '.slide',
        infinite: true,
        prevArrow: $('.preev'),
        nextArrow: $('.neext'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              dots: true,
              prevArrow: $('.preev'),
              nextArrow: $('.neext'),
              slidesToShow: 1
            }
          }
        ]
      });
  } 