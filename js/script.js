$('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    prevArrow: $('.fa-chevron-left'),
    nextArrow: $('.fa-chevron-right'),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
  
          ]
  })