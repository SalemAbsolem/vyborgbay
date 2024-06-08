const menuBottomFixed = (header) => {
  const menuLinkList = header.querySelector('.header__site-navigation.site-navigation');
  const headerHeight = header.clientHeight;
  const logo = header.querySelector('.logo');
  const main = document.querySelector('.main');
  const windowScrollTop = window.scrollY;

  if(windowScrollTop >= (headerHeight + 100)) {
    header.classList.add('header--fix-bottom');
    menuLinkList.classList.add('site-navigation--fix-bottom');
    main.style.marginTop = `${headerHeight}px`;
    logo.style.transition = 'opacity 0.3s ease-in-out';
    setInterval(() => {
      logo.style.transition = null;
    }, 100);
  } else {
    header.classList.remove('header--fix-bottom');
    menuLinkList.classList.remove('site-navigation--fix-bottom');
    main.style.marginTop = null;
  }
};

export {menuBottomFixed};
