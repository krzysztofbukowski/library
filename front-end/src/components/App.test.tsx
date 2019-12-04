import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render without failure', () => {
    const component = render(<App />);

    component.debug();
    component.getByText('Biblioteka Szkoły Podstawowej w Pieniężnie');
  });
});
