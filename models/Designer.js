var keystone = require('keystone');
var Types = keystone.Field.Types;

var Designer = new keystone.List('Designer');

Designer.add({
  name: { type: Types.Name, required: true, initial: true },
  email: { type: Types.Email, required: true, initial: true },
  phone: { type: String, required: true, initial: true },
  location: { type: Types.Location, initial: true },
  description: { type: Types.Html, wysiwyg: true },
});

Designer.defaultColumns = 'name, phone, email, location';
Designer.register();