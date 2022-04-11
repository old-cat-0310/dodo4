"use strict";

const menuLinks = document.querySelectorAll('.main-navigation__link[data-goto]');

if (menuLinks.length > 0) {
	const menuLinksActives = document.getElementsByClassName('link_active');

	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	const mainNavigation = document.querySelector('.main-navigation');

	window.addEventListener('scroll', () => {
		const mainNavigationPosition = mainNavigation.getBoundingClientRect().top + pageYOffset;
		console.log(pageYOffset);
		if (pageYOffset >= mainNavigationPosition) {
			mainNavigation.classList.add('_sticky');
		} else {
			mainNavigation.classList.remove('_sticky');
		}

		menuLinks.forEach(menuLink => {
			const child = menuLink;
			const parent = child.parentNode;
			const gotoBlock = document.getElementById(child.dataset.goto);
			const gotoBlockPositionTop = gotoBlock.getBoundingClientRect().top + pageYOffset - mainNavigation.clientHeight - 30;
			const gotoBlockPositionBottom = gotoBlock.getBoundingClientRect().bottom + pageYOffset - mainNavigation.clientHeight;

			if (pageYOffset > gotoBlockPositionTop && pageYOffset < gotoBlockPositionBottom) {
				parent.classList.add('link_active');
			} else {
				parent.classList.remove('link_active');
			}
		});
	});

	function onMenuLinkClick(e) {
		const child = e.target;
		const parent = child.parentNode;

		if (child.dataset.goto && document.getElementById(child.dataset.goto)) {
			const gotoBlock = document.getElementById(child.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}