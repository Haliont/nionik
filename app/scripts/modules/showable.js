import nodeListToArray from '../utils/node-list-to-array.js';

export default function initMenu() {
	const showButtons = nodeListToArray(document.querySelectorAll('[data-show]'));
	const hideButtons = nodeListToArray(document.querySelectorAll('[data-hide]'));

	showButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const target = button.getAttribute('data-show');
			document.querySelector(`[data-target="${target}"]`).setAttribute('data-visible', 'true');
		});
	});

	hideButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const target = button.getAttribute('data-hide');

			if (target === 'video' && window.videoPlayer) {
				window.videoPlayer.pauseVideo();
			}

			document.querySelector(`[data-target="${target}"]`).setAttribute('data-visible', 'false');
		});
	});
}
