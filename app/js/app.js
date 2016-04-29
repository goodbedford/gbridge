(function() {
	"use strict";

	var menuBtnToggle = $('#btn-menu-toggle');


	menuBtnToggle.on('click', toggleMenu );


	function toggleMenu(item) {
		console.log("event", event);
		var dropdown = $('#dropdown-menu');

		dropdown.toggleClass('u-hidden');
	}



})();