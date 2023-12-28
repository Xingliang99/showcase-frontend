CREATE TABLE EmployeeAttendance (
    AttendanceID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    AttendanceDate DATE NOT NULL,
    SignInTime TIME,
    SignOutTime TIME,
    AttendanceStatus ENUM('正常', '迟到', '早退', '缺勤') NOT NULL,
    Notes VARCHAR(255),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);