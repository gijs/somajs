var ApplicationCommand = soma.Command.extend({

	execute: function(event) {
		switch(event.type) {
			case ApplicationEvent.SEND_MESSAGE:
				var message = this.getModel(ApplicationModel.NAME).data;
				this.getWire(ApplicationWire.NAME).updateMessage(message);
				break;
		}
	}

});
