# Complete SQL and Databases Bootcamp 2023

## Zero to Mastery on Udemy [Course Link](https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/)

--------------------------------------------------------------------------

## Queries

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
SELECT emp_no AS "Employee #", birth_date AS "Birthday", first_name AS "First Name" FROM "public"."employees";

-- Concatenate First & Last Name
SELECT CONCAT(first_name, ' ', last_name) AS "Full Name" FROM "public"."employees";

-- Find Employee: Mayumi Schueller
SELECT first_name, last_name FROM "public"."employees"
WHERE first_name = 'Mayumi' AND last_name = 'Schueller';

-- Find Georgi Facello & Bezalel Simmel
SELECT first_name, last_name, hire_date FROM employees
WHERE first_name = 'Georgi' AND last_name = 'Facello' AND hire_date = '1986-06-26' OR first_name = 'Bezalel' AND last_name = 'Simmel';

-- Find all Female Customers from OR & NY
SELECT COUNT(firstname) FROM customers;
WHERE  (state = 'OR' OR state = 'NY') AND gender = 'F';


-- Select Count of Employees that are not 55 or 20
SELECT COUNT(age) FROM customers
WHERE NOT age = 55 AND NOT age=20;

-- How many female customers do we have from the state of Oregon (OR)?
SELECT COUNT(firstName)
FROM customers
WHERE gender = 'F' AND state = 'OR';

-- Who over the age of 44 has an income of 100 000 or more? (excluding 44)
SELECT COUNT(income)
FROM customers
WHERE age > 44 AND income >= 100000;

-- Who between the ages of 30 and 50 has an income less than 50 000?
SELECT COUNT(income)
FROM customers
WHERE age >= 30 AND age <= 50 AND income < 50000;

-- What is the average income between the ages of 20 and 50? (Excluding 20 and 50)
SELECT AVG(income)
FROM customers
WHERE age > 20 AND age < 50;


-- Select people either under 30 or over 50 with an income above 50000 Include people that are 50 that are from either Japan or Australia
SELECT firstname, income, age from customers
WHERE income > 50000 AND (age < 30 OR age >= 50)
AND (country = 'Japan' OR country = 'Australia')

-- What was our total sales in June of 2004 for orders over 100 dollars?
SELECT SUM(totalamount) from orders
WHERE (orderdate >= '2004-06-01' AND orderdate <= '2004-06-30') 
AND totalamount > 100

-- Adjust the following query to display the null values as "No Address"
SELECT COALESCE(address2, 'No Address')
FROM customers

-- Fix the following query to apply proper 3VL
SELECT *
FROM customers
WHERE address2 IS NOT null;

-- Fix the following query to apply proper 3VL
SELECT coalesce(lastName, 'Empty'), * FROM customers
WHERE (age IS NULL);

-- Who between the ages of 30 and 50 has an income less than 50 000?
SELECT *
FROM customers
WHERE age BETWEEN 30 AND 50 AND income < 50000;

-- What is the average income between the ages of 20 and 50? (Including 20 and 50)
SELECT AVG(income)
FROM customers
WHERE age BETWEEN 20 AND 50;

--How many orders were made by customer 7888, 1082, 12808, 9623
SELECT COUNT(orderid)
FROM orders
WHERE customerid IN (7888, 1082, 12808, 9623)


-- How many cities are in the district of Zuid-Holland, Noord-Brabant and Utrecht?
SELECT COUNT(id)
FROM city
WHERE district IN ('Zuid-Holland', 'Noord-Brabant', 'Utrecht');

/*
              USING LIKE / MATCHING
*/
-- Find the age of all employees who's name starts with M.
SELECT emp_no, first_name, EXTRACT (YEAR FROM AGE(birth_date)) AS "age" FROM employees
WHERE first_name ILIKE 'M%';

-- How many people's name start with A and end with R?
SELECT count(emp_no) FROM employees
WHERE first_name ILIKE 'A%R';
                                                  
-- How many people's zipcode have a 2 in it?.
SELECT count(customerid) FROM customers
WHERE zip::text LIKE '%2%';


-- How many people's zipcode start with 2 with the 3rd character being a 1.
SELECT count(customerid) FROM customers
WHERE zip::text LIKE '2_1%';

-- Which states have phone numbers starting with 302?
SELECT coalesce(state, 'No State') as "State" FROM customers
WHERE phone::text LIKE '302%';

/*
              DATE / TIME FUNCTIONS
*/
-- Changing Time Zone for User
ALTER USER postgres SET timezone='UTC';

