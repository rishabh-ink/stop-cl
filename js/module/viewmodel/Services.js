"use strict";

/**
 * Services
 * The Services module handles the page listing the services operating in the vicinity.
 * @author
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Services</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Services",
			members: {
				initalize: initialize,
				toString: toString
			}
		}
	};

	// Call <code>initialize</code> when this module is loaded by requirejs.
	initialize();

	return {
		toString: toString
	};
});