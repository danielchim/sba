var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/form', function (req, res,html) {
  res.render('form.ejs');
});
router.get('/login', function (req, res,html) {
  res.render('login.ejs');
});
router.get('/dashboard', function (req, res,html) {
  res.render('dashboard.ejs');
});
module.exports = router;
