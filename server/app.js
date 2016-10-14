var express = require('express');
var app = express();
var cors = require('cors');
var sprintf = require('yow').sprintf;
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

app.use('/users', require('./routes/users.js'));

app.listen(app.get('port'), function() {
	console.log("Node app is running on port " + app.get('port'));
});

module.exports = app;
