// Брейкпоинты
const mobileOnlyBP = window.matchMedia('screen and (max-width: 767.98px)');
const tabletOnlyBP = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199.98px)');
const smallDesktopOnlyBP = window.matchMedia('screen and (min-width: 1200px) and (max-width: 1919.98px)');
const largeDesktopOnlyBP = window.matchMedia('screen and (min-width: 1920px)');
const notLargeDesktopBP = window.matchMedia('screen and (max-width: 1919.98px)');
const feedbackBlockBP = window.matchMedia('screen and (max-width: 480.98px)');

// Части страницы
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

//  Масштабирование
import { scalingPage } from './scaling';
scalingPage(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, notLargeDesktopBP, feedbackBlockBP, header, footer);
window.addEventListener('resize', () => {
  scalingPage(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, notLargeDesktopBP, feedbackBlockBP, header, footer);
});

window.addEventListener('orientationchange', () => {
  scalingPage(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, notLargeDesktopBP, feedbackBlockBP, header, footer);
});

// Слайдеры
import {heroSliderInit, interierSliderInit, housesSliderInit} from './sliders';
heroSliderInit(mobileOnlyBP, tabletOnlyBP);
interierSliderInit();
housesSliderInit();

// Модуль бронирования
import { bookingModuleResize } from './booking-resize';
bookingModuleResize(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, largeDesktopOnlyBP);

// ЯндексКарты
import {initYmap} from './ymap';
window.addEventListener('load', () => {
  /* eslint-disable */
  ymaps.ready(initYmap);
  /* eslint-enable */
});

// Открытие меню
import { toggleMenu } from './open-menu';
toggleMenu(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, largeDesktopOnlyBP, header);

// Аккордион в футере

import { accordion } from './accordion';
accordion(mobileOnlyBP, footer);
window.addEventListener('resize', () => {
  accordion(mobileOnlyBP, footer);
});

window.addEventListener('orientationchange', () => {
  accordion(mobileOnlyBP, footer);
});

// увеличение фона при наведении на кнопку
import { imgZoomCard } from './img-zoom';
imgZoomCard('.main__section.location');
imgZoomCard('.main__section.activity');
