$(document).ready(function(){
	// scroll
	$("#hamb__menu, #menu, .menuhidden").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
	$('.slider').slick({
	dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	var btn = document.getElementById("showblock");
	var elem = document.getElementById("menuhidden");
	btn.onclick = function(){
		elem.classList.toggle("display");
	}
	elem.onclick = function(e){
		if(e.target.tagName == 'A') {
			elem.classList.remove("display");
		}
	}

	var hambBtn = document.getElementById("menuToggle");
	var ul = document.getElementById("hamb__menu");
	hambBtn.onclick = function(){
		ul.classList.toggle("menu__open");
		document.body.classList.toggle("hidden");
	}
	var menuLi = document.querySelectorAll("#hamb__menu li");
	for(var i = 0; i < menuLi.lenght; i++){
		menuLi[i].onclick = function(){
			ul.classList.remove("menu__open");
		}
	}
});