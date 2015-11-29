var flux = require('flux');

var dispatcher = module.exports = new flux.Dispatcher();

// log every action
dispatcher.register(function(action) {
  console.log(action);
});
