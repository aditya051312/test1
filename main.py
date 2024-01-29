from admin import Admin
from dashboard import Dashboard

def main():
    admin = Admin('admin', 'password')
    dashboard = Dashboard(admin)

    while True:
        print("1. Admin Login")
        print("2. View Dashboard")
        print("3. Exit")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            username = input("Enter username: ")
            password = input("Enter password: ")
            admin.login(username, password)
        elif choice == 2:
            dashboard.display()
        elif choice == 3:
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()