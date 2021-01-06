DELETE FROM songs
WHERE project_id = $1;

DELETE FROM projects_users
WHERE project_id = $1;

DELETE FROM projects
WHERE id = $1

returning *
