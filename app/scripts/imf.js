$(function(){

  $('.imf-grafik-video-slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: '#prevArrowNav',
    nextArrow: '#nextArrowNav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          prevArrow: '#prevArrowNav',
          nextArrow: '#nextArrowNav'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow: '#prevArrowNav',
          nextArrow: '#nextArrowNav'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow: '#prevArrowNav',
          nextArrow: '#nextArrowNav'
        }
      }
    ]
  });

  $('.imf-foto-slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: '#prevArrowNav2',
    nextArrow: '#nextArrowNav2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          prevArrow: '#prevArrowNav2',
          nextArrow: '#nextArrowNav2'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow: '#prevArrowNav2',
          nextArrow: '#nextArrowNav2'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow: '#prevArrowNav2',
          nextArrow: '#nextArrowNav2'
        }
      }
    ]
  });
  
  // let vid = document.getElementById('html5video');
  //  vid.play()

})