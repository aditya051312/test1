from student import Student
from admin import Admin

class School:
    def __init__(self, students, admin):
        self.students = students
        self.admin = admin

    def get_all_students(self):
        return self.students
