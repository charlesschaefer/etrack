
exports.track = function(req, res) {
	var type = req.params.type;
	var session = req.params.session;
	var Track = require('../models/track').Track;

	var t = new Track({
		user:session, 
		action: type
	});
	t.save(function(err) {
		res.contentType('application/json');
		res.send('var etrack_ok = ' + (!err).toString() + ';');
	});
};
