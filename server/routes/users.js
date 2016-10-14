var router       = require('express').Router();
var sprintf      = require('yow').sprintf;
var Server       = require('../server.js');
var db           = require('../db.js');

router.get('/', function (request, response) {

	var server = new Server(request, response);

	server.authenticate().then(function(session) {

		var query = {};

		query.sql = 'SELECT * from users';

		db.query(query).then(function(users) {
			server.reply(users);
		})
		.catch(function(error) {
			server.error(error);
		});

	}).catch(function(error) {
		server.error(error);
	});


});

router.get('/:id', function (request, response) {

	var server = new Server(request, response);

	server.authenticate().then(function(session) {

		var query = {};

		query.sql    = sprintf('SELECT * from users WHERE id = ?');
		query.values = [request.params.id];

		db.query(query).then(function(rows) {
			if (rows.length >= 1)
				server.reply(rows[0]);
			else
				server.reply({});
		})
		.catch(function(error) {
			server.error(error);
		});

	}).catch(function(error) {
		server.error(error);
	});

});




module.exports = router;
