(function($){
	var kd = function() {
		function kdSlider() {
			$('.berita-slide').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '.prevArrowNav',
				nextArrow: '.nextArrowNav',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								autoplay: false,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								autoplay: false,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: false,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						}
					]
			});
			
			$('.ekonoGraphics').slick({
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: false, // .prevArrowNav2
				nextArrow: false, // .nextArrowNav2
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: true,
								autoplay: false,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: false,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: false,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							},
						},{
							breakpoint: 360,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay: false,
								prevArrow: '.prevArrowNav2',
								nextArrow: '.nextArrowNav2',
							},
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
					]
			});
		}
	
		var ua = navigator.userAgent.toLowerCase(); 
		var $tinggi = $('.footer').height();
		
		$('.wrapper main').css('marginBottom', $tinggi);
		
		if (ua.indexOf('safari') != -1) { 
			if (ua.indexOf('chrome') > -1) {
				$('.wrapper main').css('marginBottom', $tinggi);
			} else {
				$('.wrapper main').css('marginBottom', $tinggi - 70);
			}
		}

		$('.humburger-btn, .humburger-btn ~ a').on('click', function(e) {
			e.preventDefault();
			if(!$('.humburger-btn').hasClass('humTrigger')) {
				$('.wwNavigation').fadeIn();
				$('.humburger-btn').toggleClass('humTrigger');
			} else {
				$('.wwNavigation').fadeOut();
				$('.humburger-btn').toggleClass('humTrigger');
			}
		});

		$('.wwNavigation').on('click', function() {
			$('.humburger-btn').toggleClass('humTrigger');
			$('.wwNavigation').fadeOut();
		});

		$('.embedChart-widget-content-widget-id').hide();
		$('ul.embedChart-widget-content-tabs-id li:first a').addClass('embedChart-widget-current').show();
		$('.embedChart-widget-content-widget-id:first').show();

		$('ul.embedChart-widget-content-tabs-id li a').on('click', function(ev) {
			ev.preventDefault();
			$('ul.embedChart-widget-content-tabs-id li a').removeClass('embedChart-widget-current');
			$(this).addClass('embedChart-widget-current');
			$('.embedChart-widget-content-widget-id').hide();
			var activeTab = $(this).attr('href');
				$(activeTab).fadeIn();
				return false;
		});

		// $('.wwNavigation-overlay').on('click', function() {
		// 	$('.humburger-btn').toggleClass('humTrigger');
		// 	$('.wwNavigation-overlay').fadeOut()
		// })
		$('#fromDate').datetimepicker();
		$('#toDate').datetimepicker({
			useCurrent: false
		});

		$('#fromDate').on('dp.change', function (ed) {
			$('#toDate').data('DateTimePicker').minDate(ed.date);
		});

		$('#toDate').on('dp.change', function (ed) {
			$('#fromDate').data('DateTimePicker').maxDate(ed.date);
		});

		$('.chooseSchedule').click(function() {
			if ($('#sevenDay').is(':checked') || $('#thirdTeen').is(':checked')) {
				$('#fromDate').prop('disabled', true);
				$('#toDate').prop('disabled', true);
			} else {
				$('#fromDate').removeAttr('disabled');
				$('#toDate').removeAttr('disabled');
			}
	 	});
		
		 $('button[type="reset"]').on('click', function() {
			 $('#fromDate').removeAttr('disabled');
				$('#toDate').removeAttr('disabled');
		 });

		$('a.goUp').on('click', function(a) {
			a.preventDefault();
			$('html, body').animate({ scrollTop: 0}, { duration: 1500 });
			return false;
		});

		if(screen.width > 768) {
			$('.matchingHeight, .itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li').matchHeight();
		}

		$('#datetimepicker1').datetimepicker();
	
		kdSlider();
		
	}();
})(jQuery);