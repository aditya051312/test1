attendanceController.test.js

const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('POST /api/absent', () => {
  it('should mark a student as absent', async () => {
    const studentId = '12345';
    const response = await request.post('/api/absent').send({ studentId });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Student marked as absent successfully');
  });

  it('should return an error if the student ID is not valid', async () => {
    const studentId = 'invalidId';
    const response = await request.post('/api/absent').send({ studentId });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid student ID');
  });
});

attendanceService.test.js

const AttendanceService = require('../services/AttendanceService');

describe('AttendanceService', () => {
  it('should mark a student as absent', () => {
    const studentId = '12345';
    const attendanceService = new AttendanceService();

    attendanceService.markAbsent(studentId);

    expect(attendanceService.getAttendanceStatus(studentId)).toBe('absent');
  });
});

attendanceRepository.test.js

const AttendanceRepository = require('../repositories/AttendanceRepository');

describe('AttendanceRepository', () => {
  it('should update the attendance status of a student', () => {
    const studentId = '12345';
    const attendanceRepository = new AttendanceRepository();

    attendanceRepository.updateAttendance(studentId, 'absent');

    expect(attendanceRepository.getAttendanceStatus(studentId)).toBe('absent');
  });
});