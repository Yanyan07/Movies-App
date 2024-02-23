SELECT * FROM moviesdb.user;

SELECT * FROM INFORMATION_SCHEMA.TABLES;

use my_db;
-- select * from users;
/* select * from users;
 select * from users;
 */
create database if not exists library;
use library;
create table if not exists books(
	id int primary key,
    title varchar(100),
    author varchar(50) not null
);
alter table books add column publication_date timestamp not null;
alter table books add constraint unique(title);
insert into books(id,title,author, publication_date) 
values(1, "mybook1", "abc", "2023-07-01 00:00:00");
insert into books(id,title,author, publication_date) 
values(2, null, "abc2", "2023-07-11 00:00:00");
insert into books(id,title,author, publication_date) 
values(3, null, "abc3", "2023-07-11 00:00:00");

insert into books(id,title,author,publication_date) 
values(4, "Learn SQL in a Snap", "Jim Dandy", "01-01-01");
update books set title='Oscar' where id=1;
delete from books where id>1 && id<4;

select * from books;
desc books;
drop table books;
select * from books b 
where books.id = 1;

--                          
create database people;
use people;
create table student(
	id int primary key,
    name varchar(50) not null,
    age int 
);
insert into student(id,name,age)
values(1,'Eric',8), (2,'Stan',9), (3,'Kyle',7), (4,'Kenny',8);

select * from student;
select * from student where id=10 or 1=1;

-- 
create table person(
	person_id int primary key,
    first_name varchar(20),
    last_name varchar(20),
    major varchar(20)
);
create table internationalPerson(
	country_id int primary key,
    name varchar(20),
    person_id int references student(person_id) on delete cascade    
);
drop table internationalStudent;
drop table internationalPerson;
drop table sudent;
INSERT INTO person VALUES(1,"Taylor", "Swift","English Literature");
INSERT INTO person VALUES(2,"Stephen", "Hawking","Physics");
insert into internationalPerson values(1,"USA",2);
insert into internationalPerson values(2,"USA",2);

show tables;
select * from person;
select * from internationalPerson;

-- 
create table emp1(
	id int primary key,
    name varchar(20),
    age int 
);
create table emp2(
	id int primary key,
    name varchar(20),
    age int 
);
insert into emp1 
values(1,'eric',8), (2,'stan',9), (3,'kyle',7), (4,'kenny',8);
insert into emp2
values(1,'wendy',8), (2,'stan',9), (3,'kyle',9), (4,'nicole',8);

select * from emp1;
select * from emp2;

select * from emp1 union select * from emp2;
select * from emp1 union all select * from emp2;
create view myem as select id, name, age from emp1;






