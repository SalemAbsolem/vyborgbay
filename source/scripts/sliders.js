import Swiper from 'swiper';
import { Autoplay, Pagination, Thumbs, Navigation, Scrollbar } from 'swiper/modules';
import { paginationInit, videoSlideInit, textInterierInit } from './create-function';


const heroSliderInit = (mobile, tablet) => {
  paginationInit('.hero-slider__container', 'slides');
  videoSlideInit('.hero-slider__container', 'slides', mobile, tablet);

  const thumbHeroSlider = new Swiper('.hero-slider__pagination', {
    wrapperClass: 'pagination__wrap',
    slideClass: 'pagination__slide',
    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      1920: {
        spaceBetween: 20,
        slidesPerView: 10,
      },
    },
    freeMode: true,
    watchSlidesProgress: true,
    roundLengths: true,
  });

  /*const heroSlider = */new Swiper('.hero-slider__container', {
    modules: [Autoplay, Pagination, Thumbs],
    wrapperClass: 'hero-slider__wrap',
    slideClass: 'hero-slider__slide',
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    thumbs: {
      swiper: thumbHeroSlider,
    },
    roundLengths: true,
    on: {
      autoplayTimeLeft(s, time, progress) {
        const timerSvg = document.querySelector('.swiper-slide-thumb-active .pagination__timer');
        const timerSvgs = document.querySelectorAll('.pagination__timer');
        for(let i = 0; i < timerSvgs.length; i++) {
          timerSvgs[i].style.setProperty('--progress', 0);
        }
        timerSvg.style.setProperty('--progress', 1 - progress);
      }
    }
  });
};

const interierSliderInit = () => {
  /*const interierSlider = */new Swiper('.interier-slider', {
    modules: [Autoplay, Navigation],
    wrapperClass: 'interier-slider__wrap',
    slideClass: 'interier-slider__item',
    navigation: {
      nextEl: '.interier-slider__button-next',
      prevEl: '.interier-slider__button-prev',
    },
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    on: {
      init: function () {
        textInterierInit('.interier-slider');
      },

      slideChange: function () {
        textInterierInit('.interier-slider');
      },
    },
  });
};

const housesSliderInit = () => {
  /*const housesSlider = */new Swiper('.houses__slider', {
    modules: [Autoplay, Navigation, Scrollbar],
    wrapperClass: 'houses__wrap',
    slideClass: 'houses__card',
    navigation: {
      nextEl: '.houses__button-next',
      prevEl: '.houses__button-prev',
    },
    scrollbar: {
      el: '.houses__scroll-bar',
      draggable: true,
      dragClass: 'houses__scrollbar-drag',
      // snapOnRelease: true,
    },
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 20,
        centeredSlides: true,
        // loop: true,
      },
      1200: {
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
    },
  });
};

export {heroSliderInit, interierSliderInit, housesSliderInit};
