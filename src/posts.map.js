import React from 'react';

const posts = {
  strawberryCake: {
    Article: React.lazy(() => import('./modules/Posts/2021-03-10/Content')),
    date: '2021-03-10'
  },
  lemonCake: {
    Article: React.lazy(() => import('./modules/Posts/2021-03-07/Content')),
    date: '2021-03-07'
  },
  oldSchoolLemons: {
    Article: React.lazy(() => import('./modules/Posts/2021-03-01/Content')),
    date: '2021-03-01'
  },
};

export default posts;
