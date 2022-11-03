import React, { lazy, Suspense } from 'react';

const LazyCounter = lazy(() => import('./counterButton'));

const Counter = props => (
  <Suspense fallback={null}>
    <LazyCounter {...props} />
  </Suspense>
);

export default Counter;
