var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
router.get('/404', function (req, res,html) {
  res.render('comming.ejs');
});
module.exports = router;
