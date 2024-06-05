const bookingModuleResize = (mobile, tablet, desktopS, desktopL) => {
  let sizeBlock;

  if(mobile.matches) {
    sizeBlock = 300;
  } else if(tablet.matches) {
    sizeBlock = 350;
  } else if(desktopS.matches) {
    sizeBlock = 250;
  } else if(desktopL.matches) {
    sizeBlock = 250;
  }


  const moduleBooking = document.querySelector('#booking_iframe iframe');
  moduleBooking.addEventListener('load', function sizeIframe() {
    setTimeout(() => {
      const repeatInterval = setInterval(() => {
        if(moduleBooking.style.height !== `${sizeBlock}px` || moduleBooking.style.minHeight !== `${sizeBlock}px`) {
          moduleBooking.style.minHeight = `${sizeBlock}px`;
          moduleBooking.style.height = `${sizeBlock}px`;
          window.scrollTo(0, 0);
        } else {
          clearInterval(repeatInterval);
          moduleBooking.removeEventListener('load', sizeIframe);
        }
      }, 100);
    }, 500);
  });
};

export {bookingModuleResize};
