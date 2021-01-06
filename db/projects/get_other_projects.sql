SELECT p.project_title, p.deadline, p.created, c.username, p.id FROM colab_user c
JOIN projects p on c.id = p.project_creator_id
JOIN projects_users pu ON p.id = pu.project_id
WHERE pu.users_id = $1
ORDER BY deadline;