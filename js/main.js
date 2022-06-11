$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		// slidesToScroll: 3,
		speed: 300,
		easing: 'ease',
		infinity: true,
		// initialSlide: 3,
		// autoplay: true,
		// autoplaySpeed: 3000,
		// pauseOnFocus: true,
		// pauseOnHover: true,
		// pauseOnDotsHover: true,
		// pauseOnDotsHover: true,
		// draggable: true,
		// swipe:true,
		// touchMove:true,
		touchThreshhold: 5,
		waitForAnimate: true,
		centerMode: true,
		variableWidth: true,
		rows: 1,
		// slidesPerRow: 3,
		// vertical: true,
		// verticalSwiping: true,
		asNavFor: ".sliderBig",
	});
	$('.sliderBig').slick({
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: ".slider",
	});
});

