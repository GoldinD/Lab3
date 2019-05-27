'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Loading our routers
let mainRouter = require('./routes/mainRoutes')
let classRouter = require('./routes/classRoutes')


//tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting our routes
app.use("/", mainRouter);
app.use("/class", classRouter);

app.listen(3000)
console.log("Express server running on port 3000")