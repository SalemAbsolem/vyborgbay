const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);

  if(className) {
    element.classList.add(className);
  }

  if(text) {
    element.innerHTML = text;
  }

  return element;
};

const makeThumb = (src) => {
  const item = makeElement('li', 'pagination__slide');
  const thumb = makeElement('div', 'pagination__thumb');
  thumb.style.backgroundImage = `url("${src}")`;

  item.appendChild(thumb);

  const timerSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // makeElement('svg', 'pagination__timer');
  timerSvg.classList.add('pagination__timer');
  timerSvg.setAttribute('width', '38');
  timerSvg.setAttribute('height', '38');
  timerSvg.setAttribute('viewBox', '0 0 38 38');
  timerSvg.setAttribute('fill', 'none');
  timerSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const rect = document.createElementNS(timerSvg.namespaceURI, 'rect');
  rect.setAttribute('x', '1');
  rect.setAttribute('y', '1');
  rect.setAttribute('width', '36');
  rect.setAttribute('height', '36');
  rect.setAttribute('rx', '12');
  rect.setAttribute('ry', '12');
  timerSvg.appendChild(rect);

  item.appendChild(timerSvg);

  return item;
};

const paginationInit = (sliderClass, slideClass) => {
  const slider = document.querySelector(sliderClass);
  const backgroundSlides = slider.querySelectorAll(`.${slideClass}__background`);
  const paginationBlock = slider.querySelector('.pagination');
  const paginationWrap = paginationBlock.querySelector('.pagination__wrap');

  for(let i = 0; i < backgroundSlides.length; i++) {
    paginationWrap.appendChild(makeThumb(backgroundSlides[i].dataset.imageSrc));
  }
};

const makeVideoBg = (src) => {
  const source = `<source type="video/mp4" src="${src}">`;

  return source;
};

const videoSlideInit = (sliderClass, slideClass, mobile, tablet) => {
  const slider = document.querySelector(sliderClass);
  const videoSlide = slider.querySelectorAll(`.${slideClass}__item--video`);

  for(let i = 0; i < videoSlide.length; i++) {
    const backgroundSlides = videoSlide[i].querySelector(`.${slideClass}__background`);
    const video = backgroundSlides.querySelector('video');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('playsinline', '');

    if(mobile.matches || tablet.matches) {
      video.innerHTML = makeVideoBg(backgroundSlides.dataset.videoVerticalSrc);
    } else {
      video.innerHTML = makeVideoBg(backgroundSlides.dataset.videoHorizontalSrc);
    }
  }
};
//swiper-slide-active
const textInterierInit = (sliderClass) => {
  const slider = document.querySelector(sliderClass);
  const textSlide = slider.querySelector('.interier-slider__text');

  const changeInterval = setInterval(() => {
    const activeSlide = slider.querySelector('.swiper-slide-active');
    const activeText = activeSlide.dataset.textSlider;

    if(textSlide.textContent !== activeText) {
      textSlide.textContent = activeText;
    } else {
      clearInterval(changeInterval);
    }
  }, 100);
};

export {paginationInit, videoSlideInit, textInterierInit};
