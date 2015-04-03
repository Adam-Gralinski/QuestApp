var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = function(app) {
		console.log('app', app.get('views'))
		return router;
}
