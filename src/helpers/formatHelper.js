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
