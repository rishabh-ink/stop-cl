"use strict";

/**
 * Service
 * The Service module houses the details for an NGO.
 * @author
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Service</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Service",
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