USE devcamp_sql;

SELECT courses_name AS "Course", students_name AS "Student"
FROM students
JOIN grades
ON grades_students_id = students_id
JOIN courses
ON grades_courses_id = courses_id
ORDER BY courses_name, students_name;