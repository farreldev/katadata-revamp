$(function(){

  $('.longform-contain-sliders').on('click', function(e){
    e.preventDefault();
  })

  $('.longform-contain-sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    speed: 1500,
    adaptiveHeight: true,
    focusOnSelect: true,
    variableWidth: true,
    prevArrow: '.prevArrowNav',
    nextArrow: '.nextArrowNav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          focusOnSelect: true,
          infinite: true,
          autoplay: false,
          prevArrow: '.prevArrowNav',
          nextArrow: '.nextArrowNav'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: true,
          autoplay: false,
          prevArrow: '.prevArrowNav',
          nextArrow: '.nextArrowNav'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          adaptiveHeight: true,
          focusOnSelect: true,
          autoplay: false,
          prevArrow: '.prevArrowNav',
          nextArrow: '.nextArrowNav'
        }
      }
    ]
  });

  $('a.clickToRead').on('click', function(e) {
		e.preventDefault();
		var $dest = $('.longform').children('.wrapper')
		$('html, body').animate({
      scrollTop: $dest.position().top
    }, 800, 'swing');
  });

  if(window.screen.width < 420) {
    window.addEventListener('load', function() {
      $('span.toggle-dftr-isi').addClass('out');
      $('.daftar-isi').addClass('goOut');
    })
  }
  
  $('span.toggle-dftr-isi').on('click', function () {
		$(this).toggleClass('out'), $(this).parent().toggleClass('goOut')
	});

  var $sidebar   = $('#daftar-isi'), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

    $('.daftar-isi a[href*="#"]').on('click', function (e) {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 800), e.preventDefault()
    })

  // let vid = document.getElementById('html5video');
  //  vid.play()

})