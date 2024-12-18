// Брейкпоинты
const mobileOnlyBP = window.matchMedia('screen and (max-width: 767.98px)');
const tabletOnlyBP = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199.98px)');
const smallDesktopOnlyBP = window.matchMedia('screen and (min-width: 1200px) and (max-width: 1919.98px)');
const largeDesktopOnlyBP = window.matchMedia('screen and (min-width: 1920px)');
const desktopOnlyBP = window.matchMedia('screen and (min-width: 1200px)');
const notDesktopBP = window.matchMedia('screen and (max-width: 1199.98px)');
const notLargeDesktopBP = window.matchMedia('screen and (max-width: 1919.98px)');
const feedbackBlockBP = window.matchMedia('screen and (max-width: 480.98px)');

// Части страницы
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
const footer = document.querySelector('.footer');

//  Масштабирование
import { scalingPage } from './scaling';
scalingPage(mobileOnlyBP, tabletOnlyBP, notDesktopBP, feedbackBlockBP, header, footer);
window.addEventListener('resize', () => {
  scalingPage(mobileOnlyBP, tabletOnlyBP, notDesktopBP, feedbackBlockBP, header, footer);
});

window.addEventListener('orientationchange', () => {
  scalingPage(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, notLargeDesktopBP, feedbackBlockBP, header, footer);
});

// Куки
import { checkCookies } from './cookie';
checkCookies();

// Слайдеры
import {heroSliderInit, interierSliderInit, housesSliderInit} from './sliders';
window.addEventListener('load', () => {
  heroSliderInit(mobileOnlyBP, tabletOnlyBP);
  interierSliderInit();
  housesSliderInit();
});

// Фото и Видео фоны
// import {blockBackgroundInit} from './create-function';
// window.addEventListener('load', () => {
//   blockBackgroundInit('.hero-block', mobileOnlyBP, tabletOnlyBP);
// });

// Модуль бронирования
import { bookingModuleResize } from './booking-resize';
document.addEventListener('DOMContentLoaded', bookingModuleResize(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, largeDesktopOnlyBP));

// ЯндексКарты
import {initYmap} from './ymap';
window.addEventListener('load', () => {
  /* eslint-disable */
  try {
    ymaps.ready(initYmap);
  } catch {}
  // if(ymaps !== undefined) {
  //   ymaps.ready(initYmap);
  // }
  /* eslint-enable */
});

// Фиксирование меню снизу
import { menuBottomFixed } from './fix-bottom-menu';
window.addEventListener('scroll', () => {
  menuBottomFixed(header, headerHeight, footer);
});

// Открытие меню
import { toggleMenu } from './open-menu';
toggleMenu(mobileOnlyBP, tabletOnlyBP, smallDesktopOnlyBP, largeDesktopOnlyBP, header);

// Аккордион в футере

import { accordion } from './accordion';
document.addEventListener('DOMContentLoaded', accordion(mobileOnlyBP, footer));
// window.addEventListener('resize', () => {
//   accordion(mobileOnlyBP, footer);
// });

// window.addEventListener('orientationchange', () => {
//   accordion(mobileOnlyBP, footer);
// });

// увеличение фона при наведении на кнопку
import { imgZoomCard } from './img-zoom';
imgZoomCard('.main__section.location');
imgZoomCard('.main__section.activity');

// Показать больше
import {showMoreCard, showMoreText, showMoreServiceText} from './show-more';
showMoreCard('.activity', mobileOnlyBP, tabletOnlyBP, desktopOnlyBP);
showMoreText('.about__text', mobileOnlyBP);
showMoreServiceText('.service-about__text-wrap', mobileOnlyBP, tabletOnlyBP);

// табы
import {tabsInit} from './tabs';
tabsInit('.activity', '.button--tab', ['button--white-brown', 'button--white-green'], ['button--brown-white', 'button--green-white'], '.activity__list--tab', 'activity__list--is-active', mobileOnlyBP, tabletOnlyBP, desktopOnlyBP);

// Попап для карты с табами
import {popupInit, popupTabInit} from './popup-route';
popupInit('popup-route');
popupTabInit('popup-route');
