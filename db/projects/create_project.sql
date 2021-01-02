INSERT INTO projects (project_title, deadline, project_creator_id, created)
VALUES ($1,$2,$3,$4)
returning *