$(function(){
  $('.longform-contain-sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    speed: 1500,
    adaptiveHeight: true,
    variableWidth: true,
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
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  
  // let vid = document.getElementById('html5video');
  //  vid.play()

})