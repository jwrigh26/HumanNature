import * as R from 'ramda';

// Makes a word capitalized
// i.e. cat = Cat.
export function capitalize(word) {
  const first = R.pipe(R.splitAt(1), R.nth(0), R.toUpper)(word);
  const other = R.pipe(R.splitAt(1), R.drop(1))(word);
  return `${first}${other}`;
}

// Takes the first word assuming it's all lowercase
// Then combines it with the otherWords assuming
// they have been capitalized and pascalCase filtered
export function camelCase(camel, pascalArray) {
  function join(pascalWord, mappedValue = '') {
    return `${pascalWord}${mappedValue}`;
  }
  return R.reduce(join, camel, pascalArray);
}

// Takes an array of capitalize words and
// combines them
export function pascalCase(pascalArray) {
  function join(curr, mappedValue = '') {
    return `${curr}${mappedValue}`;
  }
  return R.reduce(join, '', pascalArray);
}

export function getCurrencyFromNumber(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  /* if value = 2500 => $2,500.00 */
  return formatter.format(value);
}

// Create our number formatter.

export function truncateDescription(str, length = 100, ending = '...') {
  if (str.length > length) {
    console.log('Shortening', str.length, length);
    return `${str.substring(0, length - ending.length)}${ending}`;
  }
  return str;
}
