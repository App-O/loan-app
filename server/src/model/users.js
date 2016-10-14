var Sequelize = require('sequelize');
var db = require('../scripts/db.js');

var attributes = {
	'name': {
		type          : Sequelize.STRING,
		defaultValue  : '',
		allowNull     : false
	},

	'username': {
		type          : Sequelize.STRING,
		defaultValue  : '',
		allowNull     : false
	},

	'password': {
		type          : Sequelize.STRING,
		defaultValue  : '',
		allowNull     : false
	},

	'status': {
		type          : Sequelize.INTEGER,
		defaultValue  : 0,
		allowNull     : false
	}

};

var options = {
	updatedAt: 'updated',
	createdAt: 'created'

};

module.exports = db.define('users', attributes, options);
