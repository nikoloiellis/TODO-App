import React, { lazy, Suspense } from 'react';

const LazyWitNavigation = lazy(() => import('./WitNavigation'));

const WitNavigation = props => (
  <Suspense fallback={null}>
    <LazyWitNavigation {...props} />
  </Suspense>
);

export default WitNavigation;
