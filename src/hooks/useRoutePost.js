import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
// import { hasValue } from 'helpers/utils';
import * as R from 'ramda';
import { hasValue } from 'helpers/utils';
import { capitalize, camelCase } from 'helpers/formatHelper';

export default function useRoutePost() {
  const location = useLocation();
  const { content } = useSelector((state) => state.post);
  const [routedPath, setRoutedPath] = useState();

  useEffect(() => {
    const pathname = location?.pathname;
    const count = R.pipe(R.split('/'), R.length)(pathname);

    if (hasValue(pathname) && count > 2) {
      // For path: /post/article-name..., grab article-name
      const article = R.pipe(R.split('/'), R.nth(2))(pathname);

      // Remove '-' from article and then
      // Lowercase first word
      // Uppercase following words

      // Todo:
      // Not sure if we want lowercase or uppercase
      // For now Going all Pascal cause React components start with caps
      // Want to come back and clean this up
      // const firstWord = R.pipe(R.split('-'), R.nth(0), R.toLower())(article);

      const firstWord = R.pipe(R.split('-'), R.nth(0), capitalize)(article);
      const otherWords = R.pipe(
        R.split('-'),
        R.drop(1),
        R.map(capitalize)
      )(article);
      const key = camelCase(firstWord, otherWords);

      setRoutedPath({ article, content, count, key, pathname });
    }
  }, [location]);

  return routedPath;
}
