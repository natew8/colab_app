DELETE FROM projects_users
WHERE users_id = $1 and project_id = $2
returning *