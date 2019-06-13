$(document).ready(function(){
	// scroll
	// $("#hamb__menu, #menu, .menuhidden").on("click","a", function (event) {
	//     event.preventDefault();
	//     var id  = $(this).attr('href'),
	//         top = $(id).offset().top;
	//     $('body,html').animate({scrollTop: top}, 1500);
	// });
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
	/*

		MY WIDGET

	*/

	var target = document.querySelectorAll(".agebtnblock i");
	for(var i = 0; i < target.length; i++){
		target[i].onclick = function(e){
			var className = e.target.getAttribute("data-type");
			var elem = document.querySelector("." + className);
			if(e.target.classList.contains("fa-minus")) {
				--elem.value;
			}
			if(e.target.classList.contains("fa-plus")) {
				++elem.value;
			}
		}
	}
	var a = document.querySelectorAll(".testing__content");
	var testingContentIndex = 0;
	var arr = new Array(5);
	for(var i = 0; i < a.length; i ++){
		a[i].onclick = function(e){
			if(e.target.classList.contains("activities__item_bg")){
				e.target.classList.toggle("training__active");
			}
			if(e.target.parentNode.classList.contains("activities__item_bg")){
				e.target.parentNode.classList.toggle("training__active");
			}
			if(e.target.hasAttribute("clicable") || e.target.parentNode.hasAttribute("clicable")){
				if (e.target.tagName == 'DIV' || e.target.tagName == 'IMG') {
					arr[testingContentIndex] = e.target.getAttribute("data-calc");
				} else {
					var selector = "." + e.target.getAttribute("data-label");
					var valueToCalc = document.querySelector(selector).value;
					arr[testingContentIndex] = valueToCalc;
				}
				a[testingContentIndex].classList.remove("active");
				testingContentIndex = testingContentIndex + 1;
				a[testingContentIndex].classList.add("active");
	        }
	        return false
	    }
	}
	function calculateCalories(arr){
		if(arr[0] == 'w') {
			var result = (66 + (13.7 * arr[3]) + (5 * arr[2]) - (6.8 * arr[1])) * Number(arr[4]);

		}
		if(arr[0] == 'm') {
			var result = (655 + (9.6 * arr[3]) + (1.8 * arr[2]) - (4.7 * arr[1])) * Number(arr[4])			
		}
		return Math.round(result);
		
	}
	var findResult = document.querySelector("#calories .calories__btn");
	findResult.onclick = function(){
		var result = calculateCalories(arr);
		var elemResult = document.getElementById("eating__result");
		a[testingContentIndex].classList.remove("active");
		testingContentIndex = testingContentIndex + 1;
		a[testingContentIndex].classList.add("active");
		setTimeout(function(){
			elemResult.innerHTML = result + " ккал";
		}, 1500);
	}	
});