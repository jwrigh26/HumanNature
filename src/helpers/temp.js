import { hasValue } from 'helpers/utils';

// Generate a number between 0 and 10, including 10
// let value4 = generateRandomInteger(10);

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

export function getFakeDescription() {
  /* eslint-disable */
  const fakeText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doiusmod tempor incididunt ut.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ];

  const index = generateRandomInteger(fakeText.length);

  return hasValue(fakeText[index]) ? fakeText[index] : 'Fake Desc Not Found!';
}
