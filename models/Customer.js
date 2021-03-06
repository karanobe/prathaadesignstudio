var keystone = require('keystone');
var Types = keystone.Field.Types;

var Customer = new keystone.List('Customer');

Customer.add({
  name: { type: String, required: true, initial: true },
  email: { type: Types.Email, required: true, initial: true },
  phone: { type: String, required: true, initial: true },
  location: { type: Types.Location, initial: true },
  description: { type: Types.Html, wysiwyg: true },
});

Customer.defaultColumns = 'name, phone, email, location';
Customer.register();