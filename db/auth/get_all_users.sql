SELECT username, profile_pic FROM colab_user
WHERE id != $1;