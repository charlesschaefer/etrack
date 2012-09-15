var mongoose = require('mongoose')
	, db = mongoose.createConnection('localhost', 'etrack');


var schema = new mongoose.Schema({
    user   : 'string',
    action : 'string',
    date   : {type: Date, default: Date.now}
});
var Track = db.model('Track', schema);

exports.Track = Track;
