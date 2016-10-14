var router       = require('express').Router();
var sprintf      = require('yow').sprintf;
var Server       = require('../server.js');

router.get('/', function (request, response) {

	var server = new Server(request, response);

	var foo = {};
	foo.text = 'hej';
	foo.number = 2;

	server.reply(foo);

});

router.get('/:id', function (request, response) {

	var server = new Server(request, response);

	var foo = {};
	foo.text = 'hej';
	foo.number = 2;

	server.reply(foo);

});



module.exports = router;
