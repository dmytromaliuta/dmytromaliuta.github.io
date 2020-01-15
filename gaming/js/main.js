$( document ).ready(function() {
    $(".hamburger").click(function(){
    	$(this).toggleClass("act-btn")
    	$(".header__menu").toggleClass("act");
    });
});