-- Changing Time Zone for Session
SET TIME ZONE 'UTC';

-- Get me all the employees above 60, use the appropriate date functions
SELECT AGE(birth_date), * FROM employees
WHERE (
   EXTRACT (YEAR FROM AGE(birth_date))
) > 60 ;

SELECT count(birth_date) FROM employees
WHERE birth_date < now() - interval '61 years'
            
-- How many employees where hired in February?
SELECT count(emp_no) FROM employees
WHERE EXTRACT (MONTH FROM hire_date) = 2;

-- How many employees were born in november?
SELECT COUNT(emp_no) FROM employees
WHERE EXTRACT (MONTH FROM birth_date) = 11;

-- Who is the oldest employee?
SELECT MAX(AGE(birth_date)) FROM employees;

-- How many orders were made in January 2004?
SELECT COUNT(orderid)
FROM orders
WHERE DATE_TRUNC('month', orderdate) = date '2004-01-01';

/*
              USING DISTINCT
*/
-- What unique titles do we have?
SELECT DISTINCT title FROM titles;

-- How many unique birth dates are there?
SELECT COUNT(DISTINCT birth_date)
FROM employees;

-- Can I get a list of distinct life expectancy ages. Make sure there are no nulls
SELECT DISTINCT lifeexpectancy FROM country
WHERE lifeexpectancy IS NOT NULL
ORDER BY lifeexpectancy;

/*
              USING ORDER BY
*/
-- Sort employees by first name ascending and last name descending
SELECT * FROM employees
ORDER BY first_name ASC, last_name DESC;

-- Sort employees by age
SELECT * FROM employees
ORDER BY birth_date;

-- Sort employees who's name starts with a "k" by hire_date
SELECT * FROM employees
WHERE first_name ILIKE 'k%'
ORDER BY hire_date;

/*
              USING JOINS
*/
-- Get all orders from customers who live in Ohio (OH), New York (NY) or Oregon (OR) state ordered by orderid
SELECT c.firstname, c.lastname, o.orderid FROM orders AS o
INNER JOIN customers AS c ON o.customerid = c.customerid
WHERE c.state IN ('NY', 'OH', 'OR')
ORDER BY o.orderid;


-- Show me the inventory for each product
SELECT p.prod_id, i.quan_in_stock
FROM products AS p
INNER JOIN inventory AS i ON p.prod_id = i.prod_id 


-- Show me for each employee which department they work in
SELECT e.first_name, dp.dept_name
FROM employees AS e
INNER JOIN dept_emp AS de ON de.emp_no = e.emp_no
INNER JOIN departments AS dp ON dp.dept_no = de.dept_no


