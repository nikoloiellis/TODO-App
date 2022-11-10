import React, { lazy, Suspense } from 'react';

const LazyErrorComponent = lazy(() => import('./ErrorComponent'));

const ErrorComponent = props => (
  <Suspense fallback={null}>
    <LazyErrorComponent {...props} />
  </Suspense>
);

export default ErrorComponent;
