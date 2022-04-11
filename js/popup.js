"use strict";

const buttonInfo = document.querySelector('.info__icon');
const buttonInfoClose = document.querySelector('.popup__close');

buttonInfo.addEventListener('click', () => {
	document.querySelector('.popup').classList.toggle('_active');
});

buttonInfoClose.addEventListener('click', () => {
	document.querySelector('.popup').classList.remove('_active');
});
