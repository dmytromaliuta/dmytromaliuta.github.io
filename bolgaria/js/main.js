$(document).ready(function(){
	$(".anim").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


	new WOW().init();



  $('.reviews__slider').slick({
  	slidesToShow: 1,
	dots: true,
	responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        arrows: true,
	        centerMode: false,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: false,
	        centerMode: false,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
  });
});

$(function(){
    $('.hamburger').click(function(){
        $('.mobilemenu').toggleClass('active');
    });
});
