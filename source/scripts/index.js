// var BookingIframe = new BookingIframe({
//   html_id: 'booking_iframe',
//   uid: 'c5c1ddb7-46a0-449a-984a-928f829675e5',
//   lang: 'ru',
//   width: 'auto',
//   height: 'auto',
//   rooms: '',
//   scroll_to_rooms: '1'
// });
// BookingIframe.init();

// const moduleBooking = document.querySelector('#booking_iframe iframe');
// moduleBooking.addEventListener('load', function sizeIframe() {
//   const repeatInterval = setInterval(() => {
//     if(moduleBooking.style.height !== '300px') {
//       moduleBooking.style.minHeight = '300px';
//       moduleBooking.style.height = '300px';
//     } else {
//       clearInterval(repeatInterval);
//       moduleBooking.removeEventListener('load', sizeIframe);
//     }
//   }, 100);

// });

// Брейкпоинты
const mobileOnlyBP = window.matchMedia('screen and (max-width: 767.98px)');
const notLargeDesctopBP = window.matchMedia('screen and (max-width: 1919.98px)');
const tabletOnlyBP = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199.98px)');
const smallDesctopOnlyBP = window.matchMedia('screen and (min-width: 1200px) and (max-width: 1919.98px)');
const feedbackBlockBP = window.matchMedia('screen and (max-width: 480.98px)');

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

//  Масштабирование

let widthScreen = window.innerWidth;

let scale;
if(mobileOnlyBP.matches) {
  scale = widthScreen / 320;
} else if(tabletOnlyBP.matches) {
  scale = widthScreen / 768;
} else if(smallDesctopOnlyBP.matches) {
  scale = widthScreen / 1200;
}

if(notLargeDesctopBP.matches) {
  const sectionOnMain = document.querySelectorAll('.main__section:not(.feedback)');
  const sectionFeedback = document.querySelector('.main__section.feedback');
  const sectionFeedbackTitle = sectionFeedback.querySelector('.main__section-title');
  const sectionFeedbackWidjet = sectionFeedback.querySelector('.sw-app');

  if(scale >= 1) {
    header.setAttribute('style', `zoom: ${scale}`);

    for(let i = 0; i < sectionOnMain.length; i++) {
      sectionOnMain[i].setAttribute('style', `zoom: ${scale}`);
    }

    sectionFeedbackTitle.setAttribute('style', `zoom: ${scale}`);
    if(feedbackBlockBP.matches) {
      sectionFeedbackWidjet.setAttribute('style', `zoom: ${scale}`);
    }

    footer.setAttribute('style', `zoom: ${scale}`);
  }

  window.addEventListener('resize', () => {
    widthScreen = window.innerWidth;

    if(mobileOnlyBP.matches) {
      scale = widthScreen / 320;
    } else if(tabletOnlyBP.matches) {
      scale = widthScreen / 768;
    } else if(smallDesctopOnlyBP.matches) {
      scale = widthScreen / 1200;
    }

    if(scale >= 1) {
      header.setAttribute('style', `zoom: ${scale}`);

      for(let i = 0; i < sectionOnMain.length; i++) {
        sectionOnMain[i].setAttribute('style', `zoom: ${scale}`);
      }

      sectionFeedbackTitle.setAttribute('style', `zoom: ${scale}`);
      if(feedbackBlockBP.matches) {
        sectionFeedbackWidjet.setAttribute('style', `zoom: ${scale}`);
      }

      footer.setAttribute('style', `zoom: ${scale}`);
    }
  });
}

// Открытие меню

const menuButton = header.querySelector('.button--menu');
const menuButtonText = menuButton.querySelector('.button__text');
const menu = header.querySelector('.site-navigation.site-navigation--header');
const pageList = menu.querySelectorAll('.pages-list__item').length;

let menuHeight;

if(mobileOnlyBP.matches) {
  menuHeight = 150 + (39 * pageList) - 10;
} else if(tabletOnlyBP.matches || smallDesctopOnlyBP.matches) {
  menuHeight = 250 + (44 * pageList) - 10;
}

menuButton.addEventListener('click', () => {
  header.classList.toggle('header--nav-is-open');
  menu.classList.toggle('site-navigation--is-open');

  if(menu.classList.contains('site-navigation--is-open')) {
    menuButtonText.textContent = 'Закрыть';
    menuButton.classList.add('button--brown-white');
    menuButton.classList.remove('button--white-brown');
    menu.style.height = `${menuHeight}px`;
  } else {
    menuButtonText.textContent = 'Меню';
    menuButton.classList.remove('button--brown-white');
    menuButton.classList.add('button--white-brown');
    menu.style.height = '';
  }
});

// Аккордион в футере

if(mobileOnlyBP.matches) {
  const footerGroups = footer.querySelectorAll('.footer__column--accordion');
  const footerTitles = [];
  const groupsHeight = [];
  const titleHeight = [];

  for(let i = 0; i < footerGroups.length; i++) {
    footerTitles[i] = footerGroups[i].querySelector('.footer__column-title');
    titleHeight[i] = footerTitles[i].clientHeight;
    groupsHeight[i] = footerGroups[i].clientHeight;

    for(let j = 0; j < footerGroups.length; j++) {
      footerGroups[j].style.height = `${titleHeight[j]}px`;
    }

    footerGroups[0].style.height = `${groupsHeight[0]}px`;

    footerTitles[i].addEventListener('click', () => {
      for(let j = 0; j < footerGroups.length; j++) {
        footerGroups[j].classList.remove('footer__column--active');
        footerGroups[j].style.height = `${titleHeight[j]}px`;
      }
      footerGroups[i].classList.add('footer__column--active');
      footerGroups[i].style.height = `${groupsHeight[i]}px`;
    });
  }
}


// увеличение фона при наведении на кнопку
const locationBlock = document.querySelector('.main__section.location');
const locationCards = locationBlock.querySelectorAll('.cards__item');
let locationBackground;

for(let i = 0; i < locationCards.length; i++) {
  locationCards[i].addEventListener('mouseover', (e) => {
    locationBackground = locationCards[i].querySelector('.cards__background');

    if(e.target.classList.contains('cards__button') || e.target.classList.contains('button__text')) {
      locationBackground.classList.add('cards__background--scale-on-hover');
    }
  });

  locationCards[i].addEventListener('mouseout', (e) => {
    locationBackground = locationCards[i].querySelector('.cards__background');

    if(e.target.classList.contains('cards__button') || e.target.classList.contains('button__text')) {
      locationBackground.classList.remove('cards__background--scale-on-hover');
    }
  });
}

const activityBlock = document.querySelector('.main__section.activity');
const activityCards = activityBlock.querySelectorAll('.activity__item');
let activityBackground;

for(let i = 0; i < activityCards.length; i++) {
  activityCards[i].addEventListener('mouseover', (e) => {
    activityBackground = activityCards[i].querySelector('.activity__background');

    if(e.target.classList.contains('activity__button') || e.target.classList.contains('button__text')) {
      activityBackground.classList.add('activity__background--scale-on-hover');
    }
  });

  activityCards[i].addEventListener('mouseout', (e) => {
    activityBackground = activityCards[i].querySelector('.activity__background');

    if(e.target.classList.contains('activity__button') || e.target.classList.contains('button__text')) {
      activityBackground.classList.remove('activity__background--scale-on-hover');
    }
  });
}
