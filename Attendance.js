import React, { useState } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [student, setStudent] = useState('');
  const [status, setStatus] = useState('');

  const markAttendance = async (e) => {
    e.preventDefault();

    const endpoint = status === 'present' ? '/api/attend' : '/api/absent';
    await axios.post(endpoint, { student });
  };

  return (
    <form onSubmit={markAttendance}>
      <label>
        Student Name:
        <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select...</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Attendance;
