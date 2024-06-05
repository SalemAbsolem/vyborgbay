const scalingPage = (mobile, tablet, desktopS, notDesktopL, feedback, header, footer) => {
  const widthScreen = window.innerWidth;

  let scale;

  if(mobile.matches) {
    scale = widthScreen / 320;
  } else if(tablet.matches) {
    scale = widthScreen / 768;
  } else if(desktopS.matches) {
    scale = widthScreen / 1200;
  }

  const sectionOnMain = document.querySelectorAll('.main__section:not(.feedback)');
  const sectionFeedback = document.querySelector('.main__section.feedback');

  let sectionFeedbackTitle, sectionFeedbackWidjet;

  if(sectionFeedback) {
    sectionFeedbackTitle = sectionFeedback.querySelector('.main__section-title');
    sectionFeedbackWidjet = sectionFeedback.querySelector('.sw-app');
  }

  if(notDesktopL.matches) {
    if(scale >= 1) {
      if(header) {
        header.setAttribute('style', `zoom: ${scale}`);
      }

      for(let i = 0; i < sectionOnMain.length; i++) {
        sectionOnMain[i].setAttribute('style', `zoom: ${scale}`);
      }

      if(sectionFeedback) {
        sectionFeedbackTitle.setAttribute('style', `zoom: ${scale}`);
        if(feedback.matches) {
          sectionFeedbackWidjet.setAttribute('style', `zoom: ${scale}`);
        }
      }

      if(footer) {
        footer.setAttribute('style', `zoom: ${scale}`);
      }
    }
  } else {
    scale = 1;

    if(header) {
      header.setAttribute('style', `zoom: ${scale}`);
    }

    for(let i = 0; i < sectionOnMain.length; i++) {
      sectionOnMain[i].setAttribute('style', `zoom: ${scale}`);
    }

    if(sectionFeedback) {
      sectionFeedbackTitle.setAttribute('style', `zoom: ${scale}`);
      if(feedback.matches) {
        sectionFeedbackWidjet.setAttribute('style', `zoom: ${scale}`);
      }
    }

    if(footer) {
      footer.setAttribute('style', `zoom: ${scale}`);
    }
  }
};

export {scalingPage};
