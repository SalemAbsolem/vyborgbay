document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  if(!preloader) {
    return;
  }
  const body = document.body;
  preloader.style.opacity = 1;
  preloader.style.visibility = 'visible';
  body.setAttribute('style', 'overflow: hidden;');
});

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if(!preloader) {
    return;
  }
  const body = document.body;
  setTimeout(() => {
    preloader.style.opacity = 0;
    preloader.style.visibility = 'hidden';
    body.removeAttribute('style', 'overflow: hidden;');
    setTimeout(() => {
      preloader.style.zIndex = -1;
      preloader.style.display = 'none';
    }, 300);
  }, 1000);
});
