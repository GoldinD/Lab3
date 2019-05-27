'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Loading our routers
let mainRouter = require('./routes/mainRoutes')
let classRouter = require('./routes/classRoutes')

//let db = require('./database/databaseRoutes')


//tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting our routes
app.use("/", mainRouter);
app.use("/class", classRouter);
//app.use("/database", db);


//// database setup
let mysql = require('mysql')

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql' // dont have this initially therefore have to write route to set it all up. Therefore, look at Create db
})

db.connect((err) => {
    if (err){throw error}
    console.log('MySQL connected')
})

// // Create db
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result)
//         res.send('Database Created')
//     });
// });

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE POSTS(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Posts table created')
    })
})

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {
        title: 'post 1',
        body: 'This is post number 1'
    }
    let sql = 'INSERT INTO POSTS SET ?'
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Post 1 added')
    })
})

// Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {
        title: 'post 2',
        body: 'This is post number 2'
    }
    let sql = 'INSERT INTO POSTS SET ?'
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Post 2 added')
    })
})

// Select Posts
app.get('/getpost', (req, res) => {
    let sql = 'SELECT * FROM POSTS'
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.send(results)
    })
})


// Select Post 1
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send(result)
    })
})

// update post
app.get('/update/:id', (req, res) => {
    let newtit = 'hello'
    let sql = `UPDATE posts SET body = '${newtit}' WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send(result)
    })
})

// delete post
app.get('/delete/:id', (req, res) => {
    let newtit = 'hello'
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.redirect(req.baseUrl + '/getpost/');
    })
})


app.listen(3000)
console.log("Express server running on port 3000")