/*
              USING GROUP BY
*/
-- Calculate the total amount of employees per department using grouping sets
SELECT grouping(e.dept_no), e.dept_no, COUNT(e.emp_no)
FROM public.dept_emp AS e
GROUP BY(
  GROUPING SETS (
  (e.dept_no),
      ()
  )
ORDER BY e.dept_no


-- Calculate the total average salary per department and the total using grouping sets
select grouping(de.dept_no), de.dept_no, AVG(e.salary)
FROM public.salaries AS e
JOIN public.dept_emp AS de USING (emp_no)
GROUP BY(
  GROUPING SETS (
    (de.dept_no),
      ()
  )
ORDER BY de.dept_no


-- How many people were hired on did we hire on any given hire date?
SELECT hire_date, COUNT(emp_no) AS "amount"
FROM employees
GROUP BY hire_date
ORDER BY "amount" DESC;

-- Show me all the employees, hired after 1991 and count the amount of positions they've had
SELECT e.emp_no, count(t.title) as "amount of titles"
FROM employees AS e
JOIN titles AS t USING(emp_no)
WHERE EXTRACT (YEAR FROM e.hire_date) > 1991
GROUP BY e.emp_no
ORDER BY e.emp_no;

--Show me all the employees that work in the department development and the from and to date.
SELECT e.emp_no, de.from_date, de.to_date
FROM employees AS e
JOIN dept_emp AS de USING(emp_no)
WHERE de.dept_no = 'd005'
GROUP BY e.emp_no, de.from_date, de.to_date
ORDER BY e.emp_no, de.to_date;

/*
              USING HAVING
*/
-- Show me all the employees, hired after 1991, that have had more than 2 titles
SELECT e.emp_no, count(t.title) AS "Title Amounts"
FROM employees AS e
JOIN titles AS t USING(emp_no)
WHERE EXTRACT (YEAR FROM e.hire_date) > 1991
GROUP BY e.emp_no
HAVING count(t.title) > 2
ORDER BY e.emp_no;

-- Show me all the employees that have had more than 15 salary changes that work in the department development
SELECT e.emp_no, COUNT(s.from_date) AS "Number of Raises"
FROM employees AS e
JOIN salaries AS s USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
WHERE de.dept_no = 'd005'
GROUP BY e.emp_no
HAVING COUNT(s.from_date) > 15
ORDER BY e.emp_no;

--  Show me all the employees that have worked for multiple departments
SELECT e.emp_no, COUNT(de.dept_no) AS "worked for # departments"
FROM employees AS e
JOIN dept_emp AS de USING(emp_no)
GROUP BY e.emp_no
HAVING COUNT(de.dept_no) > 1
ORDER BY e.emp_no;

/*
              USING WINDOW FUNCTIONS
*/
-- Show the population per continent
SELECT
  DISTINCT continent,
  SUM(population) OVER w1 AS "continent population"
FROM country 
WINDOW w1 AS( PARTITION BY continent );

--  To the previous query add on the ability to calculate the percentage of the world population
-- What that means is that you will divide the population of that continent by the total population and multiply by 100 to get a percentage.
-- Make sure you convert the population numbers to float using `population::float` otherwise you may see zero pop up
SELECT
  DISTINCT continent,
  SUM(population) OVER w1 AS "continent population",
  CONCAT( 
      ROUND( 
          ( 
            SUM( population::float4 ) OVER w1 / 
            SUM( population::float4 ) OVER() 
          ) * 100    
      ),'%' ) AS "percentage of population"
FROM country 
WINDOW w1 AS( PARTITION BY continent );

--  Count the number of towns per region
SELECT 
DISTINCT r.id, 
r."name", 
COUNT(t.id) OVER (
    PARTITION BY r.id
    ORDER BY r."name"
) AS "# of towns"
FROM regions AS r
JOIN departments AS d ON r.code = d.region 
JOIN towns AS t ON d.code = t.department
ORDER BY r.id;

/*
              USING CONDITIONALS
*/
-- Create a case statement that's named "price class" where if a product is over 20 dollars you show 'expensive' if it's between 10 and 20 you show 'average' and of is lower than or equal to 10 you show 'cheap'.
SELECT prod_id, title, price, 
    CASE   
      WHEN  price > 20 THEN 'expensive'
      WHEN  price <= 10 THEN  'cheap'
      WHEN  price BETWEEN 10 AND 20  THEN 'average'
    END AS "price class"
FROM products

/*
              USING NULLIF
*/
-- Show NULL when the product is not on special (0)
SELECT prod_id, title, price, NULLIF(special, 0) AS "special"
FROM products

/*
              CREATING VIEWS
*/
-- Shows me all the employees, hired between 1990 and 1995
CREATE VIEW "90-95" AS
SELECT *
FROM employees AS e
WHERE EXTRACT (YEAR FROM e.hire_date) BETWEEN 1990 AND 1995
ORDER BY e.emp_no;

-- Create a view "bigbucks" that: Shows me all employees that have ever had a salary over 80000
CREATE VIEW "bigbucks" AS
SELECT e.emp_no, s.salary
FROM employees AS e
JOIN salaries AS s USING(emp_no)
WHERE s.salary > 80000
ORDER BY s.salary;

```

--------------------------------------------------------------------------

### Information

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
#### Best Practices

- Capitalize SQL Keywords
- Comment Your Queries
- Use "" for Tables & Columns
- Use '' for String & Text Values
- Use UTC Time Zone
- ISO 8601 Date Format

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

#### Joins

- SELF JOIN: A Table Joined With Itself
- INNER JOIN: Returns Records That Have Matching Values In Both Tables
- OUTER JOIN: Returns All Records From Both Tables, And Fills In Nulls Where There Is No Match
- LEFT JOIN: Returns All Records From The Left Table, And The Matching Records From The Right Table
- RIGHT JOIN: Returns All Records From The Right Table, And The Matching Records From The Left Table
- CROSS JOIN: Returns The Cartesian Product Of The Sets Of Records From Both Tables

#### Index Types / Algorithms

- BTREE: Default. Best used for comparisons
  - <, <=, >, >=, BETWEEN, IN, IS NULL, IS NOT NULL
- HASH: Can only handle equality comparisons
  - EXPLAIN ANALYZE =
- GIN: Good For Full-Text Search
- GIST: Good For Range Queries
