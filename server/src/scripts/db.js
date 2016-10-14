var sprintf   = require('yow').sprintf;
var isString  = require('yow').isString;
var Sequelize = require('sequelize');
var config    = require('./config.js');

var options = {
	host: config.mysql.host,
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }

};

var db = module.exports = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, options);
