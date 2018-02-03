(function($){
	var kd = function() {
		function kdSlider() {
			$('.berita-slide').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				prevArrow: '.prevArrowNav',
				nextArrow: '.nextArrowNav',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								autoplay: true,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								autoplay: true,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: true,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						}
					]
			})
			
			$('.ekonoGraphics').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				prevArrow: '.prevArrowNav2',
				nextArrow: '.nextArrowNav2',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true,
								autoplay: true,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: true,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: true,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							},
						},{
							breakpoint: 360,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: true,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							},
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
					]
			})
		}
	
		var ua = navigator.userAgent.toLowerCase(); 
		var $tinggi = $('.footer').height();
		
		$('.wrapper main').css('marginBottom', $tinggi)
		
		if (ua.indexOf('safari') != -1) { 
			if (ua.indexOf('chrome') > -1) {
				$('.wrapper main').css('marginBottom', $tinggi)
			} else {
				$('.wrapper main').css('marginBottom', $tinggi - 140)
			}
		}

		$('.humburger-btn, .humburger-btn ~ a').on('click', function(e) {
			e.preventDefault();
			if(!$('.humburger-btn').hasClass('humTrigger')) {
				$('.wwNavigation').fadeIn()
				$('.humburger-btn').toggleClass('humTrigger');
			} else {
				$('.wwNavigation').fadeOut()
				$('.humburger-btn').toggleClass('humTrigger');
			}
		});

		$('.wwNavigation').on('click', function() {
			$('.humburger-btn').toggleClass('humTrigger');
			$('.wwNavigation').fadeOut()
		})

		// $('.wwNavigation-overlay').on('click', function() {
		// 	$('.humburger-btn').toggleClass('humTrigger');
		// 	$('.wwNavigation-overlay').fadeOut()
		// })
		
		$('a.goUp').on('click', function(a) {
			a.preventDefault();
			$('html, body').animate({ scrollTop: 0}, { duration: 1500 });
			return false;
		})

		if(screen.width > 768) {
			$('.matchingHeight, .itemListAnalisis, .sprite-ico li').matchHeight();
		}

		$('#datetimepicker1').datetimepicker()
	
		kdSlider()

	}()
})(jQuery)