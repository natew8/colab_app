INSERT INTO songs (project_id, song_creator_id,song_title, artist_name, song_key, song_bpm, song_time, status, created)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
returning *;