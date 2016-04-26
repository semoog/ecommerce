var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var db = mongojs('ecommerce'); // SERVER
var products = db.collection('products'); // COLLECTION


var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var port = 3000;

// SERVER METHODS

app.get('/api/products', function(req, res){
	var query = req.query;
	products.find(query, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});

app.get('/api/products/:id', function(req, res){
	var idObj = {
		_id: mongojs.ObjectId(req.params.id)
	};
	products.findOne(idObj, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});

app.post('/api/products', function(req, res){
	products.save(req.body, function(error, response){
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
	var query = {
		_id: mongojs.ObjectId(req.params.id)
	};
	products.update(query, req.body, function(error, response){
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
	var query = {
		_id: mongojs.ObjectId(req.params.id)
	};
	products.remove(query, function(error, response){
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
