var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/classes?:class?:days?:campuses?', function(req, res){
  schedule = [
    req.query.class,
    req.query.days,
    req.query.campuses  
  ];
  db_call_builder.setClasses(schedule);

  res.json([{"day": "Monday/Wednesday", "time": "08:00AM-10:20AM", "name": "Math111", "campus": "Sylvania"},
            {"day": "Monday/Wednesday", "time": "11:00AM-12:20PM", "name": "Psychology101", "campus": "Sylvania"},
            {"day": "Monday/Wednesday", "time": "02:00PM-04:20PM", "name": "Health/Medecine 252", "campus": "Cascade"},
            {"day": "WEB", "time": "", "name": "Electrical Engineering 101", "campus": "DL"}]);
            
            
          })

module.exports = router;