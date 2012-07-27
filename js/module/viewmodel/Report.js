"use strict";

/**
 * Report
 * The Report module handles the report new child labor sighting page.
 * @author rishabhsrao
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Report</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Report",
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