import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Articles from './Articles';

describe('<Articles />', () => {
  test('it should mount', () => {
    render(<Articles />);
    
    const articles = screen.getByTestId('Articles');

    expect(articles).toBeInTheDocument();
  });
});