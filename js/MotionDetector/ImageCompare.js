/**
 *
 * Motion-Detector-HTML5
 * GAO
 *
 */
;(function(App) {

	"use strict";

	// Compares to images and shows the difference starting from the top left to the bottom right.

	App.ImageCompare = function() {
		var sensitivity, temp1Canvas, temp1Context, temp2Canvas, temp2Context, topLeft, bottomRight;

		function initialize() {
			sensitivity = 40;

			if(!temp1Canvas) {
				temp1Canvas = document.createElement('canvas');
				temp1Context = temp1Canvas.getContext("2d");
			}

			if(!temp2Canvas) {
				temp2Canvas = document.createElement('canvas');
				temp2Context = temp2Canvas.getContext("2d");
			}

			topLeft = [Infinity,Infinity];
			bottomRight = [0,0];
		}



		// Initialize on creation.
		initialize();

		// Return public interface.
		return {
			compare: compare
		}
	};
})(MotionDetector);
