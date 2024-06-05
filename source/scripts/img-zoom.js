const searchReturnClass = (elem, subClass) => {
  for(let i = 0; elem.classList.length; i++) {
    if(elem.classList[i].includes(subClass)) {
      return elem.classList[i];
    }
    break;
  }
};

const createClass = (elem, subClass, subStrg) => {
  const newClass = `${searchReturnClass(elem, subClass)}${subStrg}`;
  return newClass;
};

const imgZoomCard = (eLclass) => {
  const block = document.querySelector(eLclass);
  const cards = block.querySelectorAll('[class*="__item"]');

  let background;

  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', (e) => {
      background = cards[i].querySelector('[class*="__background"]');

      if(e.target.classList.contains(searchReturnClass(e.target,'__button')) || e.target.classList.contains('button__text')) {
        background.classList.add(createClass(background, '__background', '--scale-on-hover'));
      }
    });

    cards[i].addEventListener('mouseout', (e) => {
      background = cards[i].querySelector('[class*="__background"]');

      if(e.target.classList.contains(searchReturnClass(e.target,'__button')) || e.target.classList.contains('button__text')) {
        background.classList.remove(createClass(background, '__background', '--scale-on-hover'));
      }
    });
  }
};

export {imgZoomCard};
