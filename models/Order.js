var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order', {
	map: { name: 'orderNumber' },
	autokey: { path: 'slug', from: 'orderNum', unique: true },
});

Order.add({
	orderNumber: { type: String, required: true, initial: true},
	customer: { type: Types.Relationship, ref: 'Customer', index: true, required: true, initial: true},
	designer: { type: Types.Relationship, ref: 'Designer', index: true, initial: true},
	orderStatus: { type: Types.Select, options: 'pending, awaiting payment, awaiting fulfillment, awaiting shipment, partially shipped, shipped, awaiting pickup, completed, cancelled, declined, refunded, disputed, partially refunded', default: 'pending', index: true },
	clothingType: { type: Types.Select, options: 'sari, churidar, suit, lehngha, kurta, sherwani', index: true},
	orderPlacedOn: { type: Types.Date, index: true},
	orderDueOn: { type: Types.Date, index: true},
	images: { type: Types.CloudinaryImages },
	colorNumber: { type: String, index: true},
	fabric:  { type: String, index: true},
}, 'Sizing', {
	blouse: { type: String, index: true},
	actualBlouseMeasurement: { type: String, index: true},
	length: { type: String, index: true},
	chest: { type: String, index: true},
	chestDrop: { type: String, index: true},
	bust: { type: String, index: true},
	waist: { type: String, index: true},
	hip: { type: String, index: true},
	shoulder: { type: String, index: true},
	frontNeck: { type: String, index: true},
	backNeck: { type: String, index: true},
	sleeveLength: { type: String, index: true},
	sleeveUpperPortion: { type: String, index: true},
	armhole: { type: String, index: true},
	sleeveMori: { type: String, index: true},
	lengthLehnghaPaticot: { type: String, index: true},
	lowerWaist: { type: String, index: true},
	hipForBottoms: { type: String, index: true},
	mori: { type: String, index: true},
	thigh: { type: String, index: true},
	calf: { type: String, index: true},
	crotch: { type: String, index: true},
	notes: { type: Types.Html, wysiwyg: true, height: 150 },
});


Order.defaultColumns = 'orderNumber, customer, orderStatus, orderPlacedOn, orderDueOn';
Order.register();
