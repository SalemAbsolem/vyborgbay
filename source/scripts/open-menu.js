const toggleMenu = (mobile, tablet, desktopS, desktopL, header) => {
  if(!header) {
    return;
  }
  const menuButton = header.querySelector('.button--menu');
  if(!menuButton) {
    return;
  }
  const menuButtonText = menuButton.querySelector('.button__text');
  const menu = header.querySelector('.site-navigation.site-navigation--header');
  if(!menu) {
    return;
  }
  const pageList = menu.querySelectorAll('.pages-list__item').length;

  let menuHeight;

  if(mobile.matches) {
    menuHeight = 150 + (39 * pageList) - 10;
  } else if(tablet.matches || desktopS.matches) {
    menuHeight = 250 + (44 * pageList) - 10;
  } else if(desktopL.matches) {
    menuHeight = 300 + (74 * pageList) - 20;
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
};

export {toggleMenu};
