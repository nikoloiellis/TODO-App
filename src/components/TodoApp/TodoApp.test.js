import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
  test('it should mount', () => {
    render(<TodoApp />);
    
    const todoApp = screen.getByTestId('TodoApp');

    expect(todoApp).toBeInTheDocument();
  });
});