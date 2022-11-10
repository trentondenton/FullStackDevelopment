# Complete SQL and Databases Bootcamp 2023

## Zero to Mastery on Udemy [Course Link](https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/)

--------------------------------------------------------------------------

### Queries

--------------------------------------------------------------------------

- **DCL** (Data Control Language) Commands
  - GRANT
  - REVOKE
- **DDL** (Data Definition Language) Commands
  - CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT
- **DQL** (Data Query Language) Commands
  - SELECT
- **DML** (Data Manipulation Language) Commands
  - INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE

### Inital Queries

```sql
-- Get All Employees
SELECT * FROM "public"."employees";

-- Find All Departments
SELECT * FROM "public"."departments";

-- Find Salary for Employee 10001
SELECT MAX(salary) FROM "public"."salaries"
WHERE "emp_no" = 10001; -- 60117

-- Find Title for Employee 10006
SELECT title FROM "public"."titles"
WHERE "emp_no" = 10006; -- Senior Engineer

-- Renaming Column in Results
SELECT emp_no AS "Employee #", birth_date as "Birthday", first_name as "First Name" FROM "public"."employees";

-- Concatenate First & Last Name
SELECT CONCAT(first_name, ' ', last_name) AS "Full Name" FROM "public"."employees";

-- Find Employee: Mayumi Schueller
SELECT first_name, last_name FROM "public"."employees"
WHERE first_name = 'Mayumi' AND last_name = 'Schueller';

-- Find Georgi Facello & Bezalel Simmel
SELECT first_name, last_name, hire_date FROM employees
WHERE first_name = 'Georgi' AND last_name = 'Facello' AND hire_date = '1986-06-26' or first_name = 'Bezalel' AND last_name = 'Simmel';

-- Find all Female Customers from OR & NY
SELECT COUNT(firstname) FROM customers;
WHERE  (state = 'OR' OR state = 'NY') AND gender = 'F';


-- Select Count of Employees that are not 55 or 20
SELECT COUNT(age) from customers
WHERE NOT age = 55 AND NOT age=20;

-- How many female customers do we have from the state of Oregon (OR)?
SELECT COUNT(firstName)
FROM customers
WHERE gender = 'F' and state = 'OR';

-- Who over the age of 44 has an income of 100 000 or more? (excluding 44)
SELECT COUNT(income)
FROM customers
WHERE age > 44 and income >= 100000;

-- Who between the ages of 30 and 50 has an income less than 50 000?
SELECT COUNT(income)
FROM customers
WHERE age >= 30 and age <= 50 AND income < 50000;

-- What is the average income between the ages of 20 and 50? (Excluding 20 and 50)
SELECT AVG(income)
FROM customers
WHERE age > 20 and age < 50;


-- Select people either under 30 or over 50 with an income above 50000 Include people that are 50 that are from either Japan or Australia

SELECT firstname, income, age from customers
WHERE income > 50000 AND (age < 30 OR age >= 50)
and (country = 'Japan' OR country = 'Australia')

-- What was our total sales in June of 2004 for orders over 100 dollars?
SELECT SUM(totalamount) from orders
WHERE (orderdate >= '2004-06-01' AND orderdate <= '2004-06-30') 
AND totalamount > 100



```

--------------------------------------------------------------------------

### Information

--------------------------------------------------------------------------

#### Best Practices

- Capitalize SQL Keywords
- Comment Your Queries
- Use "" for Tables & Columns
- Use '' for String & Text Values

#### Comparison Operators

- < Less Than
- \> Greater Than
- <= Less Than or Equal To
- \>= Greater Than or Equal To
- = Equal To
- <> or != Not Equal To

#### Logical Operators

- AND: Both Conditions Must Be True
- OR: Either Condition Must Be True
- NOT: Inverts True/False Value
