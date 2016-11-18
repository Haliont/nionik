import nodeListToArray from '../utils/node-list-to-array.js';

export default function initMenu() {
	const show = document.querySelector('[data-menu="show"]');
	const hide = document.querySelector('[data-menu="hide"]');
	const menu = document.querySelector('[data-menu="true"]');
	
	show.addEventListener('click', () => {
		menu.setAttribute('data-menu-visible', 'true');
	});

	hide.addEventListener('click', () => {
		menu.removeAttribute('data-menu-visible');
	});
}
