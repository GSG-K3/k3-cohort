BEGIN;

    DROP TABLE IF EXISTS user1
    CASCADE;

CREATE TABLE user1
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email VARCHAR (200) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO user1
    (name,email,password)
VALUES
    ('abood', 'abood@gmail.com', '$2a$10$sQEELGhd0MiQZxwqQYqFx.68DcKb5QuniuOkCHpl6b5HUiisFwy3G'),
    ('duha', 'dha@gmail.com', '$2a$10$nxn65.PFVXScZQ.vuNS5yuBSmzp4E/Pc3.XU4mfAv8nXjmMEONQDi');
 COMMIT;