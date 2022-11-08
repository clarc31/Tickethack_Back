var express = require('express');
var router = express.Router();

const Trip = require('../models/trips')

// Rechercher ds la bdd un trajet
router.post('/', (req,res)=> {
  Trip.find({departure:req.body.departure, arrival:req.body.arrival}/*, date:req.body.date}*/).then(dbData => {
    if (dbData.length > 0) {
      res.json({trips : dbData});
      console.log(dbData);
    } else {
      res.json({result: false, error : 'This trip does\'nt exist'})
    }
  })
})

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
