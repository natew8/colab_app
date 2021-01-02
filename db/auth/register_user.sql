INSERT INTO colab_user (username, email, password, role)
VALUES ($1,$2,$3,$4)
returning id, username, profile_pic