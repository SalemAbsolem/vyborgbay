const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${(value || '')}${expires}; path=/`;
};

const getCookie = (name) => {
  /* eslint-disable */
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
  /* eslint-enable */
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const checkCookies = () => {
  const cookieNote = document.querySelector('.cookie');
  if(!cookieNote) {
    return;
  }
  const cookieBtnAccept = cookieNote.querySelector('.cookie__button');

  // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  if (!getCookie('cookies_policy')) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        cookieNote.classList.add('cookie--show');
      }, 1000);
    });
  }

  // При клике на кнопку устанавливаем куку cookies_policy на один год
  cookieBtnAccept.addEventListener('click', () => {
    setCookie('cookies_policy', 'true', 365);
    cookieNote.classList.remove('cookie--show');
  });
};

export {checkCookies};
