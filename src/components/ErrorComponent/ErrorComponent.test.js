import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorComponent from './ErrorComponent';

describe('<ErrorComponent />', () => {
  test('it should mount', () => {
    render(<ErrorComponent />);
    
    const errorComponent = screen.getByTestId('ErrorComponent');

    expect(errorComponent).toBeInTheDocument();
  });
});