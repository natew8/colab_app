INSERT INTO projects_users(users_id, project_id)
VALUES ($1,$2)
returning *;