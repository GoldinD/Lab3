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
    res.sendFile(path.join(__dirname, '../views', 'class', 'index.html'));
});

router.post('/api/create', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'create.html'));
    console.log("creating a student entry");
});

router.post('/api/delete', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'delete.html'));
    console.log("deleting a student entry");
});

router.post('/api/edit', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'class', 'edit.html'));
    console.log("editing a student entry");
});


module.exports = router;
