var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    firstword: 'We',
    secondword: 'love',
    thirdword: 'Norm',
    message: 'That is all.'
  });
});

module.exports = router;
