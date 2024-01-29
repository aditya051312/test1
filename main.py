from employee import Employee
from attendance import Attendance
from admin import Admin
from database import Database

def main():
    db = Database('attendance.db')
    db.connect()

    admin = Admin(db)

    employee = Employee(1, 'John Doe', 'john.doe@example.com')
    attendance = Attendance(employee.id, '2022-01-01', 'present')

    admin.mark_attendance(attendance)

    db.disconnect()

if __name__ == "__main__":
    main()