var express = require('express');
var router = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('mongodb://127.0.0.1:27017/Dietology', ['Patients','Checks','Diets']);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("content-type","application/json");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
  });

// Get All
router.get('/allPatients', function(req, res, next){
    db.Patients.find(function(err, patient){
        if(err){
            res.send(err);
            console.log(err);
        }
        console.log(patient)
        res.json(patient);
    });
});



// Get Filter by id
router.get('/patient/:id', function(req, res, next){
    console.log(req.params.id);
    db.Patients.find({_id: mongojs.ObjectId(req.params.id)}, function(err, patient){
        if(err){
            res.send(err);
        }
        res.json(patient);
    });
});

//Save user
router.post('/newPatient', function(req, res, next){
    if(req.body != null)
        var patient = req.body;
    console.log(patient);
    if(!patient){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.Patients.save(patient, function(err, patient){
            if(err){
                res.send(err);
            }
            res.json(patient);
        });
    }
});

//Save Checks
router.post('/newCheck', function(req, res, next){
    if(req.body != null)
        var check = req.body;
    console.log(check);
    if(!check){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.Checks.save(check, function(err, check){
            if(err){
                res.send(err);
            }
            res.json(check);
        });
    }
});

// Get Filter by id
router.get('/check/:idPatient', function(req, res, next){
    console.log(req.params.idPatient);
    db.Checks.find({idPatient: req.params.idPatient}, function(err, check){
        if(err){
            res.send(err);
        }
        res.json(check);
    });
});

router.post('/newDiet', function(req, res, next){
    if(req.body != null)
        var diet = req.body;
    console.log(diet);
    if(!diet){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.Diets.save(diet, function(err, diet){
            if(err){
                res.send(err);
            }
            res.json(diet);
        });
    }
});

router.get('/diet/:idPatient', function(req, res, next){
    console.log(req.params.idPatient);
    db.Diets.find({idPatient: req.params.idPatient}, function(err, diet){
        if(err){
            res.send(err);
        }
        res.json(diet);
    });
});

router.get('/dietId/:id', function(req, res, next){
    console.log(req.params.id);
    db.Diets.find({_id: mongojs.ObjectId(req.params.id)}, function(err, diet){
        if(err){
            res.send(err);
        }
        res.json(diet);
    });
});


router.listen(5000);