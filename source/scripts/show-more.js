const showMoreText = (containerClass, mobile) => {
  const textContainer = document.querySelector(containerClass);
  if(!textContainer) {
    return;
  }
  const textContainerHeight = textContainer.clientHeight;

  const paragrafs = textContainer.querySelectorAll('p');
  if(!paragrafs) {
    return;
  }

  let paragrafsHeight = 0;

  for(let i = 0; i < paragrafs.length; i++) {
    paragrafsHeight = paragrafsHeight + paragrafs[i].clientHeight;
  }
  paragrafsHeight = paragrafsHeight + (10 * (paragrafs.length - 1));

  const moreButton = document.querySelector(`${containerClass} + button`);
  const moreButtonText = moreButton.querySelector('.button__text');

  if(paragrafsHeight <= textContainerHeight) {
    moreButton.style.display = 'none';
  } else {
    if(mobile.matches) {
      moreButton.addEventListener('click', () => {
        if(textContainerHeight === textContainer.clientHeight) {
          textContainer.style.height = `${paragrafsHeight}px`;
          moreButtonText.textContent = 'Скрыть';
        } else {
          textContainer.style.height = `${textContainerHeight}px`;
          moreButtonText.textContent = 'Подробнее';
        }
      });
    } else {
      moreButton.addEventListener('click', () => {
        if(getComputedStyle(textContainer).getPropertyValue('overflow-y') === 'hidden') {
          textContainer.style.overflowY = 'scroll';
          moreButtonText.textContent = 'Скрыть';
          paragrafs[2].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
          paragrafs[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          textContainer.style.overflowY = 'hidden';
          moreButtonText.textContent = 'Подробнее';
        }
      });
    }
  }
};

const showMoreCard = (blockClass, mobile, tablet, desktop) => {
  const block = document.querySelector(blockClass);
  if(!block) {
    return;
  }

  const list = block.querySelector(`${blockClass}__list${blockClass}__list--is-active`);
  if(!list) {
    return;
  }

  const listHeight = list.clientHeight;

  const items = list.querySelectorAll(`${blockClass}__item`);
  const itemsLength = items.length;
  const itemHeight = items[0].clientHeight;
  let itemsHeight = 0;

  const moreButton = block.querySelector(`${blockClass}__button.button--more`);
  const moreButtonText = moreButton.querySelector('.button__text');

  let countInRow, gap;

  if(mobile.matches) {
    countInRow = 1;
    gap = 10;
  } else if(tablet.matches) {
    countInRow = 2;
    gap = 20;
  } else if(desktop.matches) {
    countInRow = 3;
    gap = 20;
  }

  if(itemsLength % countInRow > 0) {
    if(countInRow === 1) {
      itemsHeight = itemHeight * Math.floor(itemsLength / countInRow) + gap * (Math.floor(itemsLength / countInRow) - 1);
    } else {
      itemsHeight = itemHeight * (Math.floor(itemsLength / countInRow) + 1) + gap * Math.floor(itemsLength / countInRow);
    }
  } else {
    itemsHeight = itemHeight * Math.floor(itemsLength / countInRow) + gap * (Math.floor(itemsLength / countInRow) - 1);
  }

  if(itemsHeight <= listHeight) {
    moreButton.style.display = 'none';
    list.style.height = `${itemsHeight}px`;
  } else {
    moreButton.addEventListener('click', () => {
      if(list.clientHeight < itemsHeight) {
        list.style.height = `${itemsHeight}px`;
        list.style.maxHeight = `${itemsHeight}px`;
        moreButtonText.textContent = 'Скрыть';
      } else {
        block.scrollIntoView({ block: 'start', behavior: 'smooth' });
        list.style.height = `${listHeight}px`;
        list.style.maxHeight = `${listHeight}px`;
        moreButtonText.textContent = 'Открыть еще';
      }
    });
  }

};

export {showMoreCard, showMoreText};
