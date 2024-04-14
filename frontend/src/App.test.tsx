import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Navigation component', () => {
    const { getByTestId } = render(<App />);
    const navigationElement = getByTestId('navigation');
    expect(navigationElement).length;
  });
});
