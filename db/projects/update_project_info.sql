UPDATE projects
SET project_title = $2
WHERE id = $1
AND project_title <> $2;

UPDATE projects
SET deadline = $3
WHERE id = $1
AND deadline <> $3;
