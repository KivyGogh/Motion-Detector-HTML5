/**
 *
 * Motion-Detector-HTML5
 * GAO
 *
 */

;(function(App) {

	"use strict";


	App.WebCamCapture = function(videoElement) {

		var webCamWindow = false;
		var width = 640;
		var height = 480;

		function initialize(videoElement) {
			if(typeof videoElement != 'object') {
				webCamWindow = document.getElementById(videoElement);
			} else {
				webCamWindow = videoElement;
			}

			if(hasSupport()) {
				if(webCamWindow) {
					webCamWindow.style.width = width + 'px';
					webCamWindow.style.height = height + 'px';
					startStream();
				}

			} else {
				alert('No support found');
			}
		}

		//Starts the streaming from the webcamera to the video element.
		function startStream() {
			(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia).call(
				navigator,
				{video: true},
				function(localMediaStream) {
					if(webCamWindow) {
						var vendorURL = window.URL || window.webkitURL;

						if (navigator.mozGetUserMedia) {
							webCamWindow.mozSrcObject = localMediaStream;
							webCamWindow.play();
						} else {
							webCamWindow.src = vendorURL.createObjectURL(localMediaStream);
						}
					}
				},
				console.error
			);
		}

		

	}

})(MotionDetector);