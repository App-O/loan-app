
var Model = module.exports = {};
var Promise = require('bluebird');

Model.Users = require('../model/users.js');
Model.Clients = require('../model/clients.js');


Model.Users.belongsTo(Model.Clients, {foreignKey: 'client_id', onDelete: 'CASCADE', hooks:true});


Model.sync = function(options) {

	return new Promise(function(resolve, reject) {

		var tables = [];

		tables.push(Model.Clients);
		tables.push(Model.Users);

		Promise.each(tables, function(table) {
			return table.sync(options);
		})

		.then(function() {
			resolve();
		})

		.catch(function(error) {
			reject(error);
		});


	});

}
