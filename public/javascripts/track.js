var eTrack = function() {
	this.session = null;
	this.actions = {};
	var addres = 'http://localhost:3030/track/';

	function connect(addr) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', addr);
		script.onload = function() {
			alert('putz');
		}
	}

	this.save = function() {
		
	};
};