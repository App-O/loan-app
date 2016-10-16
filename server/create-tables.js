#!/usr/bin/env node

var sprintf = require('yow').sprintf;
var Model = require('./src/scripts/model.js');

var Module = function(args) {

	args = parseArgs();

	function parseArgs() {
		var commander = require('commander');

		commander.version('1.0.0');
		commander.option('-f --force', 'force reacreating tables', false);
		commander.parse(process.argv);

		var args = ['force'];

		args.forEach(function(item) {
			args[item] = commander[item];
		});

		return args;
	}


	function init() {

		Model.sync({force:args.force}).then(function() {
		})

		.catch(function(error) {
			console.error(error);
		});

	}

	init();
}

module.exports = new Module();
