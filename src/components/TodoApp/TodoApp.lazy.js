import React, { lazy, Suspense } from 'react';

const LazyTodoApp = lazy(() => import('./TodoApp'));

const TodoApp = props => (
  <Suspense fallback={null}>
    <LazyTodoApp {...props} />
  </Suspense>
);

export default TodoApp;
