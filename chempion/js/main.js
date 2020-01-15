$(document).ready(function(){
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<div class="nav__btn-left"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="nav__btn-right"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            },
          ]
    });
    $('.content__left .img > .nav .wrap__nav').click(function(){
        $(this).siblings().removeClass("act");
        $(this).addClass("act");
    });
    $('.hamb__btn').click(function(){
        $(".hamb__block").toggleClass("act");
    });
    $('.time-block > div').click(function(){
          $(this).siblings().removeClass("active");
          $(this).addClass("active");
    });
    $('i.fa.fa-minus').click(function(){
      var value = parseInt($('#quantity').val().replace(/\D+/g,""));
      if (value < 2) {
          return false;
      }
      value -= 1;
      $('#quantity').val(value + " шт");
    });
    $('i.fa.fa-plus').click(function(){
      var value = parseInt($('#quantity').val().replace(/\D+/g,""));
      value += 1;
      $('#quantity').val(value + " шт");
    });
});