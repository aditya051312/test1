import sqlite3

class Database:
    def __init__(self, db_name):
        self.db_name = db_name
        self.conn = None

    def connect(self):
        self.conn = sqlite3.connect(self.db_name)

    def disconnect(self):
        self.conn.close()

    def update(self, attendance):
        cursor = self.conn.cursor()
        cursor.execute("INSERT INTO attendance (employee_id, date, status) VALUES (?, ?, ?)",
                       (attendance.employee_id, attendance.date, attendance.status))
        self.conn.commit()