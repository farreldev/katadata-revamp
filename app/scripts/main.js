(function($){
	var kd = function() {

		function kdSlider() {
			$('.berita-slide').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				prevArrow: '.prevArrowNav',
				nextArrow: '.nextArrowNav',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								prevArrow: '.prevArrowNav',
								nextArrow: '.nextArrowNav'
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
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
				prevArrow: false,
				nextArrow: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: true,
								prevArrow: false,
								nextArrow: false,
							}
						},{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								prevArrow: false,
								nextArrow: false,
							}
						},{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								prevArrow: false,
								nextArrow: false,
							}
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
	
		if(screen.width > 768) {
			$('.matchingHeight, .itemListAnalisis').matchHeight();
		}

		$('#datetimepicker1').datetimepicker()
	
		kdSlider()

	}()
})(jQuery)