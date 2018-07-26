UPDATE users
SET user_age = $1,
user_email = $2,
user_address = $3
where id = $4
RETURNING *;