CREATE DATABASE perntodo;


CREATE TABLE todo(
    -- we specify id to target this specific todo is unique
    -- SERIAL PRIMARY KEY indicates this value/column is going to be unique
    todo_id SERIAL PRIMARY KEY,
    -- VARCHAR set max character at 255
    description VARCHAR(255)
);