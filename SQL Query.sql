CREATE DATABASE EmployeeDB

USE EmployeeDB

CREATE TABLE Department(
DepartmentId int Identity(1,1),
DepartmentName varchar(500)
)

SELECT * FROM Department

INSERT INTO Department (DepartmentName) VALUES ('Tech')

INSERT INTO Department VALUES ('Support')

CREATE TABLE Employees(
EmployeeId int IDENTITY(1,1),
EmployeeName varchar(500),
Department varchar(500),
DateOfJoining date,
PhotoFileName varchar(500))

SELECT * FROM Employees;

INSERT INTO Employees VALUES
('Sam','IT','2020-06-01','anonymous.png')


SELECT * From Employees