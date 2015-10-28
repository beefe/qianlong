var express = require('express');
var app = express();
var domain = 'http://172.16.5.56:3000/';

app.get('/friend', function(req, res) {
	var data = require('./friends');
	
	res.send({
		retcode: 2000000,
		data: data
	});

	console.log('/friend');
});

var server = app.listen(3000, function() {
	console.log();
});

