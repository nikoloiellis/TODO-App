import React, { lazy, Suspense } from 'react';

const LazyWelcomeComponent = lazy(() => import('./WelcomeComponent'));

const WelcomeComponent = props => (
  <Suspense fallback={null}>
    <LazyWelcomeComponent {...props} />
  </Suspense>
);

export default WelcomeComponent;
