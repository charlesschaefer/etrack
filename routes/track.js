
exports.track = function(req, res) {
	var tipo = req.params.tipo;
	var session = req.params.session;
	var Track = require('../models/track').Track;

	var t = new Track({
		user:session, 
		action: tipo
	});
	t.save(function(err) {
		res.contentType('application/json');
		res.send('var etrack_ok = ' + (!err).toString() + ';');
	});
};
