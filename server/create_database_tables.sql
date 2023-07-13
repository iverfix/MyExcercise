CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(40) UNIQUE,
    password VARCHAR(40) NOT NULL,
    email VARCHAR(50) NOT NULL,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    admin boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS session(
    session_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS exercise(
    exercise_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS routine(
    routine_id SERIAL PRIMARY KEY
);

