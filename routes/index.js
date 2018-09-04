var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Users = mongoose.model('Users');
const Utilities = mongoose.model('Utilities');
const Consumption = mongoose.model('Consumption');
const Events = mongoose.model('Events');
const Assets = mongoose.model('Assets');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('', (req, res, next) => {
  Assets.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
    }
  })
})


router.get('/:id', (req, res, next) => {
  
})

module.exports = router;
