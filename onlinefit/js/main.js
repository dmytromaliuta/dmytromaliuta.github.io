$(document).ready(function(){
	// scroll
	$("#hamb__menu, #menu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top - 100;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
	// slider
	$('.slider').slick({
	dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});