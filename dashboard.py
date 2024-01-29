class Dashboard:
    def __init__(self, admin):
        self.admin = admin

    def display(self):
        for student in self.admin.students:
            print(f"Name: {student.name}")
            print(f"Attendance: {student.attendance}")
            print(f"Remarks: {student.remarks}")