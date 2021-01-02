SELECT p.project_title, p.deadline, c.username, p.created FROM projects p
JOIN projects_users pu ON pu.project_id = p.id
JOIN colab_user c ON c.id = pu.users_id
WHERE c.id = $1;