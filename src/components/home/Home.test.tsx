import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

jest.mock('../../lib/hooks/useFoodTrucks', () => () => []);
jest.mock('../../lib/hooks/useGeolocation', () => () => ({
  coords: { latitude: 40.7128, longitude: -74.0060 },
  timestamp: Date.now(),
}));

describe('Home Component', () => {
  test('renders button initially', () => {
    render(<Home />);
    expect(screen.getByText('Find Food Trucks Open Now')).toBeInTheDocument();
  });

  test('renders Cards component after button click', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Find Food Trucks Open Now'));
    setTimeout(() => {
        expect(screen.getByText('Explore available food trucks at')).toBeInTheDocument();
    }, 700);
  });
});
