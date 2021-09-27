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
    return `${str.substring(0, length - ending.length)}${ending}`;
  }
  return str;
}

export function creditCardExpirationFormat(value) {
  // returns MM / YY
  let input = value.replace(/\D/g, '');
  let size = input.length;
  if (size > 2) {
    input = `${input.slice(0, 2)} / ${input.slice(2)}`;
  }
  if (size > 4) {
    input = input.slice(0, 7);
  }
  return input;
}

export function phoneFormat(value) {
  // returns (###) ###-####
  let input = value.replace(/\D/g, '');
  let size = input.length;
  if (size > 0) {
    input = '(' + input;
  }
  if (size > 3) {
    input = input.slice(0, 4) + ') ' + input.slice(4, 11);
  }
  if (size > 6) {
    input = input.slice(0, 9) + '-' + input.slice(9);
  }
  return input;
}

export function postalCodeFormat(value) {
  let input = value.replace(/\D/g, '');
  let size = input.length;
  if (size > 5) {
    input = input.slice(0, 5) + '-' + input.slice(5, input.length);
  }
  if (size > 9) {
    input = input.slice(0, 10);
  }
  return input;
}

export function cvvFormat(value) {
  let input = value.replace(/\D/g, '');
  let size = input.length;
  if (size > 4) {
    return input.slice(0, 4);
  }
  return input;
}
