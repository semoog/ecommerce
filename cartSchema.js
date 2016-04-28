var mongoose = require('mongoose');

// var Product = require('./productSchema');

module.exports = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "productModel" },
  quantity: { type: Number }
});
