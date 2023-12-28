CREATE TABLE Announcements (
    AnnouncementID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    PublishDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    Author VARCHAR(100)
);