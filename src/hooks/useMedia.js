import { useEffect, useState } from 'react';
import * as R from 'ramda';

import { hasValue } from 'helpers/utils';

export const screenSize = {
  xl: 5,
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1,
};

// From https://usehooks.com/
function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

export function useDetectScreenSize() {
  return useMedia(
    [
      '(min-width: 1920px)', // xl
      '(max-width: 1919px) and (min-width: 1280px)', // lg
      '(max-width: 1279px) and (min-width: 960px)', // md
      '(max-width: 959px) and (min-width: 600px)', // sm
      '(max-width: 599px) and (min-width: 0px)', //xs
    ],
    [screenSize.xl, screenSize.lg, screenSize.md, screenSize.sm, screenSize.xs],
    screenSize.xl
  );
}

export function useImageMediaForScreenSize(size) {
  const [mediaName, setMediaName] = useState();
  useEffect(() => {
    if (hasValue(size)) {
      const mediaSizes = [
        {
          name: 'mobile',
          isVisible: size <= screenSize.md,
        },
        {
          name: 'tablet',
          isVisible: size > screenSize.md && size <= screenSize.lg,
        },
        {
          name: 'desktop',
          isVisible: size > screenSize.lg,
        },
      ];
      const isVisible = R.propEq('isVisible', true);
      console.log(
        'Setting mediaName',
        R.pipe(R.find(isVisible), R.prop('name'))(mediaSizes)
      );
      setMediaName(R.pipe(R.find(isVisible), R.prop('name'))(mediaSizes));
    }
  }, [size]);

  return mediaName;
}
