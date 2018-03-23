$(function() {
  var kd = (function() {

    var slideWrapper = $('.video-slider'),
          iframes = slideWrapper.find('.embed-player'),
          lazyImages = slideWrapper.find('.slide-image'),
          lazyCounter = 0;

    var $fotoList = $('.foto-slider'),
        slideCount = null;

    $fotoList.on('init', function (event, slick) {
      slideCount = slick.slideCount;
      $('.counter-text').find('.totImg').text(slideCount);
      setCurrentCounter(slick.currentSlide);
    });

    $fotoList.on('beforeChange', function(event,slick,currentSlide,nextSlide) {
      setCurrentCounter(nextSlide);
    });

    function setCurrentCounter(imgN) {
      $('.counter-text').find('.currImg').text(imgN + 1);
    }

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
              autoplay: false,
              prevArrow: '.prevArrowNav',
              nextArrow: '.nextArrowNav'
            }
          }
        ]
      });

      $fotoList.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        adaptiveHeight: true,
        prevArrow: '.prevArrowNav3',
        nextArrow: '.nextArrowNav3',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              autoplay: false,
              prevArrow: '.prevArrowNav3',
              nextArrow: '.nextArrowNav3'
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
              nextArrow: '.nextArrowNav2'
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              prevArrow: '.prevArrowNav2',
              nextArrow: '.nextArrowNav2'
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              prevArrow: '.prevArrowNav2',
              nextArrow: '.nextArrowNav2'
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              prevArrow: '.prevArrowNav2',
              nextArrow: '.nextArrowNav2'
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      slideWrapper.slick({ // fade:true,
        //  autoplay: true,
        autoplaySpeed: 10000, lazyLoad: 'progressive', speed: 600, prevArrow: '.prevArrowNav4', nextArrow: '.nextArrowNav4', dots: true, cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)' });
      // arrows: false,

    }

    
    slideWrapper.on('lazyLoaded', function(event,slick,image,imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length) {
        lazyImages.addClass('show');
        slideWrapper.slick('slickPlay');
      }
    });

    var btnTrigger = document.querySelector('div.videoInfo');
    if(btnTrigger) {
      btnTrigger.addEventListener('click', function(ev) {
        if(ev.offsetX < btnTrigger.offsetWidth) {
          btnTrigger.classList.toggle('closeInfo');
        }
      }, false);
    }

    // Counter Slider img

    var $tinggiFooter = $('.contentWrapper').find('.footer').height();
    $('.wrapper .contentWrapper').css('paddingBottom', $tinggiFooter + 30);

    // var ua = navigator.userAgent.toLowerCase();
    // var $tinggi = $('.footer').height();

    // $('.wrapper main').css('marginBottom', $tinggi);

    // if (ua.indexOf('safari') != -1) {
    //   if (ua.indexOf('chrome') > -1) {
    //     $('.wrapper main').css('marginBottom', $tinggi);
    //   } else {
    //     $('.wrapper main').css('marginBottom', $tinggi - 70);
    //   }
    // }

    // $('.humburger-btn').on('click', function(e) {
    //   $(".humburger-btn").toggleClass("humTrigger");
    // });

    // $('.humburger-btn, .humburger-btn ~ a').on('click', function(e) {
    //   e.preventDefault();
    //   if (!$('.humburger-btn').hasClass('humTrigger')) {
    //     $('.wwNavigation').fadeIn();
    //     $('.humburger-btn').toggleClass('humTrigger');
    //   } else {
    //     $('.wwNavigation').fadeOut();
    //     $('.humburger-btn').toggleClass('humTrigger');
    //   }
    // });

    // $('.wwNavigation').on('click', function() {
    //   $('.humburger-btn').toggleClass('humTrigger');
    //   $('.wwNavigation').fadeOut();
    // });

    $('.embedChart-widget-content-widget-id').hide();
    $('ul.embedChart-widget-content-tabs-id li:first a')
      .addClass('embedChart-widget-current')
      .show();
    $('.embedChart-widget-content-widget-id:first').show();

    $('ul.embedChart-widget-content-tabs-id li a').on('click', function(ev) {
      ev.preventDefault();
      $('ul.embedChart-widget-content-tabs-id li a').removeClass(
        'embedChart-widget-current'
      );
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

    function btnGoUp() {
      var $gotoUp = $('a.goUp');

      $('main').scroll(function() {
        var topPos = $(this).scrollTop();

        var tinggiMin = 800; // Setting minimal tinggi scroll

        if (topPos > tinggiMin) {
          $gotoUp.css({ opacity: 1, bottom: 90 });
        } else {
          $gotoUp.css({ opacity: 0, bottom: -100 });
        }
      });

      $('a.goUp').on('click', function(a) {
        a.preventDefault();
        $('main').animate({ scrollTop: 0 }, { duration: 1500 });
        return false;
      });
    }

    function searcPanel() {
      $('#txtSearch').on('input', function() {
        if ($(this).val() !== '') {
          $('a.clearTxt').fadeIn(500);
        } else {
          $('a.clearTxt').fadeOut(200);
        }
      });

      $('.clearTxt').on('click', function(event) {
        event.preventDefault();
        $('#txtSearch').val('').siblings('.clearTxt').fadeOut(200);
      });
    }

    function kdTime() {
      $('#tgl-lahir').datetimepicker();
  
      $('#fromDate').datetimepicker({ format: 'DD-MM-YYYY' });
      $('#toDate').datetimepicker({
        format: 'DD-MM-YYYY',
        useCurrent: false
      });
  
      $('#fromDate').on('dp.change', function(ed) {
        $('#toDate')
          .data('DateTimePicker')
          .minDate(ed.date);
      });
  
      $('#toDate').on('dp.change', function(ed) {
        $('#fromDate')
          .data('DateTimePicker')
          .maxDate(ed.date);
      });
  
      $('.chooseSchedule').click(function() {
        if ($('#sevenDay').is(':checked') || $('#thirdTeen').is(':checked')) {
          $('#fromDate, #toDate').prop('disabled', true);
        } else {
          $('#fromDate, #toDate').removeAttr('disabled');
        }
      });
  
      $('button[type="reset"]').on('click', function() {
        $('#fromDate, #toDate').removeAttr('disabled');
      });
      // $('#datetimepicker1').datetimepicker();
    }
    
    if (screen.width > 768) {
      $('.matchingHeight, .itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li, .opini ul li, .video-list li, .foto-list li').matchHeight();
    }

    var myMnu = new mlPushMenu(
      document.getElementById('mp-menu'),
      document.getElementById('trigger'),
      { type: 'cover' }
    );

    $('.btn-hum').on('click', function() {
      if($('.layerSearch').hasClass('openSearch')) {
        $('.layerSearch').toggleClass('openSearch');
        $('.wwNavigation-overlay').fadeOut();
      }
    });

    $('.cari-btn').on('click', function() {
      // eve.preventDefault();
      if (myMnu.open) {
        myMnu._resetMenu();
        $('.humburger-btn').toggleClass('humTrigger');
        $('.layerSearch').toggleClass('openSearch');
        $('.wwNavigation-overlay').fadeIn();
      } else {
        $('.layerSearch').toggleClass('openSearch');
        $('.wwNavigation-overlay').fadeIn();
        if (!$('.layerSearch').hasClass('openSearch')) {
          $('.wwNavigation-overlay').fadeOut(300);
        }
      }
    });

    $('.wwNavigation-overlay').on('click', function() {
    	$('.layerSearch').toggleClass('openSearch');
    	$('.wwNavigation-overlay').fadeOut();
    });
    
    kdSlider();
    btnGoUp();
    kdTime();
    searcPanel();
    
  })();
});
