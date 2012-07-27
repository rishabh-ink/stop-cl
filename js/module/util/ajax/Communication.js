"use strict";

define(["jquery", "use!debug"], function(jQuery) {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Handles AJAX comms with the server.
	 */
	var communicate = function(payload) {
		debug.info(toString(), "Communicating with server...", payload);
	};

	/**
	 * Returns a string representation of the <code>Root</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "util.ajax.Communicate",
			members: {
				initialize: initialize,
				communicate: communicate,
				toString: toString
			}
		}
	};


	// Call initialize when this module is loaded.
	initialize();

	return {
		communicate: communicate,
		toString: toString
	};
});