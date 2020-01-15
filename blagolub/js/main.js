$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]
});