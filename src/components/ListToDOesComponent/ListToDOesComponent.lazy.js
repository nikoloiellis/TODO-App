import React, { lazy, Suspense } from 'react';

const LazyListToDOesComponent = lazy(() => import('./ListToDOesComponent'));

const ListToDOesComponent = props => (
  <Suspense fallback={null}>
    <LazyListToDOesComponent {...props} />
  </Suspense>
);

export default ListToDOesComponent;
