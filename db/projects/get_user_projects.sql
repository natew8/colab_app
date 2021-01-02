SELECT p.project_title, p.deadline, p.created, c.username FROM projects p
JOIN colab_user c ON p.project_creator_id = c.id
WHERE c.id = $1;