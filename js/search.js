jQuery(document).ready(function($) {
	
	'use strict';
	
	// Window Size Tracking
	function resizeChecks() {
		
		if ( window.matchMedia('(min-width: 991px)').matches ) {
			$('header .block-cu-search').removeClass('width-transition');
		}
	}
	
	$('#cornell-search-link').on('focus', function() {
		$("header").toggleClass("search-open");
	});
	
	$('#cornell-search-link').on('blur', function() {
		$("header").toggleClass("search-open");
	});
	
	$("header .block-cu-search input[type=text]").attr("placeholder", "Search this site");

	$(".search-icon").bind("click", function(){
		$("header").toggleClass("search-open");
		$('header .block-cu-search').addClass('width-transition');
		$("#search-input").focus();
	});
	
	$(".search-close").click(function() {
		$("header").removeClass("search-open");
		$('header .block-cu-search').addClass('width-transition');
	});

	$("header .block-cu-search input").bind("focus", function(){
		$("header").addClass("search-open");
	});
	
	$("header .block-cu-search input").bind("blur", function(){
		$("header").toggleClass("search-open");
	});
	
	$(window).resize(resizeChecks);
	resizeChecks();

});