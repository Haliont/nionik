import throttle from 'lodash.throttle';

export default function initPinnedTopbar() {
	const topbar = document.querySelector('.topbar--pinned');
	topbar.setAttribute('data-visible', 'false');
	toggleTopbar();

	window.addEventListener('scroll', throttle(toggleTopbar, 100));

	function toggleTopbar() {
		if (window.scrollY > 160) {
			topbar.setAttribute('data-visible', 'true');
		} else {
			topbar.setAttribute('data-visible', 'false');
		}
	}
}
