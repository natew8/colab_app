INSERT INTO comments (convo_id, author_id, comment, date_created)
VALUES ($1, $2, $3, $4)
returning *;