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

app.get('/invest', function(req, res) {

	res.send({
		retcode: 2000000,
		data: {
			title: '钱隆第109期-活期',
			earningsYield: '14',
			totalAmount: '100万',
			totalSales: '50000000000'
		}
	});

});

var server = app.listen(3000, function() {
	console.log();
});

