$(document).ready(function(){
	// scroll
	$("#hamb__menu, #menu, .menuhidden").on("click","a", function (event) {
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

// menu block

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
}
var menuLi = document.querySelectorAll("#hamb__menu li");
for(var i = 0; i < menuLi.lenght; i++){
	menuLi[i].onclick = function(){
		ul.classList.remove("menu__open");
	}
}


$(document).ready(function() {

	//E-mail Ajax Send
	$(".modal__form, .firstform, .formid3, .formid4, .formid4, .formid5").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("ads");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});