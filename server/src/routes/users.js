var router       = require('express').Router();
var sprintf      = require('yow').sprintf;

var Server       = require('../scripts/server.js');
var db           = require('../scripts/db.js');
var Model        = require('../scripts/model.js');

router.get('/', function (request, response) {

	var server = new Server(request, response);

	server.authenticate().then(function(session) {

		Model.Users.findAll().then(function(users) {
			server.reply(users);

		})
		.catch(function(error) {
			server.error(error);
		});

	})
	.catch(function(error) {
		server.error(error);
	});

});

router.get('/:id', function (request, response) {


	var server = new Server(request, response);

	server.authenticate().then(function(session) {
		Model.Users.findOne({where: {id:request.params.id}}).then(function(user) {
			server.reply(user == null ? {} : user);

		})
		.catch(function(error) {
			server.error(error);
		});

	})
	.catch(function(error) {
		server.error(error);
	});

});

router.post('/', function (request, response) {

	var server = new Server(request, response);

	server.authenticate().then(function(session) {

		var user = Model.Users.build(request.body);

		// Save it
		user.save().then(function(user) {

			server.reply(user);

		})
		.catch(function(error) {
			server.error(error);
		});

	})
	.catch(function(error) {
		server.error(error);
	});

});

router.delete('/:id', function(request, response) {

	var server = new Server(request, response);

	server.authenticate().then(function(session) {

		Model.Users.destroy({where: {id:request.params.id}}).then(function(data) {
			server.reply(null);

		})
		.catch(function(error) {
			server.error(error);
		});

	})
	.catch(function(error) {
		server.error(error);
	});

});

module.exports = router;
