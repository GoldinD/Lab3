'use strict'

let path = require('path');
let express = require('express');
let router = express.Router();
let classList = []; //our class list array

//RESTful api
router.get('/api/list', function (req, res) {
        res.json(classList); //Respond with JSON
});

router.get('/api/get/:id', function (req, res) {
res.json(classList[req.params.id]); //Notice the wildcard in the URL?
                                    //Try browsing to /api/get/0 once you've added some entries
});
let student
router.post('/api/create', function(req, res){
    console.log("Creating the following student:", req.body.studentName);
    student = {
        'type': 'JSON',
        'name': req.body.studentName,
        'stdNumber': req.body.studentNumber
      }
    classList.push(student);
    res.redirect(req.baseUrl + '/api/list');
});

router.post('/api/delete', function(req, res){
    console.log("deleting a student entry");
});

router.post('/api/edit', function(req, res){
    console.log("editing a student entry");
});
    

////////// old routes to load html pages
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'class', 'index.html'));
});

router.get('/create', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'create.html'));
});

router.get('/delete', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'delete.html'));
});

router.post('/edit', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'edit.html'));
});


module.exports = router;
