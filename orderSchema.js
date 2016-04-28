var mongoose = require('mongoose');

// var User = require('./userSchema');

var Product = require('./productSchema');

var orderSchema = new mongoose.Schema({
    order: [ Product ],
    user: { type: String, ref: "User" },
    status: {
      type: String,
      lowercase: true,
      enum: ["processing", "shipped", "delivered"],
      default: "processing"
    }
});

module.exports = mongoose.model("Orders", orderSchema);
