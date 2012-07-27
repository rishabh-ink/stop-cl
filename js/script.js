/* Author: See /humans.txt

*/

"use strict";

require.config({
	paths: {
		// libraries
		'com.rishabhsrao.apps.stopcl.lib.use': "libs/requirejs/addons/use", // documentup.com/tbranyen/use.js
		'com.rishabhsrao.apps.stopcl.lib.jquery': "libs/jquery-1.7.2", // jquery.com,
		'com.rishabhsrao.apps.stopcl.lib.jquery-mobile': "libs/jquery-mobile/jquery.mobile-1.1.1.js", // jquerymobile.com
		'com.rishabhsrao.apps.stopcl.lib.bootstrap': "libs/bootstrap/bootstrap", // twitter.github.com/bootstrap
		'com.rishabhsrao.apps.stopcl.lib.debug': "libs/ba.debug/ba.debug", // benalman.com/code/projects/javascript-debug
		'com.rishabhsrao.apps.stopcl.lib.domready': "libs/requirejs/addons/domReady", // requirejs.com/docs/download.html#domReady
		'com.rishabhsrao.apps.stopcl.lib.knockoutjs': "libs/knockoutjs/knockout-2.1.0.debug", // knockoutjs.com
		// /libraries

		// application core
		'com.rishabhsrao.apps.stopcl.Core': "modules/Core",
		// /application core

		// models
		'com.rishabhsrao.apps.stopcl.model.Service': "model/Service",
		'com.rishabhsrao.apps.stopcl.model.Stat': "model/Stat"
		// /models

		// viewmodel
		'com.rishabhsrao.apps.stopcl.viewmodel.Home': "viewmodel/Home",
		''
		// /viewmodel

		// utilities
		'com.rishabhsrao.apps.stopcl.util.ajax.Communication': "modules/util/ajax/Communication",
		'com.rishabhsrao.apps.stopcl.util.error.ErrorHandler': "modules/util/error/ErrorHandler",
		'com.rishabhsrao.apps.stopcl.util.data.Constants': "modules/util/data/Constants"
		// /utilities
	}
});

require(["com.rishabhsrao.apps.stopcl.lib.domready", "com.rishabhsrao.apps.stopcl.Core"], function(domReady, core) {
	domReady(function() {
		debug.info("Starting application... Please stand by...");
		core.initialize();
	});
});





