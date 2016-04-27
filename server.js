// dependencies

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// mongoose init

var mongoose = require('mongoose');

var product = require('./productSchema');

mongoose.connect('mongodb://localhost/ecommerce');

// app init

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var port = 3000;

// SERVER METHODS

app.get('/api/products', function(req, res){
	product.find(req.query, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});

app.get('/api/products/:id', function(req, res){
	product.findById(req.params.id, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});

app.post('/api/products', function(req, res){
	product.create(req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});

app.put('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});

app.delete('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	product.findByIdAndRemove(req.params.id, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});

// LISTEN

app.listen(port, function() {
    console.log("Listening on port ", port);
});
