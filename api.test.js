import axios from 'axios';
import { getStudents } from './api';

jest.mock('axios');

test('fetches students', async () => {
  const students = [{ id: 1, name: 'John Doe' }];
  const resp = { data: students };
  axios.get.mockResolvedValue(resp);

  const result = await getStudents();

  expect(result).toEqual(students);
  expect(axios.get).toHaveBeenCalledWith('/api/students');
});
