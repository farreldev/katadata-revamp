(function($) {
  var kd = (function() {
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

      $('.foto-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
      if (!$('.humburger-btn').hasClass('humTrigger')) {
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

      $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        var tinggiMin = 1800; // Setting minimal tinggi scroll

        if (topPos > tinggiMin) {
          $gotoUp.css({ opacity: 1, bottom: 90 });
        } else {
          $gotoUp.css({ opacity: 0, bottom: -100 });
        }
      });

      $('a.goUp').on('click', function(a) {
        a.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, { duration: 1500 });
        return false;
      });
    }

    $('#tgl-lahir').datetimepicker();

    $('#fromDate').datetimepicker();
    $('#toDate').datetimepicker({
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

    if (screen.width > 768) {
      $('.matchingHeight, .itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li, .opini ul li, .video-list li, .foto-list li').matchHeight();
    }

    $('#datetimepicker1').datetimepicker();

    function tinyEditor() {
      tinymce.init({
        selector: 'textarea#addArticle',
        height: 300,
        menubar: true,
        plugins: [
          'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern'
        ],
        toolbar1:
          'newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect',
        content_css: [
          '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
          '//www.tinymce.com/css/codepen.min.css'
        ]
      });
    }

    kdSlider();
    btnGoUp();
    tinyEditor();
  })();
})(jQuery);
