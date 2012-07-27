"use strict";

/**
 * Thanks
 * The Thanks module handles the page displaying the thank you and donate page.
 * @author rishabhsrao
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Thanks</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Thanks",
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