import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WitNavigation from './WitNavigation';

describe('<WitNavigation />', () => {
  test('it should mount', () => {
    render(<WitNavigation />);
    
    const witNavigation = screen.getByTestId('WitNavigation');

    expect(witNavigation).toBeInTheDocument();
  });
});