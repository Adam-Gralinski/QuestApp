var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/questgiver', function(req, res, next) {
  res.render('questgiver', { title: 'QuestApp - Quest Giver' });
});

module.exports = router;
