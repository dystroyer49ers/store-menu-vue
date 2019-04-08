var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	_id: Number,
	pid: Number,
	name: String,
	description: String,
	img: String,
	alt: String,
	byLink: String,
	by: String,
	productInfo: String,
	cost: Number,
	qty: Number,
	itemCount: Number,
	productNumber: Number,
	NewOrSale: String,
});

module.exports = mongoose.model('Product', ProductSchema);
