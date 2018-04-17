var tag = document.createElement('script');
var firstST = document.getElementsByTagName('script')[0];

tag.src = 'https://www.youtube.com/iframe_api';
firstST.parentNode.insertBefore(tag, firstST);

var player;
var elemHead = document.getElementById('header-alt-1');

function onYouTubeIframeAPIReady() {
	player = new YT.Player('yt', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(e) {
	e.target.playVideo();
	setTimeout(function() {
		elemHead.classList.add('hilang');
	}, 3000);
}

function onPlayerStateChange(e) {
	if (e.data == YT.PlayerState.PLAYING || e.data == YT.PlayerState.BUFFERING || e.data == -1) {
		elemHead.classList.add('hilang');
	} else {
		elemHead.classList.remove('hilang');
	}
}