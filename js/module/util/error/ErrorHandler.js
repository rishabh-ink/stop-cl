"use strict";

/**
 * Error handling module.
 * This module deals with any errors in the application and tries to provide a
 * graceful degradation mechanism.
 * @author See /humans.txt
 */
define(["jquery", "use!debug"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Root</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "util.error.ErrorHandler",
			members: {}
		}
	}

	return {
		toString: toString
	}

	// Call initialize when this module is loaded.
	initialize();
});