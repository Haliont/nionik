import initShowable from './modules/showable';
import initPinnedTopbar from './modules/pinned-topbar';


document.addEventListener('DOMContentLoaded', () => {
	initShowable();
	initPinnedTopbar();

	const youtubeAPIScript = document.createElement('script');
	youtubeAPIScript.src = '//www.youtube.com/iframe_api';
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(youtubeAPIScript, firstScriptTag);

	window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
		window.videoPlayer = new YT.Player('video', {
			height: '360',
			width: '640',
			videoId: '4KKuEw3mHGc',
		});
	}
});
