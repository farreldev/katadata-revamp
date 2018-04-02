var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$('main').scroll(function(event) {
  didScroll = true;
});


setInterval(function() {
   if (didScroll) {
      hasScrolled();
      didScroll = false;
   }
}, 50);

function hasScrolled() {
   var st = $('main').scrollTop();
   
   if (Math.abs(lastScrollTop - st) <= delta) return;
   
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('header#header').removeClass('timbul').addClass('scrollingUp');
  } else {
    if (st + $('main').height() < $('.contentWrapper').height() || st === 0) {
      $('header#header')
        .removeClass('scrollingUp')
        .addClass('timbul');
    }
  }

  lastScrollTop = st;
}