USE devcamp_sql;

SELECT students_name AS "Student", MAX(grades_grade) AS "Grade"
FROM grades
JOIN students
ON grades.grades_students_id = students_id
GROUP BY students_name;