insert into users(userid, name, username, blogtitle) values($1, $2, $3, $4)
returning *;