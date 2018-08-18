var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'order';

	// Load the orders by sortOrder
	view.query('orders', keystone.list('orders').model.find().sort('sortOrder'));

	// Render the view
	view.render('order');

};
