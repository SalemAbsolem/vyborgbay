const menuBottomFixed = (header, headerHeight, footer) => {
  if(!header) {
    return;
  }
  const menuLinkList = header.querySelector('.header__site-navigation.site-navigation');
  const logo = header.querySelector('.logo');
  let main = document.querySelector('.main');
  if(!main) {
    main = document.querySelector('.site-main');
  }
  const windowScrollTop = window.scrollY;

  const windowHeight = window.innerHeight - 100;
  let footerToTop;

  if(footer) {
    if(getComputedStyle(footer).zoom) {
      footerToTop = footer.getBoundingClientRect().top * footer.style.zoom;
    } else {
      footerToTop = footer.getBoundingClientRect().top;
    }

    if(windowScrollTop >= (headerHeight + 100)) {
      header.classList.add('header--fix-bottom');
      menuLinkList.classList.add('site-navigation--fix-bottom');
      main.style.marginTop = `${headerHeight}px`;
      logo.style.transition = 'opacity 0.3s ease-in-out';
      setInterval(() => {
        logo.style.transition = null;
      }, 100);
      if(windowHeight <= footerToTop) {
        header.style.opacity = 1;
        header.style.visibility = 'visible';
        header.style.transform = 'translateY(0)';
      } else {
        header.style.opacity = 0;
        header.style.visibility = 'hidden';
        header.style.transform = 'translateY(200%)';
      }
    } else {
      header.classList.remove('header--fix-bottom');
      menuLinkList.classList.remove('site-navigation--fix-bottom');
      main.style.marginTop = null;
      header.style.opacity = 1;
      header.style.visibility = 'visible';
      header.style.transform = 'translateY(0)';
    }
  } else {
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
      header.style.opacity = 1;
      header.style.visibility = 'visible';
      header.style.transform = 'translateY(0)';
    }
  }
};

export {menuBottomFixed};
