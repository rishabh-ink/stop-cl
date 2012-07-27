"use strict";

/**
 * Stat
 * The Stat module houses the statistics model.
 * @author
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Stat</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Stat",
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