const popupInit = (block) => {
  const popupBlock = document.querySelector(`.${block}`);

  if(!popupBlock){
    return;
  }

  popupBlock.classList.remove(`${block}--show`);
  popupBlock.style.display = 'none';

  const popupContent = popupBlock.querySelector(`.${block}__wrap`);
  const linksPopup = popupContent.querySelectorAll('a[href]');
  const buttonClosePopup = document.querySelector('.button--close');
  const buttonOpenPopup = document.querySelector('.button--map');

  buttonOpenPopup.addEventListener('click', () => {
    popupBlock.style.display = 'block';
    // document.documentElement.setAttribute('style', 'scrollbar-gutter: stable;');
    // document.body.setAttribute('style', 'overflow: hidden;');
    setTimeout(() => {
      popupBlock.classList.add(`${block}--show`);
    }, 100);
  });

  buttonClosePopup.addEventListener('click', () => {
    popupBlock.classList.remove(`${block}--show`);
    // document.body.removeAttribute('style', 'overflow: hidden;');
    // document.documentElement.removeAttribute('style', 'scrollbar-gutter: stable;');
    setTimeout(() => {
      popupBlock.style.display = 'none';
    }, 400);
  });

  popupBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains(block)) {
      popupBlock.classList.remove(`${block}--show`);
      // document.body.removeAttribute('style', 'overflow: hidden;');
      // document.documentElement.removeAttribute('style', 'scrollbar-gutter: stable;');
      setTimeout(() => {
        popupBlock.style.display = 'none';
      }, 400);
    }
  });

  for(let i = 0; i < linksPopup.length; i++) {
    linksPopup[i].addEventListener('click', () => {
      popupBlock.classList.remove(`${block}--show`);
      // document.body.removeAttribute('style', 'overflow: hidden;');
      // document.documentElement.removeAttribute('style', 'scrollbar-gutter: stable;');
      setTimeout(() => {
        popupBlock.style.display = 'none';
      }, 400);
    });
  }
};

const popupTabInit = (block) => {
  const popupBlock = document.querySelector(`.${block}`);

  if(!popupBlock){
    return;
  }

  const buttonsTab = popupBlock.querySelectorAll(`.${block}__tab-button`);
  const tabBlocks = popupBlock.querySelectorAll(`.${block}__tab`);

  for(let i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener('click', () => {
      for(let j = 0; j < buttonsTab.length; j++) {
        buttonsTab[j].classList.remove('button--popup-tab-active');
        if(buttonsTab[j].dataset.tab === 'sorvali'){
          buttonsTab[j].classList.remove('button--green-white');
          buttonsTab[j].classList.remove('button--with-border-on-hover');
          buttonsTab[j].classList.add('button--white-green');
          buttonsTab[j].classList.add('button--with-border');
        }
        if(buttonsTab[j].dataset.tab === 'pieni'){
          buttonsTab[j].classList.remove('button--blue-white');
          buttonsTab[j].classList.remove('button--with-border-on-hover');
          buttonsTab[j].classList.add('button--white-blue');
          buttonsTab[j].classList.add('button--with-border');
        }
      }
      for(let j = 0; j < tabBlocks.length; j++) {
        tabBlocks[j].classList.remove('tab--show');
      }
      tabBlocks[i].classList.add('tab--show');
      buttonsTab[i].classList.add('button--popup-tab-active');
      if(buttonsTab[i].dataset.tab === 'sorvali'){
        buttonsTab[i].classList.add('button--green-white');
        buttonsTab[i].classList.add('button--with-border-on-hover');
        buttonsTab[i].classList.remove('button--white-green');
        buttonsTab[i].classList.remove('button--with-border');
      }
      if(buttonsTab[i].dataset.tab === 'pieni'){
        buttonsTab[i].classList.add('button--blue-white');
        buttonsTab[i].classList.add('button--with-border-on-hover');
        buttonsTab[i].classList.remove('button--white-blue');
        buttonsTab[i].classList.remove('button--with-border');
      }
    });
  }
};

export {popupInit, popupTabInit};
