var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/quest', function(req, res, next) {
  res.render('quest', { title: 'QuestApp' });
});

module.exports = router;
