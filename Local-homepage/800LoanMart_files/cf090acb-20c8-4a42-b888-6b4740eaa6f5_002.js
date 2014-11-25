			
// Copyright 2006-2014 ClickTale Ltd., US Patent Pending
// PID: 24110
// Generated on: 11/18/2014 1:34:01 PM (UTC 11/18/2014 7:34:01 PM)

;(function(){

	// Safe gaurd from errors
	try {

		// Utils: Using 'Facade' Pattern to provide a persistent interface for DOM.Ready, Selectors, etc..
		var Utils = {};
		
		// Fn: Checks if the browser is supported. 'true' for native or jQuery support. 'false' otherwise
		Utils.BrowserSupported = function (){
			
			// For modern browsers
			if (
					document.readyState			&&
					document.addEventListener	&&
					document.querySelectorAll	
				)	return true;

			
			// Fallback on jQuery
			else if (jQuery) return true;
			
			
			// Browser not supported
			else return false;
		}
		
		/* Early finish if the browser isn't supported */
		if ( !Utils.BrowserSupported() ) return;
		
		// Fn: Attaches 'Handler' to run on DOM.Ready. If DOM.Ready already happend, just runs Handler
		Utils.DOMReady = function ( Handler ){
			
			// Modern browsers
			document.addEventListener			&&
			document.readyState == 'loading'	&&
			document.addEventListener('DOMContentLoaded', Handler, false);
			
			// Modern browsers - after DOM.Ready
			document.addEventListener			&&
			!document.readyState != 'loading'	&&
			Handler();
			
			
			// Fallback on jQuery
			!document.addEventListener	&&
			jQuery						&&
			jQuery( Handler );
		}
		
		// Fn: Adds 'Handler' for 'Event' on 'Element'
		Utils.AddEventHandler = function ( Event, Element, Handler ){
			
			// Modern browsers
			Element.addEventListener &&
			Element.addEventListener( Event, Handler, false );
			
			// Fallback on jQuery
			!Element.addEventListener	&&
			jQuery						&&
			jQuery(Element)[Event](Handler);
		}
		
		// Fn: Runs 'Handler' only when ClickTale is recording (times out after 5 seconds)
		Utils.WhenRecording = function ( Handler ){
			
			// Prepare a timeout counter
			var TimeoutCounter = 0;
			
			// Wait with setup until ClickTale is recording (or cancel after a 5 seconds timeout)
			var Interval = setInterval(function(){
			
				// Timeout after 5 seconds
				if (window.ClickTaleIsRecording && !ClickTaleIsRecording() && ++TimeoutCounter >= 50){
					
					// End the timer for the setup function
					clearInterval( Interval );
					
					// Early finish
					return;
				}
				
				// When ClickTale is recording
				if (window.ClickTaleIsRecording && ClickTaleIsRecording()){
				
					// End the timer
					clearInterval( Interval );
					
					// Run the passed in 'Handler' function
					Handler();
				}
			}, 100);
		}
		

		
		
		
		
		// Fn: Once recording, run the following Setup function
		var Setup = function (){
		
jQuery("#QualifySubmit" ).click( function(){
 if (typeof ClickTaleRegisterFormSubmit == 'function' ){
var THEFORM = jQuery('#aspnetForm' ).get( 0);
ClickTaleRegisterFormSubmit ( THEFORM );
}
});


jQuery("#btnSubmit" ).click( function(){
 if (typeof ClickTaleRegisterFormSubmit == 'function' ){
var THEFORM = jQuery('#aspnetForm' ).get( 0);
ClickTaleRegisterFormSubmit ( THEFORM );
}
});


jQuery("a#ctl00_ContentPlaceHolder1_btnNext1>span" ).click( function(){
 if (typeof ClickTaleRegisterFormSubmit == 'function' ){
var THEFORM = jQuery('#aspnetForm' ).get( 0);
ClickTaleRegisterFormSubmit ( THEFORM );
}
});

jQuery("a#ctl00_ContentPlaceHolder1_btnNext2>span" ).click( function(){
 if (typeof ClickTaleRegisterFormSubmit == 'function' ){
var THEFORM = jQuery('#aspnetForm' ).get( 0);
ClickTaleRegisterFormSubmit ( THEFORM );
}
});

jQuery("a#ctl00_ContentPlaceHolder1_btnSubmit>span" ).click( function(){
 if (typeof ClickTaleRegisterFormSubmit == 'function' ){
var THEFORM = jQuery('#aspnetForm' ).get( 0);
ClickTaleRegisterFormSubmit ( THEFORM );
}
});
				
}


		
		// On DOM.Ready
		Utils.DOMReady(function(){
			
			// Make sure ClickTale is recording, and run 'Setup'
			Utils.WhenRecording( Setup );
		});
		
	} catch(e){};
})();

