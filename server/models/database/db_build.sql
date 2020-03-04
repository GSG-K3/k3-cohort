BEGIN;

    DROP TABLE IF EXISTS student
    CASCADE;

CREATE TABLE student
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    email VARCHAR 
    (200) NOT NULL UNIQUE,
    specialized VARCHAR(200) NOT NULL

);

INSERT INTO student
    (name,city,email,specialized)
VALUES
    ('abood', 'dura','abood@gmail.com', 'electrical engineering'),
    ('duha', 'bani-naim','duha@gmail.com', 'computer engineering'),
    ('tasneem', 'dura','aboofjffd@gmail.com', 'computer engineering'),
    ('hanan', 'dura','abkcood@gmail.com', 'computer engineering'),
    ('soso', 'dura','abokod@gmail.com', 'computer engineering');
    -- ('duha', 'dha@gmail.com', 'duha1996');
    
 COMMIT;