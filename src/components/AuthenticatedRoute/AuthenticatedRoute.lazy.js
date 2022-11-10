import React, { lazy, Suspense } from 'react';

const LazyAuthenticatedRoute = lazy(() => import('./AuthenticatedRoute'));

const AuthenticatedRoute = props => (
  <Suspense fallback={null}>
    <LazyAuthenticatedRoute {...props} />
  </Suspense>
);

export default AuthenticatedRoute;
