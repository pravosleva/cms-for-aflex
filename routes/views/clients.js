var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'store';
  locals.chatHistoryExample = ['[msg] A: Hello.', '[msg] B: Hi.', '[msg] A: Wsp?'];

  view.query( 'clients', keystone.list('Client').model.find() );

  view.render('clients');
}
