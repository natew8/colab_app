DELETE FROM conversations
WHERE song_id = $1

DELETE FROM song_versions
WHERE song_id = $1;

DELETE FROM songs
WHERE id = $1;