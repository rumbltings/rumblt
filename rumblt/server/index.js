const express = require('express')
massive = require('massive')
require('dotenv').config()
bodyParser = require('body-parser')
const app = express();

const {
    CONNECTION_STR,
    SERVER_PORT
} = process.env;


app.use(bodyParser.json()); 

massive(CONNECTION_STR).then( (db) => {
    console.log('db connected');
    app.set('db', db);  
})

app.get('/api/users/:userid', (req, res) => {
    const userid = req.params.userid;
    console.log(req.params,'sup')
    const dbInstance = req.app.get('db');
    dbInstance.getUser([userid])
    .then(users => {res.status(200).send(users);
   }).catch(err => {
    console.log(err);
    res.status(500).send(err)
});
});

app.get('/api/users/', (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.getallusers().then(users => {
        console.log(users);
        res.status(200).send(users);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    });
})

app.post('/api/newuser/', (req, res)=> {
    let{userid, name, username, blogtitle} = req.body;
    req.app.get('db').addUser([userid, name, username, blogtitle]).then(ok=> {
        res.sendStatus(200);
    }).catch(err=> {
        console.log(err);
        res.status(500).send(err)
    })
})

app.listen(SERVER_PORT, () => {console.log(`listening on ${SERVER_PORT}`)});
