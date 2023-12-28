CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Department VARCHAR(100),
    Position VARCHAR(100),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    DateOfBirth DATE,
    HireDate DATE
);
