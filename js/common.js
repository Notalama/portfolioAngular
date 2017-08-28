
$(document).ready(function(){
	$('.nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

	$(".examples-navigation .nav-item").click(function() {
		$(".examples-navigation .nav-item").removeClass("active");
		$(this).addClass("active");
	});
});