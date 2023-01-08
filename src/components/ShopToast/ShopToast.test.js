import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShopToast from './ShopToast';

describe('<ShopToast />', () => {
  test('it should mount', () => {
    render(<ShopToast />);
    
    const toast = screen.getByTestId('ShopToast');

    expect(toast).toBeInTheDocument();
  });
});