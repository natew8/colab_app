SELECT c.username AS project_creator, p.deadline, p.created FROM projects p
JOIN colab_user c ON c.id = p.project_creator_id
WHERE p.id = $1;