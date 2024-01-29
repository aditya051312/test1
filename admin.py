class Admin:
    def __init__(self, db):
        self.db = db

    def mark_attendance(self, attendance):
        self.db.update(attendance)