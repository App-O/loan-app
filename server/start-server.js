#!/usr/bin/env node

var express = require('express');
var app = express();
var cors = require('cors');
var sprintf = require('yow').sprintf;
var bodyParser = require('body-parser');
var Model = require('./src/scripts/model.js');

var Module = function(args) {

	args = parseArgs();

	function parseArgs() {
		var commander = require('commander');

		commander.version('1.0.0');
		commander.option('-l --log', 'redirect logs to file');
		commander.option('-p --port <port>', 'listens to specified port', 5000);
		commander.parse(process.argv);

		var args = ['port', 'log'];

		args.forEach(function(item) {
			args[item] = commander[item];
		});

		return args;
	}

	function listen() {
		app.set('port', (args.port || 3000));
		app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
		app.use(bodyParser.json({limit: '50mb'}));
		app.use(cors());

		app.use('/users', require('./src/routes/users.js'));

		app.listen(app.get('port'), function() {
			console.log("Node app is running on port " + app.get('port'));
		});

	}

	function init() {
		listen();

	}

	init();
}

module.exports = new Module();
