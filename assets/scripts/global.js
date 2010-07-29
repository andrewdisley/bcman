/*
	Site:		BarCampManchester2 | bcman2.nwdc.org.uk
	File:		/assets/scripts/global.js
	Author:		Andrew Disley, Simplified http://simplified.co.uk/
	Version:	2009-10-16
----------------------------------------------- */

/*	Global Configuration
----------------------------------------------- */
var $j = jQuery;
var isIE6 = false;
var isSafari = false;

/*	Global Literal Object: Site-wide functions
----------------------------------------------- */
var Global = {

	/* Utility: Browser Tests / Specific Fixes/Hooks */
	utilBrowserTests : function() {

		/* Detect if User Agent is IE6 using object detection, apply fix for background flicker bug */
		if (typeof document.body.style.maxHeight == 'undefined') { isIE6 = true; try { document.execCommand('BackgroundImageCache', false, true); } catch(e) { } }

		/* Detect if User Agent is Safari, add class '.safari' to div#Container */
		if ($j.browser.safari) { isSafari = true; $j('div#Container').addClass('safari'); }

	},

	init : function() {

		var cc = this;

		cc.utilBrowserTests();

	}

};

/*	DOM Ready events
----------------------------------------------- */
$j(function() {

	Global.init();

});
