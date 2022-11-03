USE devcamp_sql;

-- Add Courses 
CREATE TABLE `devcamp_sql`.`courses` (
  `courses_name` VARCHAR(45) NOT NULL);

INSERT INTO courses(courses_name)
VALUES ('Java');

INSERT INTO courses(courses_name)
VALUES ('Javascript');

INSERT INTO courses(courses_name)
VALUES ('Python');

INSERT INTO courses(courses_name)
VALUES ('SQL Databases');

INSERT INTO courses(courses_name)
VALUES ('Networking');

INSERT INTO courses(courses_name)
VALUES ('C++');

INSERT INTO courses(courses_name)
VALUES ('Kotlan');

INSERT INTO courses(courses_name)
VALUES ('HTML/CSS/SCSS');

INSERT INTO courses(courses_name)
VALUES ('Ruby');

INSERT INTO courses(courses_name)
VALUES ('Cloud Computing');

INSERT INTO courses(courses_name)
VALUES ('Unity');

INSERT INTO courses(courses_name)
VALUES ('C#');

INSERT INTO courses(courses_name)
VALUES ('C');

INSERT INTO courses(courses_name)
VALUES ('SQL Databases');

INSERT INTO courses(courses_name)
VALUES ('Swift');



-- Add Professors
CREATE TABLE `devcamp_sql`.`professors` (
  `professors_name` VARCHAR(45) NOT NULL);

CREATE TABLE `devcamp_sql`.`professors` (
  `professors_id` VARCHAR(45) NOT NULL);

INSERT INTO professors(professors_name, professors_id) 
VALUES ('Mirajane Strauss', 'CIS1');

INSERT INTO professors(professors_name, professors_id) 
VALUES ('Makarov Dreyar', 'CIS2');

INSERT INTO professors(professors_name, professors_id) 
VALUES ('Erza Scarlet', 'CIS3');

INSERT INTO professors(professors_name, professors_id) 
VALUES ('Gildarts Clive', 'CIS4');

INSERT INTO professors(professors_name, professors_id) 
VALUES ('Jose Porla', 'CIS5');


-- Add Students
CREATE TABLE `devcamp_sql`.`students` (
  `students_name` VARCHAR(45) NOT NULL);

INSERT INTO students(students_name)
VALUES ('Lucy Heartfilia');

INSERT INTO students(students_name)
VALUES ('Gray Fullbuster');

INSERT INTO students(students_name)
VALUES ('Natsu Dragneel');

INSERT INTO students(students_name)
VALUES ('Wendy Marvell');

INSERT INTO students(students_name)
VALUES ('Laxus Dreyar');

INSERT INTO students(students_name)
VALUES ('David Gonzalez');

INSERT INTO students(students_name)
VALUES ('Levy McGarden');

INSERT INTO students(students_name)
VALUES ('Mavis Vermillion');

INSERT INTO students(students_name)
VALUES ('Gajeel Redfox');

INSERT INTO students(students_name)
VALUES ('Hibiki Lates');

INSERT INTO students(students_name)
VALUES ('Laxus Dreyar');

INSERT INTO students(students_name)
VALUES ('Fried Justine');

INSERT INTO students(students_name)
VALUES ('Jellal Fernandez');

INSERT INTO students(students_name)
VALUES ('Lisanna Strauss');

INSERT INTO students(students_name)
VALUES ('Bisca Connell');

-- Add Grades
CREATE TABLE `devcamp_sql`.`grades` (
  `grades_courses_id` VARCHAR(45) NOT NULL,
  `grades_students_id` VARCHAR(45) NOT NULL,
  `grades_professors_id` VARCHAR(45) NOT NULL,
  `grades_grade` INT(100) NOT NULL);

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('1', '1', 'CIS1', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('2', '1', 'CIS2', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('3', '1', 'CIS3', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('4', '1', 'CIS4', '70');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('5', '1', 'CIS5', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('6', '2', 'CIS1', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('7', '2', 'CIS2', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('8', '2', 'CIS3', '70');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('9', '2', 'CIS4', '80');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('10', '2', 'CIS5', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('11', '3', 'CIS1', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('12', '3', 'CIS2', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('13', '3', 'CIS3', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('14', '3', 'CIS4', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('15', '3', 'CIS5', '75');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('1', '4', 'CIS1', '70');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('2', '4', 'CIS2', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('3', '4', 'CIS3', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('4', '4', 'CIS4', '65');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('5', '4', 'CIS5', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('6', '5', 'CIS1', '75');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('7', '5', 'CIS2', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('8', '5', 'CIS3', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('9', '5', 'CIS4', '80');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('10', '6', 'CIS5', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('11', '6', 'CIS1', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('12', '7', 'CIS2', '80');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('13', '7', 'CIS3', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('14', '7', 'CIS4', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('15', '8', 'CIS5', '75');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('1', '8', 'CIS1', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('2', '8', 'CIS2', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('3', '9', 'CIS3', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('4', '9', 'CIS4', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('5', '9', 'CIS5', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('6', '9', 'CIS5', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('7', '10', 'CIS1', '85');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('8', '10', 'CIS2', '70');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('9', '10', 'CIS3', '75');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('10', '10', 'CIS4', '60');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('11', '11', 'CIS1', '55');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('12', '11', 'CIS2', '65');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('13', '12', 'CIS3', '50');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('14', '13', 'CIS4', '95');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('15', '13', 'CIS5', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('1', '14', 'CIS1', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('2', '14', 'CIS2', '90');

INSERT INTO grades(grades_courses_id, grades_students_id, grades_professors_id, grades_grade)
VALUES ('3', '15', 'CIS3', '90');