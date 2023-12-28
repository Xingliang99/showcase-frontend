CREATE TABLE EmployeeTasks (
    TaskID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    TaskDescription VARCHAR(255),
    StartDate DATE,
    DueDate DATE,
    TaskStatus ENUM('未开始', '进行中', '已完成', '已延期') NOT NULL,
    Notes VARCHAR(255),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);
