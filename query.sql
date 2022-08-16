
CREATE TABLE topics(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256)
);

CREATE TABLE articles(
    id SERIAL PRIMARY KEY,
    topic_id INT,
    title VARCHAR(256),
    content VARCHAR(500),
    date VARCHAR(500)
);
