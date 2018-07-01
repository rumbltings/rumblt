const express = require('express'),
massive = require('massive');
require('dotenv').config();

const app = express();

const {
    CONNECTION_STR,
    SERVER_PORT
} = process.env;

massive(CONNECTION_STR).then( (db) => {
    console.log('db connected');
    app.set('db', db);  
})


app.listen(SERVER_PORT, () => {console.log(`listening on ${SERVER_PORT}`)});
