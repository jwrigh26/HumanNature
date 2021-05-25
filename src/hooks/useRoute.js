import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { hasValue } from 'helpers/utils';
import * as R from 'ramda';

export default function useRoute() {
  const location = useLocation();
  const [route, setRoute] = useState({ hasPath: false, paths: [] });

  // Break up each node in the path
  // skipping things not needed
  useEffect(() => {
    const { pathname } = location;
    const isPath = n => hasValue(n);
    const paths = R.pipe(R.split('/'), R.filter(isPath))(pathname);

    setRoute({
      hasPath: hasValue(paths),
      paths,
    });
  }, [location]);

  return route;
}
