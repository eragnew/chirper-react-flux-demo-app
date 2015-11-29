var dispatcher = require('./dispatcher');
var constants = require('./constants');

exports.chirp = function(data) {
  dispatcher.dispatch({
    actionType: constants.CHIRP,
    data: data
  });
};

Object.keys(constants).forEach(function(key) {
  var funcName = key.split('_').map(function(word, i) {
    if (i === 0) return word.toLowerCase();
    return word[0] + word.slice(1).toLowerCase();
  });
  console.log(funcName);
});
