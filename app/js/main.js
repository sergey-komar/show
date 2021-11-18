$(function () {

	// POPUP
$('.header-center__popup').magnificPopup({
    disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
});
$('.parents-content__popup-link').magnificPopup({
    disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
});

// POPUP BLOCK9
$('.performances__popup-link').magnificPopup({
    disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
});

// SLIDER BLOCK-2
	$('.slider__box').slick({
		prevArrow: ' <img src="./images/block-2/arrow-left.png" class="slider__arrow-left" alt="">',
		nextArrow: '<img src="./images/block-2/arrow-rigth.png" class="slider__arrow-rigth" alt="">',
		slidesToShow: 3,
  		slidesToScroll: 1,
		//   centerMode: true,
		dots: true
	})

// SLIDER BLOCK 9
	$('.performances__slider-inner').slick({
		prevArrow: ' <img src="./images/block-2/arrow-left.png" class="slider__arrow-l" alt="">',
		nextArrow: '<img src="./images/block-2/arrow-rigth.png" class="slider__arrow-r" alt="">',
		slidesToShow: 4,
  		slidesToScroll: 1,
		dots: true
	})


// SLIDER BLOCK-3
	$('.super-program__slider-big').slick({
		prevArrow: ' <img src="./images/block-2/arrow-left.png" class="slider__arrow-l" alt="">',
		nextArrow: '<img src="./images/block-2/arrow-rigth.png" class="slider__arrow-r" alt="">',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.super-program__slider-thumb'
	});

	$('.super-program__slider-thumb').slick({
		
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.super-program__slider-big',
		dots:false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	  });

// SLIDER BLOCK-10
$('.super-quests__slider-big').slick({
	prevArrow: ' <img src="./images/block-2/arrow-left.png" class="slider__arrow-l" alt="">',
	nextArrow: '<img src="./images/block-2/arrow-rigth.png" class="slider__arrow-r" alt="">',
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	asNavFor: '.super-quests__slider-thumb'
});

$('.super-quests__slider-thumb').slick({
	
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.super-quests__slider-big',
	dots:false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true
  });


})