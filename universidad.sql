CREATE DATABASE IF NOT EXISTS universidad;
USE universidad;

CREATE TABLE Alumno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    Carrera VARCHAR(100),
    registro VARCHAR(100),
    fotoPlataforma VARCHAR(255)
);

CREATE TABLE Asignatura (
    idasignatura INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    codigo VARCHAR(20),
    idestudiante INT
);


