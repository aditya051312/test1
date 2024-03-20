import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('LoginPage renders and handles form submission', () => {
  const { getByLabelText, getByText } = render(<LoginPage />);
  
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } });
  
  fireEvent.click(getByText(/login/i));
  
  // Add assertions here
});
