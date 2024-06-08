const widthChildFunc = (listClass, itemClass, gap) => {
  const list = document.querySelector(listClass);
  const listWidth = list.clientWidth;
  const items = list.querySelectorAll(itemClass);
  let itemsWidth = 0;

  for(let i = 0; i < items.length; i++) {
    if(gap) {
      itemsWidth = itemsWidth + items[i].clientWidth;
      itemsWidth = itemsWidth + gap;
    } else {
      itemsWidth = itemsWidth + items[i].clientWidth;
    }
  }

  if(itemsWidth > listWidth) {
    return true;
  } else {
    return false;
  }
};

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

  menuButton.addEventListener('click', () => {
    header.classList.toggle('header--nav-is-open');
    menu.classList.toggle('site-navigation--is-open');

    if(mobile.matches) {
      menuHeight = 130 + (39 * pageList) - 10;
    } else if(tablet.matches) {
      if(menu.classList.contains('site-navigation--fix-bottom')) {
        if((pageList % 2) > 0) {
          menuHeight = 170 + (44 * (Math.floor(pageList / 2) + 1)) - 10;
        } else {
          menuHeight = 170 + (44 * Math.floor(pageList / 2)) - 10;
        }

      } else {
        menuHeight = 180 + (44 * pageList) - 10;
      }
    } else if(desktopS.matches) {
      if(menu.classList.contains('site-navigation--fix-bottom')) {
        if(widthChildFunc('.pages-list', '.pages-list__item', 30)) {
          menuHeight = 220 + 80;
        } else {
          menuHeight = 220;
        }
      } else {
        menuHeight = 230 + (44 * pageList) - 10;
      }
    } else if(desktopL.matches) {
      if(menu.classList.contains('site-navigation--fix-bottom')) {
        if(widthChildFunc('.pages-list', '.pages-list__item', 30)) {
          menuHeight = 350 + 90;
        } else {
          menuHeight = 350;
        }
      } else {
        menuHeight = 280 + (74 * pageList) - 20;
      }
    }

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

  window.addEventListener('scroll', () => {
    if(header.classList.contains('header--nav-is-open')) {
      header.classList.remove('header--nav-is-open');
    }
    if(menu.classList.contains('site-navigation--is-open')) {
      menu.classList.remove('site-navigation--is-open');
    }

    menuButtonText.textContent = 'Меню';
    menuButton.classList.remove('button--brown-white');
    menuButton.classList.add('button--white-brown');
    menu.style.height = '';
  });
};

export {toggleMenu};
