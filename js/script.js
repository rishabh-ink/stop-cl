/* Author: See /humans.txt

*/

"use strict";

require.config({
	paths: {
		// libraries
		'use': "libs/requirejs/addons/use", // documentup.com/tbranyen/use.js
		'jquery': "libs/jquery-1.7.2", // jquery.com
		'bootstrap': "libs/bootstrap/bootstrap", // twitter.github.com/bootstrap
		'debug': "libs/ba.debug", // benalman.com/code/projects/javascript-debug
		'domready': "libs/requirejs/addons/domReady", // requirejs.org/docs/download.html#domReady
		'knockoutjs': "libs/knockout-2.1.0.debug", // knockoutjs.com
		// /libraries

		// application core
		'Core': "modules/Core",
		// /application core

		// models

		// /models

		// view-models

		// /view-models

		// utilities
		'util.ajax.Communication': "modules/util/ajax/Communication",
		'util.error.ErrorHandler': "modules/util/error/ErrorHandler",
		'util.data.Constants': "modules/util/data/Constants"
		// /utilities
	}
});





