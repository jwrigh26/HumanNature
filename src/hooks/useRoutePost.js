import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
// import { hasValue } from 'helpers/utils';
import * as R from 'ramda';
import { hasValue } from 'helpers/utils';

export default function useRoutePost(map) {
  const location = useLocation();
  const { content } = useSelector((state) => state.post);
  const [routedPath, setRoutedPath] = useState();

  useEffect(() => {
    const pathname = location?.pathname;
    const count = R.pipe(R.split('/'), R.length)(pathname);

    // Makes a word capitalized
    // i.e. cat = Cat.
    function capitalize(word) {
      const first = R.pipe(R.splitAt(1), R.nth(0), R.toUpper)(word);
      const other = R.pipe(R.splitAt(1), R.drop(1))(word);
      return `${first}${other}`;
    }

    // Takes an array of words that are assumed to have
    // capital letters and joins them together
    function pascalCase(pascalWord, mappedValue = '') {
      return `${pascalWord}${mappedValue}`;
    }

    // Takes the first word assuming it's all lowercase
    // Then combines it with the otherWords assuming
    // they have been capitalized and pascalCase filtered
    function camelCase(camel, pascalArray) {
      return R.reduce(pascalCase, camel, pascalArray);
    }

    if (hasValue(pathname) && count > 2) {
      // For path: /post/article-name..., grab article-name
      const article = R.pipe(R.split('/'), R.nth(2))(pathname);

      // Remove '-' from article and then
      // Lowercase first word
      // Uppercase following words
      const firstWord = R.pipe(R.split('-'), R.nth(0), R.toLower())(article);
      const otherWords = R.pipe(
        R.split('-'),
        R.drop(1),
        R.map(capitalize)
      )(article);
      const key = camelCase(firstWord, otherWords);

      setRoutedPath({ article, content, count, key, pathname });
    }
  }, [location, map]);

  return routedPath;
}
