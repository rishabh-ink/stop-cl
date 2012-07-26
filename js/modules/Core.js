"use strict";

define(["viewmodel.Root", "jquery", "use!bootstrap", "knockoutjs", "use!debug"],
function(root, jquery, bootstrap, ko, debug) {
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
			classname: "viewmodel.Core",
			members: {}
		}
	};

	return {
		toString: toString
	};

	// Call initialize when this module is loaded.
	initialize();
});