import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByPlaceholderText } = render(<Login />);
  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('submits form', () => {
  const { getByText, getByPlaceholderText } = render(<Login />);
  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const button = getByText(/Login/i);

  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(button);

  expect(emailInput.value).toBe('test@gmail.com');
  expect(passwordInput.value).toBe('password');
});