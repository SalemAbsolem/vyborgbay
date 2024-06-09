import {showMoreCard} from './show-more';

const tabsInit = (blockClass, buttonTabClass, nonActiveButtonTabClass, activeButtonTabClass, tabClass, activeTabClass, mobile, tablet, desktop) => {
  const block = document.querySelector(blockClass);
  if(!block) {
    return;
  }
  const buttonsTab = block.querySelectorAll(buttonTabClass);
  if(!buttonsTab) {
    return;
  }
  const tabs = block.querySelectorAll(tabClass);
  if(!tabs) {
    return;
  }

  const moreButton = block.querySelector(`${blockClass}__button.button--more`);
  const moreButtonText = moreButton.querySelector('.button__text');

  buttonsTab[0].classList.remove(nonActiveButtonTabClass[0]);
  buttonsTab[0].classList.add(activeButtonTabClass[0]);
  buttonsTab[0].style.pointerEvents = 'none';
  tabs[0].classList.add(activeTabClass);
  moreButtonText.textContent = 'Открыть еще';

  for(let i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener('click', () => {
      for(let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove(activeTabClass);
        tabs[j].style.height = null;
        tabs[j].style.maxHeight = null;
      }
      for(let j = 0; j < buttonsTab.length; j++) {
        buttonsTab[j].classList.add(nonActiveButtonTabClass[j]);
        buttonsTab[j].classList.remove(activeButtonTabClass[j]);
        buttonsTab[j].style.pointerEvents = 'auto';
      }

      buttonsTab[i].classList.remove(nonActiveButtonTabClass[i]);
      buttonsTab[i].classList.add(activeButtonTabClass[i]);
      buttonsTab[i].style.pointerEvents = 'none';
      tabs[i].classList.add(activeTabClass);
      moreButtonText.textContent = 'Открыть еще';
      showMoreCard(blockClass, mobile, tablet, desktop);
    });
  }
};

export {tabsInit};
