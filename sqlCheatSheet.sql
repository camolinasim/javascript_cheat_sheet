-- create database
create database databaseName;

-- delete database
drop database databaseName;

-- select a database to use
use databaseName;

-- create table
create table tableName(
  id int not null auto_increment,
  name varchar(20) not null,
  primary key (id)
  -- foreign key (id_name) references tableName(id)
);

-- edit table
alter table test add anotherColumn varchar(20)

-- drop table
drop table test

-- populate a table / insert values to table
insert into tableName (name)
values ('some name'), ('another name'), ('and so on...')
-- can also be written as: insert into tableName(property1, p2, p3)
                        -- values (v1,v2,v3), (v1,v2,v3)

-- query the database
select * from bands;

-- query with a limit /get only a part of everything
select * from bands limit 2

-- query one property of a table
select property from tableName

-- rename columns
select id as 'ID', name AS 'Band Name' from tableName

-- order table / sort table
select * from tableName order by property --ASC/DESC (default is ASC)

-- get only unique values (get rid of repeated values)
select distinct property from tableName

-- update table / edit table
update tableName set property = 'some value' where identifier = 'some value'

-- filter by condition
select * from tableName where release_year > 1999

-- filter by substring
select * from tableName where property LIKE '%some_substring%'

-- between
SELECT * FROM movies where year between 2000 and 2010

-- not between
SELECT * FROM movies where year not between 2000 and 2010

--List the next five Pixar movies sorted alphabetically
select * from Movies order by title limit 5 offset 5
