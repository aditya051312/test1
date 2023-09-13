import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders register page', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders login page', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders dashboard page', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
