"use strict";

const headerMenu = document.querySelector('.header__menu');

if (headerMenu) {
	const buttonBurger = document.querySelector('.burger-icon');
	buttonBurger.addEventListener('click', () => {
		document.querySelector('.logo').classList.toggle('_active');
		buttonBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}