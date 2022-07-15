--> Creating a Database :
        CREATE DATABASE Tutorial;

        USE Tutorial;

--> Creating Tables :
        CREATE TABLE Learner( ID INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY , Name VARCHAR(45) Not Null , Email VARCHAR(45) Not Null , Course INT(11) Not NULL );

--> Inserting Values :
        INSERT INTO Learner(Name , Email , Course) VALUES ('Aayush' , 'aayush@gupta.com' , 01);

        INSERT INTO Learner(Name , Email , Course) VALUES('Shubham' , 'shubham@patel.com' , 01 ),('Jaiki' , 'jaiki@email.com' , 02 ), ('Akhand' , 'akhand@singh.com' , 01 ), ('Shubham' , 'shubham@email.com' , 01 ), ('Khushal' , 'khushal@bhalla.com' , 03 ),('Vikramaditya' , 'vikram@email.com' , 04 );

        INSERT INTO Learner(Name , Email , Course) VALUES ('Rahul' , 'rahul@email.com' , 05), ('Akash', 'akash@email.com', 05);
        