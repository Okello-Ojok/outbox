var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const UserReg = mongoose.model('UserReg');
const Utilities = mongoose.model('Utilities');
const Consumption = mongoose.model('Consumption');
const Events = mongoose.model('Events');
const Assets = mongoose.model('Assets');
const UserInfo = mongoose.model('UserInfo');
const Services = mongoose.model('Services');
const Payments = mongoose.model('Payments');
const Branding = mongoose.model('Branding');






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
  });
});




module.exports = router;
