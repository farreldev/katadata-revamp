var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  var $cekMnu = $('div.humburger-btn').hasClass('humTrigger'),
      $cekSearch = $('div.layerSearch').hasClass('openSearch');
   if (didScroll && !$cekMnu && !$cekSearch) {
      hasScrolled();
      didScroll = false;
   }
}, 250);

function hasScrolled() {
   var st = $(window).scrollTop();
   
   if (Math.abs(lastScrollTop - st) <= delta) return;
   
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('header#header').removeClass('timbul').addClass('scrollingUp');
  } else {
    if (st + $(window).height() < $(document).height() || st === 0) {
      $('header#header')
        .removeClass('scrollingUp')
        .addClass('timbul');
    }
  }

  lastScrollTop = st;
}