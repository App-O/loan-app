


module.exports = function(request, response) {


	var self = this;

	self.error = function(error) {
		var text = '#ERROR#';

		if (error.message != undefined)
			text = error.message;
		else
			text = error;

		console.log(error);
		response.status(error.statusCode == undefined ? 404 : error.statusCode);
		response.send(text);
	}

	self.reply = function(data) {
		response.status(200).json(data);

	}

	self.authenticate = function() {
		return new Promise(function(resolve, reject) {
			resolve();
		});
	}


};
