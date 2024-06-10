create database empresa_guitar_db;

create table guitars(
id serial primary key,
name varchar(50) not null,
brand varchar(50) not null,
model varchar(50) not null,
body varchar(50) not null,
color varchar(50) not null,
pickups varchar(50),
string int,
price int,
stock int,
imageurl varchar(50) default '/uploads/notfound.png',
createat timestamp with time zone default now()
);

select * from guitars g 