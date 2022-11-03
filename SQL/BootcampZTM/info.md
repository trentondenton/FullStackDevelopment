# Complete SQL and Databases Bootcamp 2023

## Zero to Mastery on Udemy [Course Link](https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/)

--------------------------------------------------------------------------

### Day 1

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
```

#### Best Practices

- Capitalize SQL Keywords
- Comment Your Queries
- Use "" for Tables & Columns
- Use '' for String & Text Values

--------------------------------------------------------------------------

### Day 2

--------------------------------------------------------------------------
