"use strict";

/**
 * Home
 * The Home module handles the actions on the home screen.
 * @author rishabhsrao
 */
define(["jquery"], function() {
	/**
	 * Initializes this view model.
	 */
	var initialize = function() {

	};

	/**
	 * Returns a string representation of the <code>Home</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Home",
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