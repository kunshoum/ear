var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(123456789)
  res.render('index', { title: '123123123131312313132' });
});

module.exports = router;
