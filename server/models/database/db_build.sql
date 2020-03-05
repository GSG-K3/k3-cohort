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
    ('abood', 'Dura','abood@gmail.com', 'electrical engineering'),
    ('duha', 'bani-naim','duha@gmail.com', 'computer engineering'),
    ('tasneem', 'Halhul','tasneem@gmail.com', 'computer engineering'),
    ('hanan', 'Dura','hanan@gmail.com', 'computer engineering'),
    ('Bebo', 'hebron','bayan@gmail.com', 'computer engineering'),
    ('Hussein', 'Dura','hussein@gmail.com', 'IT'),
    ('rahaf', 'samoo3','rahaf@gmail.com', 'computer engineering'),
    ('Beno', 'hebron','beno@gmail.com', 'accounting'),
    ('Karmel', 'Bethlehem','karmel@gmail.com', 'Hebrew'),
    ('sahar', 'soureef','dahar@gmail.com', 'computer engineering');



    -- ('duha', 'dha@gmail.com', 'duha1996');
    
 COMMIT;