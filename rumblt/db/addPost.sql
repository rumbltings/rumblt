insert into posts (type, tag, posttime, content, userid)
values($1, $2, current_timestamp, $3, $4);