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

const header = document.querySelector('.header');
const menuButton = header.querySelector('.button--menu');
const menuButtonText = menuButton.querySelector('.button__text');
const menu = header.querySelector('.site-navigation.site-navigation--header');

menuButton.addEventListener('click', () => {
  header.classList.toggle('header--nav-is-open');
  menu.classList.toggle('site-navigation--is-open');

  if(menu.classList.contains('site-navigation--is-open')) {
    menuButtonText.textContent = 'Закрыть';
    menuButton.classList.add('button--brown-white');
    menuButton.classList.remove('button--white-brown');
  } else {
    menuButtonText.textContent = 'Меню';
    menuButton.classList.remove('button--brown-white');
    menuButton.classList.add('button--white-brown');
  }
});
