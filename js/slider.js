"use strict";

const popularSlider = new Swiper('.section-popular__slider', {
	spaceBetween: 10,
	slidesOffsetAfter: 15,
	slidesOffsetBefore: 15,
	slidesPerView: 1.5,
});

const storySlider = new Swiper('.section-story__slider', {
	spaceBetween: 10,
	slidesOffsetAfter: 15,
	slidesOffsetBefore: 15,
	slidesPerView: 3.5,
});