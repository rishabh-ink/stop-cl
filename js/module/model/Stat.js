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
		debug.info(toString(), "Initializing");
	};

	/**
	 * The latitude and longitude coordinate pair of the sighting.
	 */
	var where = {
		lat: null,
		lon: null
	};

	/**
	 * The timestamp of the sighting.
	 */
	var when = null;

	/**
	 * The number of children sighted.
	 */
	var count = {
		boy: null,
		girl: null
	};

	/**
	 * Returns a string representation of the <code>Stat</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "model.Stat",
			members: {
				initalize: initialize,
				toString: toString
			}
		}
	};

	var serialize = function() {
		debug.log(toString(), "Serializing...");
		return {
			where: where,
			when: when,
			count: count
		};
	}

	// Call <code>initialize</code> when this module is loaded by requirejs.
	initialize();

	return {
		toString: toString
	};
});