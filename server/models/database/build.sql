BEGIN;

    DROP TABLE IF EXISTS users
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email VARCHAR 
    (200) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO users
    (name,email,password)
VALUES
    ('abood', 'abood@gmail.com', 'abood1997'),
    ('duha', 'dha@gmail.com', 'duha1996');
 COMMIT;