const accordion = (mobile, footer) => {
  if(!footer) {
    return;
  }

  const footerGroups = footer.querySelectorAll('.footer__column--accordion');
  if(!footerGroups) {
    return;
  }

  const footerTitles = [];
  const groupsHeight = [];
  const titleHeight = [];

  if(mobile.matches) {
    for(let i = 0; i < footerGroups.length; i++) {
      footerTitles[i] = footerGroups[i].querySelector('.footer__column-title');
      footerGroups[i].style.height = '100%';
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
  } else {
    for(let i = 0; i < footerGroups.length; i++) {
      footerGroups[i].classList.remove('footer__column--active');
      footerGroups[i].style.height = '100%';
    }
  }
};

export {accordion};
