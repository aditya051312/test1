from student import Student

class Admin:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.students = []

    def login(self, username, password):
        if username == self.username and password == self.password:
            self.admin_menu()
        else:
            print("Invalid credentials. Please try again.")

    def admin_menu(self):
        while True:
            print("1. Add Student")
            print("2. Remove Student")
            print("3. Mark Attendance")
            print("4. Add Remarks")
            print("5. Logout")
            choice = int(input("Enter your choice: "))

            if choice == 1:
                self.add_student()
            elif choice == 2:
                self.remove_student()
            elif choice == 3:
                self.mark_attendance()
            elif choice == 4:
                self.add_remarks()
            elif choice == 5:
                break
            else:
                print("Invalid choice. Please try again.")

    def add_student(self):
        name = input("Enter student name: ")
        self.students.append(Student(name))

    def remove_student(self):
        name = input("Enter student name: ")
        self.students = [student for student in self.students if student.name != name]

    def mark_attendance(self):
        name = input("Enter student name: ")
        for student in self.students:
            if student.name == name:
                student.attendance += 1
                break

    def add_remarks(self):
        name = input("Enter student name: ")
        remark = input("Enter remark: ")
        for student in self.students:
            if student.name == name:
                student.remarks.append(remark)
                break