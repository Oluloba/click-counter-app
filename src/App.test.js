import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the counter and buttons', () => {
  render(<App />);
  expect(screen.getByText(/Click Counter/i)).toBeInTheDocument();
  expect(screen.getByText(/Increase/i)).toBeInTheDocument();
  expect(screen.getByText(/Decrease/i)).toBeInTheDocument();
});

test('increments the counter when Increase is clicked', () => {
  render(<App />);
  const increaseButton = screen.getByText(/Increase/i);
  fireEvent.click(increaseButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('does not decrement below 0', () => {
  render(<App />);
  const decreaseButton = screen.getByText(/Decrease/i);
  fireEvent.click(decreaseButton); // should stay at 0
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('displays message at threshold', () => {
  render(<App />);
  const increaseButton = screen.getByText(/Increase/i);

  for (let i = 0; i < 15; i++) {
    fireEvent.click(increaseButton);
  }

  expect(screen.getByText('❌ You have reached the limit!')).toBeInTheDocument();
});

