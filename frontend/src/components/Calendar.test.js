import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from './Calendar';

test('renders Calendar component', () => {
  render(<Calendar onDateChange={() => {}} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
