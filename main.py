from student import Student
from admin import Admin
from school import School

# Create some Student objects
student1 = Student(1, 'John Doe')
student2 = Student(2, 'Jane Doe')

# Create an Admin object
admin = Admin()

# Create a School object
school = School([student1, student2], admin)

# The admin marks the attendance of the students
admin.mark_attendance(student1, True)
admin.mark_attendance(student2, False)

# Print the attendance status of all students
for student in school.get_all_students():
    print(f'{student.name}: {"Present" if student.attendance_status else "Absent"}')
