INSERT INTO conversations (author_id, subject_line,song_time, body, convo_created, song_version, song_id)
VALUES ($1,$2,$3,$4,$5,$6,$7)
returning subject_line, author_id,song_time,body,convo_created, song_id, song_version