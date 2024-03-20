import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Attendance from './Attendance';

test('renders Attendance component', () => {
  const { getByLabelText, getByText } = render(<Attendance />);
  
  fireEvent.change(getByLabelText(/Student Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText(/Status/i), { target: { value: 'present' } });
  
  fireEvent.click(getByText(/Submit/i));
  
  // Additional assertions go here
});
