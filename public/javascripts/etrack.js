var eTrack = function(srv_addr) {
	this.session = null;
	this.actions = {};
	var address = (srv_addr ? srv_addr : 'http://localhost:3030/track/');

	function connect(addr) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', addr);
		script.onload = function() {
			console.log('registrado');
		}
		document.body.appendChild(script);
	}

	// saves the action user executed
	// {action} is a string that makes sense to your system
	this.save = function(action) {
		var addr = address + action + '/' + this.session;
		connect(addr);
	};

	// tracks the links with data-action="" automatically
	this.trackLinks = function(attr) {
		var that = this;
		if (!attr)
			attr = 'action';
		$('a[data-' + attr + ']').live('click', function() {
			that.save($(this).attr('data-' + attr));
		});
	};
};