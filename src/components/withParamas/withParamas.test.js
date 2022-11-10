import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WithParamas from './WithParamas';

describe('<WithParamas />', () => {
  test('it should mount', () => {
    render(<WithParamas />);
    
    const withParamas = screen.getByTestId('WithParamas');

    expect(withParamas).toBeInTheDocument();
  });
});