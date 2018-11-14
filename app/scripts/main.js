$(function() {
  var kd = (function() {

    let isMobile = false;
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobile = true;
      if(window.innerWidth == 1024 && window.innerHeight == 1366) {
        isMobile = false;
      }
    }

    var slideWrapper = $('.video-slider'),
      iframes = slideWrapper.find('.embed-player'),
      lazyImages = slideWrapper.find('.slide-image'),
      lazyCounter = 0;

    var $fotoList = $('.foto-slider'),
      slideCount = null;

    $fotoList.on('init', function(event, slick) {
      slideCount = slick.slideCount;
      $('.counter-text')
        .find('.totImg')
        .text(slideCount);
      setCurrentCounter(slick.currentSlide);
    });

    $fotoList.on('beforeChange', function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      setCurrentCounter(nextSlide);
    });

    function setCurrentCounter(imgN) {
      $('.counter-text')
        .find('.currImg')
        .text(imgN + 1);
    }

    function kdSlider() {
      $('.berita-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        slidesToScroll: 4,
        autoplay: false,
        prevArrow: '.prevArrowNav2', // .prevArrowNav2
        nextArrow: '.nextArrowNav2', // .nextArrowNav2
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

      slideWrapper.slick({
        // fade:true,
        //  autoplay: true,
        autoplaySpeed: 10000,
        lazyLoad: 'progressive',
        speed: 600,
        prevArrow: '.prevArrowNav4',
        nextArrow: '.nextArrowNav4',
        dots: true,
        cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
      });
      // arrows: false,
    }

    let dbHome = document.querySelector('section.databoks-home');
    
    if(dbHome && isMobile) {
      let dbInfo = dbHome.querySelector('.databoks-info');
      let paste = dbHome.querySelector('.paste-here');
      let buttons = dbInfo.querySelectorAll('a.btn');
      Array.from(buttons).map(btn => paste.appendChild(btn));
    }


    slideWrapper.on('lazyLoaded', function(event, slick, image, imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length) {
        lazyImages.addClass('show');
        slideWrapper.slick('slickPlay');
      }
    });

    var btnTrigger = document.querySelector('div.videoInfo');
    if (btnTrigger) {
      btnTrigger.addEventListener(
        'click',
        function(ev) {
          if (ev.offsetX < btnTrigger.offsetWidth) {
            btnTrigger.classList.toggle('closeInfo');
          }
        },
        false
      );
    }

    // Counter Slider img

    /*** Sticky Footer ***/
    // function stickyFooter() {
    //   var ua = navigator.userAgent.toLowerCase();
    //   var $tinggiFooter = $('.contentWrapper')
    //     .find('.footer')
    //     .height();

    //   $('.wrapper .contentWrapper').css('paddingBottom', $tinggiFooter + 25);

    //   if (ua.indexOf('safari') != -1) {
    //     if (ua.indexOf('chrome') > -1) {
    //       $('.wrapper .contentWrapper').css(
    //         'paddingBottom',
    //         $tinggiFooter + 25
    //       );
    //     } else {
    //       $('.wrapper .contentWrapper').css(
    //         'paddingBottom',
    //         $tinggiFooter + 25
    //       );
    //     }
    //   }
    // }
    /*** End ***/

    // window.onload = stickyFooter;
    // window.onresize = stickyFooter;

    /*** Remove Empty tag P ***/
    function removeEmptyTeks() {
      $('p').each(function() {
        var $this = $(this);
        if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
          $this.remove();
        }
      });
    }
    /*** End ***/

    /* Function Collapse paragraph */

    var elemDom = $('.pengantar-foto article p');
    var elemDomHeight = elemDom.eq(0).height();
    var autoHeight = $('.pengantar-foto article')
      .css('height', 'auto')
      .height();

    $('.pengantar-foto article').css({ height: elemDomHeight + 12 });

    var sts = false;

    $('#collapseBtn').click(function(e) {
      e.preventDefault();

      if (!sts) {
        sts = true;
        showHide($('.pengantar-foto article'), autoHeight);
        $(this).text('Tampilkan lebih sedikit');
        console.log(sts);
      } else {
        sts = false;
        showHide($('.pengantar-foto article'), elemDomHeight + 12);
        $(this).text('Selengkapnya');
        console.log(sts);
      }
    });

    function showHide(ele, h) {
      $(ele).animate({ height: h }, 300);
    }

    /* End Function */

    function topikExpand(n) {
      let $lh = $('.hasSubHalf ul li ul li').height();
      let $lp = $('.hasSubHalf ul li ul li').parent();
      var $ah = $lp.css('height', 'auto').height();
      let cekToggle;

      $lp.css({
        'overflow-y': 'hidden',
        height: $lh * n
      });

      $('a.toggleShow').click(function(e) {
        e.preventDefault();
        if (cekToggle) {
          showHide($lp, $lh * n);
          $(this).html('Topik Lainnya <i class="fa fa-chevron-down"></i>');
          cekToggle = false;
        } else {
          showHide($lp, $ah);
          $(this).html('Tampilkan beberapa <i class="fa fa-chevron-up"></i>');
          cekToggle = true;
        }
      });
    }

    $('.trigger-mnu').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$('.humburger-btn').hasClass('humTrigger')) {
        if ($('.layerSearch').hasClass('openSearch')) {
          $('.layerSearch').removeClass('openSearch');
          $('.wwNavigation-overlay').fadeOut();
        }
        $('nav.navigasi').toggleClass('mnuOpen');
        $('.humburger-btn').toggleClass('humTrigger');
        $('.wwNavigation-overlay').fadeIn();
      } else {
        $('.wwNavigation-overlay').fadeOut();
        $('.humburger-btn').removeClass('humTrigger');
        $('nav.navigasi').toggleClass('mnuOpen');
      }
    });

    $('.hasSub').on('click', function() {
      $(this).toggleClass('subClose');
      $(this)
        .children('ul')
        .slideToggle();
    });

    $('.hasSub a').on('click', function(e) {
      e.stopPropagation();
    });

    $('.cari-btn').click(function() {
      if (!$('.layerSearch').hasClass('openSearch')) {
        if ($('.humburger-btn').hasClass('humTrigger')) {
          $('.humburger-btn').removeClass('humTrigger');
          $('nav.navigasi').removeClass('mnuOpen');
          $('.wwNavigation-overlay').fadeOut();
        }
        $('.layerSearch').toggleClass('openSearch');
        $('.wwNavigation-overlay').fadeIn();
        $('#txtSearch').focus();
      } else {
        $('.layerSearch').removeClass('openSearch');
        $('nav.navigasi').removeClass('mnuOpen');
        $('.wwNavigation-overlay').fadeOut();
      }
    });

    // function kdParallax() {
    //   var parallax = new Rellax('.parallax', {
    //     center: true
    //   });
    // }

    // $('#trigger-mnu').on('click', function(e) {
    //   e.preventDefault();
    //   if (!$('.humburger-btn').hasClass('humTrigger')) {
    //     $(".wwNavigation-overlay").fadeIn();
    //     $('.humburger-btn').toggleClass('humTrigger');
    //   } else {
    //     $('.wwNavigation').fadeOut();
    //     $('.humburger-btn').toggleClass('humTrigger');
    //   }
    // });

    $('.wwNavigation-overlay').on('click', function() {
      $('.humburger-btn').removeClass('humTrigger');
      $('.layerSearch').removeClass('openSearch');
      $('nav.navigasi').removeClass('mnuOpen');
      $('.wwNavigation-overlay').fadeOut();
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

    /*** Tab Embed Script ***/
    let anchor = document.querySelectorAll('.tab-captions li a');
    let contentTabs = document.querySelectorAll('.tab-contents span');

    // Mengidentifikasi tag link dengan perulangan
    Array.from(anchor).forEach((elem, key) => {
      // Inisialisasi event Click
      elem.addEventListener('click', function(e) {
        e.preventDefault();
        // Mengambil nilai attribute href elemen aktif
        let href = e.target.getAttribute('href');

        // Kondisikan jika tab yg di klik bukan yang aktif,
        // maka hapus tab yg mempunyai class tab-current
        if (this.className.indexOf('tab-current') == -1) {
          // Lakukan perulangan untuk memeriksa tab yang -
          // memiliki class tab-current dan span tab yang -
          // memiliki class visible dan hapus jika ketemu
          for (var i = 0; i < anchor.length; i++) {
            anchor[i].classList.remove('tab-current');
            contentTabs[i].classList.remove('visible');
          }

          // Menambahkan class 'tab-current' untuk tab yang akan aktif -
          // dan menambahkan class 'visible' untuk span tab yang terkait
          this.classList.add('tab-current');
          document.getElementById(href).classList.add('visible');
        }
      });
    });
    /*** End ***/

    // var teaser = function(n) {
    //   $("#teaserFlip").hover(function(e) {
    // e.stopPropagation();
    //       $("#teaserFlip img")
    //         .stop()
    //         .animate({ width: "307px", height: "308px" }, 300);
    //       $("#teaserFlip .bannerTeaser")
    //         .stop()
    //         .animate({ width: "330px", height: "340px" }, 300);
    //     }, function() {
    //       $("#teaserFlip img")
    //         .stop()
    //         .animate({ width: n+"px", height: n+"px" }, 300);
    //       $(".bannerTeaser")
    //         .stop()
    //         .animate({ width: n+"px", height: n+"px" }, 300);
    // 	 });
    // }

    // (screen.width < 767) ? teaser(170) : teaser(210);

    var $isDetail = $('main').find('div').hasClass('detail-artikel');

    if ($isDetail) {
      tabling();
      // chNewsletterPlace();
    }

    function chNewsletterPlace() {
      var parentTxt = document.getElementsByClassName('textArticle')[0];
      var pTag = parentTxt.getElementsByTagName('p');
      var nl = document.querySelector('.newsletter.inDetail');
      var moveEl = document.querySelector('#sideBarDetail');

      if (pTag.length <= 5) {
        if (nl !== null) {
          moveEl.appendChild(nl);
        }
        return false;
      }
    }

    function tabling() {
      var $tbl = $('.textArticle').children('table'),
        $elC = $('<div/>', { class: 'style2' });
      $tbl.each(function(i) {
        var $this = $(this);
        $this.wrap($elC);
      });
    }

    var hdr = document.querySelector('#header');
    var clnMnu = document.querySelector('.clonedMnuHrz');
    var slMnu = document.querySelector('nav.navigasi');
    var lSearch = document.querySelector('div.layerSearch');

    // var isItScroll = true;

    // if(screen.width > 768) {
    // 	if(hdr) {
    // 		headSticky();
    // 	} else {
    // 		slMnu.style.top = "56px";
    // 	}
    // }

    if (hdr) {
      if (screen.width > 768) headSticky();
    } else {
      if (screen.width <= 768) {
        slMnu.style.top = '50px';
      } else {
        slMnu.style.top = '57px';
      }
    }

    //   slMnu.style.top = "56px";

    /*** Head Sticky ***/
    function headSticky() {
      window.addEventListener('scroll', function(event) {
        var getY = this.pageYOffset;

        if (getY > 200) {
          clnMnu.classList.add('clonedShow');
        } else {
          clnMnu.classList.remove('clonedShow');
        }

        if (getY > 100) {
          hdr.classList.add('scrollingUp');
        } else if (getY < 2) {
          hdr.classList.remove('scrollingUp');
        } else {
          return;
        }

        if (!hdr.classList.contains('scrollingUp')) {
          // slMnu.style.top = '113px';
          slMnu.removeAttribute('style');
          lSearch.removeAttribute('style');
        } else {
          slMnu.style.top = '50px';
          lSearch.style.top = '50px';
        }
      });
    }
    /*** End ***/

    /*** Button Go to Up ***/
    function btnGoUp() {
      var $gotoUp = $('a.goUp');
      $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        var tinggiMin = 800; // Setting minimal tinggi scroll

        if (topPos > tinggiMin) {
          $gotoUp.css({
            opacity: 1,
            bottom: 90
          });
        } else {
          $gotoUp.css({
            opacity: 0,
            bottom: -100
          });
        }
      });

      $('a.goUp').on('click', function(a) {
        a.preventDefault();
        $('html, body').animate(
          {
            scrollTop: 0
          },
          {
            duration: 1500
          }
        );
        return false;
      });
    }
    /*** End ***/

    function stickyBanner() {
      // var $isLongForm = $('main').find('section').hasClass('longform');
      // !$isLongForm && 
      setTimeout(() => $('.wrapStickyBanner').addClass('openStickyBanner'), 2000);

      $('.closeAds').click(function(e) {
        e.preventDefault();
        $('.wrapStickyBanner').hasClass('openStickyBanner') && 
        $('.wrapStickyBanner').removeClass('openStickyBanner') &&
        setTimeout(() => {
          $('.wrapStickyBanner').fadeOut()
        }, 400);
      })
    }

    /*** Search Box ***/
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
        $('#txtSearch')
          .val('')
          .siblings('.clearTxt')
          .fadeOut(200);
      });
    }
    /*** End ***/

    function kdTime() {
      $('#tgl-lahir').datetimepicker({
        format: 'DD-MM-YYYY'
      });
      $('#fromDate').datetimepicker({
        format: 'DD-MM-YYYY'
      });
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
    }

    if (screen.width > 768) {
      $('.itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li, .opini ul li, .itemList').matchHeight();
    }

    // function fotoReveal() {
    //   window.sr = ScrollReveal();
    //   sr.reveal('.parallax', {
    //     reset: true,
    //     duration: 1500,
    //     mobile: true
    //   });
    // }

    // var myMnu = new mlPushMenu(
    //   document.getElementById('mp-menu'),
    //   document.getElementById('trigger'),
    //   { type: 'cover' }
    // );

    // $('.btn-hum').on('click', function() {
    //   if($('.layerSearch').hasClass('openSearch')) {
    //     // $('.layerSearch').toggleClass('openSearch');
    //     $('.wwNavigation-overlay').fadeOut();
    //   }
    // });

    // $('.cari-btn').on('click', function() {
    //   // eve.preventDefault();
    //   if (myMnu.open) {
    //     myMnu._resetMenu();
    //     $('.humburger-btn').toggleClass('humTrigger');
    //     $('.layerSearch').toggleClass('openSearch');
    //     $('.wwNavigation-overlay').fadeIn();
    //   } else {
    //     $('.layerSearch').toggleClass('openSearch');
    //     $('.wwNavigation-overlay').fadeIn();
    //     if (!$('.layerSearch').hasClass('openSearch')) {
    //       $('.wwNavigation-overlay').fadeOut(300);
    //     }
    //   }
    // });

    // $('.wwNavigation-overlay').on('click', function() {
    // $('.layerSearch').toggleClass('openSearch');
    // 	$('.wwNavigation-overlay').fadeOut();
    // });

    // $(window).on('resize.slickVideoPlayer', function() {
    //   resizePlayer(iframes, 21 / 9);
    // });

    // var tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // var firstST = document.getElementsByTagName('script')[0];
    // firstST.parentNode.insertBefore(tag, firstST);

    // console.log(firstST);

    // function onYouTubeIframeAPIReady() {
    //   var player = new YT.Player('yt', {
    //     events: {
    //       onReady: onPlayerReady
    //     }
    //   });
    // }

    // function onPlayerReady(e) {
    //   e.target.playVideo();
    //   console.log('Testing');
    // }

    // $('.inovasi-thumb h3:after').css({
    // 	position: 'absolute',
    // 	content: '',
    // 	top: '2px',
    // 	right: '10px',
    // 	display: 'block',
    // 	width: '300px',
    // 	height: '1px',
    // 	backgroundColor: '#000'
    // });

    kdSlider();
    btnGoUp();
    kdTime();
    searcPanel();
    removeEmptyTeks();
    topikExpand(5);
    stickyBanner();
    // kdParallax();
  })();
});
