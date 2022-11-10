import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListToDOesComponent from './ListToDOesComponent';

describe('<ListToDOesComponent />', () => {
  test('it should mount', () => {
    render(<ListToDOesComponent />);
    
    const listToDOesComponent = screen.getByTestId('ListToDOesComponent');

    expect(listToDOesComponent).toBeInTheDocument();
  });
});