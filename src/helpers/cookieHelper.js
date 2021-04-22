import Cookies from 'js-cookie';

const cookiePrefix = 'unimath_';
const cookieExpireDays = 365;

export default function cookie(name, expires = cookieExpireDays) {
  const options = {
    expires,
    sameSite: 'strict',
    secure: false,
  };

  function setItem(key, value) {
    const safeName = `${cookiePrefix}${name}`;
    const ck = Cookies.getJSON(safeName) || {};
    ck[key] = value;
    Cookies.set(safeName, ck, options);
  }

  function getItem(key) {
    const safeName = `${cookiePrefix}${name}`;
    const ck = Cookies.getJSON(safeName) || {};
    return ck[key];
  }

  function removeItem(key) {
    const safeName = `${cookiePrefix}${name}`;
    const ck = Cookies.getJSON(safeName) || {};
    delete ck[key];
    Cookies.set(safeName, ck, options);
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
}
