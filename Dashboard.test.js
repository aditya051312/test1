import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getStudents } from './api';
import Dashboard from './Dashboard';

jest.mock('./api');

test('renders students', async () => {
  const students = [{ id: 1, name: 'John Doe' }];
  getStudents.mockResolvedValue(students);

  const { getByText } = render(<Dashboard />);

  await waitFor(() => getByText('John Doe'));

  expect(getStudents).toHaveBeenCalledTimes(1);
});
