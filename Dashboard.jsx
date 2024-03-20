import React, { useEffect, useState } from 'react';
import { getStudents } from './api';

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
}

export default Dashboard;
