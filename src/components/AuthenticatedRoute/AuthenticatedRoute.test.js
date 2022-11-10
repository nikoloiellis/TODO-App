import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthenticatedRoute from './AuthenticatedRoute';

describe('<AuthenticatedRoute />', () => {
  test('it should mount', () => {
    render(<AuthenticatedRoute />);
    
    const authenticatedRoute = screen.getByTestId('AuthenticatedRoute');

    expect(authenticatedRoute).toBeInTheDocument();
  });
});