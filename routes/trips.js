var express = require('express');
var router = express.Router();

const Trip = require('../models/trips')
let moment = require('moment');


// Rechercher ds la bdd un trajet via route /trips
router.post('/', (req,res)=> {
  const {departure, arrival, date} = req.body;
  //departure = departure[0].toUpperCase()+departure.slice(1,departure.length-1).toLowerCase;
  //arrival=arrival[0].toUpperCase()+arrival.slice(1,arrival.length-1).toLowerCase;

  // ------------ Principe : créer limites du jour date 
  // date1 : début du jour date
  console.log(date);
  const date1 = new Date(date);
  console.log(date1)
  // date2 : fin du jour date
  const date2Nb = date1.getTime() + 864e5;
  const date2 = new Date(date2Nb);
  console.log(date2)
  
  
  Trip.find({departure, arrival}).then(dbData => {
    const rep=[];
    for (el of dbData) {
      if (el.date > date1 && el.date < date2) {
        rep.push(el);
      }
    }
    console.log(rep);
    res.json({trips : rep})
    })
    
})

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
