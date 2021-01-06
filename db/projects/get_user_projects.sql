SELECT p.project_title, p.deadline, p.created, p.id, c.username FROM projects p
JOIN colab_user c ON p.project_creator_id = c.id
WHERE c.id = $1
ORDER BY deadline;