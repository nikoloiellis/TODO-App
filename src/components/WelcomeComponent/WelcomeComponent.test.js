import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomeComponent from './WelcomeComponent';

describe('<WelcomeComponent />', () => {
  test('it should mount', () => {
    render(<WelcomeComponent />);
    
    const welcomeComponent = screen.getByTestId('WelcomeComponent');

    expect(welcomeComponent).toBeInTheDocument();
  });
});