import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page', () => {
  const { getByLabelText } = render(<LoginPage />);
  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('submits form with email and password', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<LoginPage onSubmit={handleSubmit} />);
  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(getByText(/login/i));
  expect(handleSubmit).toHaveBeenCalledWith('test@example.com', 'password');
});
