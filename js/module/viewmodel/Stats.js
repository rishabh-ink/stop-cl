"use strict";

/**
 * Stats
 * The Stats module handles the display all statistics page.
 * @author rishabhsrao
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Stats</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Stats",
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