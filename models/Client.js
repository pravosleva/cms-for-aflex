var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Client = new keystone.List('Client', {
  map: { name: 'fullName' },
  singular: 'Client',
  plural: 'Clients',
  autokey: { path: 'slug', from: 'fullName', unique: true }
});

Client.add({
  fullName: { type: String, required: true },
  email: { type: String },
  phone: { type: String, require: true },
});

Client.register();
