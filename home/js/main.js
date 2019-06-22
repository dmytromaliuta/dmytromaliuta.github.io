$( document ).ready(function() {
	$('#pagepiling').pagepiling({
	    verticalCentered: false,
	    navigation: {
	    	'position': 'right',
	   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
	   	}
	});

	$('.works__photo').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

    // $("#menu").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });
 });
