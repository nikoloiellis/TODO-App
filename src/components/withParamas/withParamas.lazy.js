import React, { lazy, Suspense } from 'react';

const LazyWithParamas = lazy(() => import('./WithParamas'));

const WithParamas = props => (
  <Suspense fallback={null}>
    <LazyWithParamas {...props} />
  </Suspense>
);

export default WithParamas;
