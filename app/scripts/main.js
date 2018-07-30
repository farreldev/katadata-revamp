$(function() {
	var kd = (function() {
		var slideWrapper = $('.video-slider'),
			iframes = slideWrapper.find('.embed-player'),
			lazyImages = slideWrapper.find('.slide-image'),
			lazyCounter = 0;

		var $fotoList = $('.foto-slider'),
			slideCount = null;

		$fotoList.on('init', function(event, slick) {
			slideCount = slick.slideCount;
			$('.counter-text').find('.totImg').text(slideCount);
			setCurrentCounter(slick.currentSlide);
		});

		$fotoList.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
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
				responsive: [{
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
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						autoplay: false,
						prevArrow: '.prevArrowNav3',
						nextArrow: '.nextArrowNav3'
					}
				}]
			});

			$('.ekonoGraphics').slick({
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: false, // .prevArrowNav2
				nextArrow: false, // .nextArrowNav2
				responsive: [{
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

		slideWrapper.on('lazyLoaded', function(event, slick, image, imageSource) {
			lazyCounter++;
			if (lazyCounter === lazyImages.length) {
				lazyImages.addClass('show');
				slideWrapper.slick('slickPlay');
			}
		});

		var btnTrigger = document.querySelector('div.videoInfo');
		if (btnTrigger) {
			btnTrigger.addEventListener('click', function(ev) {
				if (ev.offsetX < btnTrigger.offsetWidth) {
					btnTrigger.classList.toggle('closeInfo');
				}
			}, false);
		}

		// Counter Slider img

		/*** Sticky Footer ***/
		function stickyFooter() {
			var ua = navigator.userAgent.toLowerCase();
			var $tinggiFooter = $('.contentWrapper').find('.footer').height();

			$('.wrapper .contentWrapper').css('paddingBottom', $tinggiFooter + 25);

			if (ua.indexOf('safari') != -1) {
				if (ua.indexOf('chrome') > -1) {
					$('.wrapper .contentWrapper').css('paddingBottom', $tinggiFooter + 25);
				} else {
					$('.wrapper .contentWrapper').css('paddingBottom', $tinggiFooter + 25);
				}
			}
		}
		/*** End ***/

		window.onload = stickyFooter;
		window.onresize = stickyFooter;

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
		var autoHeight = $('.pengantar-foto article').css('height', 'auto').height();
		
		$('.pengantar-foto article').css({ height: elemDomHeight + 12 })
		
		var sts = false;

		$('#collapseBtn').click(function(e) {
			e.preventDefault();

			if(!sts) {
				sts = true;
				showHide($('.pengantar-foto article'), autoHeight);
				$(this).text('Tampilkan lebih sedikit')
				console.log(sts);
			} else {
				sts = false;
				showHide($('.pengantar-foto article'), elemDomHeight + 12)
				$(this).text('Selengkapnya')
				console.log(sts);
			}
		})
		
		function showHide(ele, h) {
			$(ele).animate({
				height: h
			}, 300);
		}

		/* End Function */





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
			$(this).children('ul').slideToggle();
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
		})
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
			chNewsletterPlace();
		}

		function chNewsletterPlace() {

			var parentTxt = document.getElementsByClassName('textArticle')[0];
			var pTag = parentTxt.getElementsByTagName('p');
			var nl = document.querySelector('.newsletter.inDetail');
			var moveEl = document.querySelector('#sideBarDetail');

			if(pTag.length <= 5) {
				if(nl !== null) {
					moveEl.appendChild(nl);
				}
				return false
			};
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
				$('html, body').animate({
					scrollTop: 0
				}, {
					duration: 1500
				});
				return false;
			});
		}
		/*** End ***/

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
				$('#txtSearch').val('').siblings('.clearTxt').fadeOut(200);
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
				$('#toDate').data('DateTimePicker').minDate(ed.date);
			});

			$('#toDate').on('dp.change', function(ed) {
				$('#fromDate').data('DateTimePicker').maxDate(ed.date);
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
			$('.itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li, .opini ul li').matchHeight();
		}

		// function fotoReveal() {
		// 	window.sr = ScrollReveal();
		// 	sr.reveal('.foto-detail .fotoStory div.fotoItem', {
		// 		opacity: 0,
		// 		easing: 'ease',
		// 		duration: 1500,
		// 		mobile: true,
		// 		origin: 'bottom',
		// 		distance: '80px'
		// 	});
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
		// fotoReveal();
	})();
});