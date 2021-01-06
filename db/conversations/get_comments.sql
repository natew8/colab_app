SELECT cu.username, cu.profile_pic, c.comment, c.date_created FROM comments c
JOIN colab_user cu ON cu.id = c.author_id
WHERE convo_id = $1