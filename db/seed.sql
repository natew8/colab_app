-- CREATE TABLE colab_user(
--  id SERIAL PRIMARY KEY,
--  username VARCHAR(150),
--  email VARCHAR(250) NOT NULL UNIQUE, 
--  password VARCHAR,
--  role VARCHAR,
--  profile_pic TEXT 
-- )

-- CREATE TABLE projects(
-- id SERIAL PRIMARY KEY,
-- project_title VARCHAR,
-- deadline VARCHAR,
-- project_creator_id INT REFERENCES colab_user(id),
-- created DATE 
-- )


-- CREATE TABLE projects_users(
-- id SERIAL PRIMARY KEY,
-- users_id INT REFERENCES colab_user(id),
-- project_id INT REFERENCES projects(id),
-- song INT REFERENCES songs(id)
-- )


-- CREATE TABLE songs(
-- id SERIAL PRIMARY KEY,
-- project_id INT REFERENCES projects(id),
-- song_creator_id INT REFERENCES colab_user(id),
-- song_title VARCHAR,
-- artist_name VARCHAR,
-- song_key VARCHAR(10),
-- song_bpm VARCHAR(10),
-- song_time VARCHAR(10),
-- status VARCHAR,
-- created DATE
-- )

-- CREATE TABLE song_versions(
-- id SERIAL PRIMARY KEY,
-- song_id INT REFERENCES songs(id)
-- uploader_id INT REFERENCES colab_user(id),
-- version_title VARCHAR(200),
-- audio_file TEXT
-- upload_date DATE
-- )

-- CREATE TABLE conversations (
-- id SERIAL PRIMARY KEY,
-- version_id INT REFERENCES song_versions(id),
-- author_id INT REFERENCES colab_user(id),
-- subject_line VARCHAR(150),
-- song_time VARCHAR(20),
-- body VARCHAR,
-- convo_created DATE
-- )

-- CREATE TABLE comments (
-- id SERIAL PRIMARY KEY,
-- convo_id INT REFERENCES conversations(id),
-- author_id INT REFERENCES colab_user(id),
-- comment VARCHAR,
-- date_created DATE
-- )