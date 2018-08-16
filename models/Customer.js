var keystone = require('keystone');
var Types = keystone.Field.Types;

var Customer = new keystone.List('Customer');

Customer.add({
  name: { type: String, required: true, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  email: { type: Types.Email, required: true, initial: true },
  phone: { type: String, required: true, initial: true },
  location: { type: Types.Location, initial: true }
});

Customer.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Customer.schema.pre('save', function (next) {
  let event = this;
  if (event.isModified('published') && event.published) {
    this.publishDate = Date.now();
  }
  return next();
});

Customer.defaultColumns = 'name, phone, email, location';
Customer.register();