const initYmap = () => {
  const ymapBlock = document.querySelector('#map');
  if(!ymapBlock) {
    return;
  }
  /* eslint-disable */
  const myMap = new ymaps.Map('map', {
    center: [60.7293029, 28.6895658],
    zoom: 17,
  }, {
    searchControlProvider: 'yandex#search'
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: '123',
    balloonContent: '32365466'
  }, {
    preset: 'islands#icon',
    iconColor: '#68a54b'
  }
  /*, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/map-pin@1x.png',
    // Размеры метки.
    iconImageSize: [57, 53],
    // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
    iconImageOffset: [-26, -44]
  }*/);
  /* eslint-enable */
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
};

export {initYmap};
