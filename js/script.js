$(function(){
	resize();
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});
	$('a').smoothScroll({
		easing: 'swing',
		speed: 1000
	});
})

$(window).resize(function(){
	resize();
});

function resize(){
	windowHeight = $(window).innerHeight();
	windowWidth = $(window).innerWidth();
	if (windowWidth > 768) {
		$("#header").css("min-height", windowHeight);
		$("table.vertical").css("min-height", windowHeight);
	} else {
		$("#header").css("min-height", 0);
		$("table.vertical").css("min-height", 0);
	}
}