var nodetime = require('nodetime');

if(!nodetime.__nodetrace__) {
  nodetime.__nodetrace__ = true;

  var orig = nodetime.profile;
  nodetime.profile = function() {
    return orig.apply(this, [{headless: true, dtrace: true}]);
  }
};

module.exports = nodetime;
