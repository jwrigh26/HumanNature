import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as R from 'ramda';
import { hasValue } from 'helpers/utils';
import { capitalize, camelCase } from 'helpers/formatHelper';
import { loadConfig } from '@babel/core/lib/config/files/index-browser';
import { toLower } from 'ramda';

export default function useRouteTab() {
  const location = useLocation();
  const [routedPath, setRoutedPath] = useState();

  useEffect(() => {
    const pathname = location?.pathname;
    const count = R.pipe(R.split('/'), R.length)(pathname);
    const tab = R.pipe(R.split('/'), R.nth(1))(pathname);

    // Check if we are on a tab or single path route
    if (hasValue(pathname) && count >= 2 && tab.length > 0) {
      const firstWord = R.pipe(R.split('-'), R.nth(0), toLower)(tab);
      const otherWords = R.pipe(
        R.split('-'),
        R.drop(1),
        R.map(capitalize)
      )(tab);
      const key = camelCase(firstWord, otherWords);
      setRoutedPath({ tab, count, key, pathname });
    }
  }, [location]);

  return routedPath;
}
