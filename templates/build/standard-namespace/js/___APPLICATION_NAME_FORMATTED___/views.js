var ___APPLICATION_NAMESPACE___ = ___APPLICATION_NAMESPACE___ || {};

___APPLICATION_NAMESPACE___.ApplicationView = soma.View.extend({

	view: null,

	init: function() {
		this.view = document.getElementById('content');
	},

	updateMessage:function(message) {
		this.view.innerHTML = message;
	},

	dispose: function() {
		this.view = null;
	}

});
___APPLICATION_NAMESPACE___.ApplicationView.NAME = "View::ApplicationView";
