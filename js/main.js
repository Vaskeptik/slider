$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					// centerMode: true,
				}
			}, {
				breakpoint: 930,
				settings: {
					slidesToShow: 1,
					// centerMode: true,
				}
			}
		]
	});

	// Методы Слик

	// $('.slider').on('afterChange', function (event, slick, currenSlide, nextSlide) {
	// 	console.log(currenSlide);
	// }
	// );
	// метод для корректной роботы
	$('.slider').slick('setPosition');
	// ----------
	// $('.slider').slick('goTo', 3);
	// ----------
	$('.slider').slick('slickPrev', 3);
	$('.slider').slick('slickNext', 3);
	// ----------
	$('.link-l').click(function (event) {
		$('.slider').slick('slickprev', 3);
	})
	$('.link-r').click(function (event) {
		$('.slider').slick('slickNext', 3);
	})
	// ----------
	$('.link-play').click(function (event) {
		$('.slider').slick('slickPlay');
	})
	$('.link-pause').click(function (event) {
		$('.slider').slick('slickPause');
	})
	// ----------
	$('.link-add').click(function (event) {
		$('.slider').slick('slickAdd', '<div class="newslide">123</div>');
		return false;
	})
	$('.link-remove').click(function (event) {
		$('.slider').slick('slickRemove', 0);
		return false;
	})
	// ----------
	var filtered = false;
	$('.img-filter').on('click', function () {
		if (filtered === false) {
			$('.slider').slick('slickFilter', '.filter');
			$(this).text('убрать фильтр');
			filtered = true;
		} else {
			$('.slider').slick('slickUnfilter');
			$(this).text('добавить фильтр');
			filtered = false;
		};
		return false;
	});

	// ----------
	$('.slider').on('afterChange', function () {
		var s = $('.slider').slick('slickGetOption', 'slidesToShow');
		console.log(s);
	});
	// ----------
	// $('.slider').slick('slickSetOption', 'slidesToShow', 2);
	// ----------
	// $('.slider').slick('unslick');

});

