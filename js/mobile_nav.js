jQuery(document).ready(function($) {	
	
	"use strict";

	var mainMenu = $("header #main-navigation > .list-menu");
    var sidebarMenu = $("header #main-navigation > .list-menu > li.current-menu-item > .list-menu");
    var mainMenus = mainMenu.add(sidebarMenu);
	var topLevelLinks = mainMenu.children("li");

	// Add menu-toggle elements to menu
	setupMenu();

	// Set menu to window height on mobile for smooth expand on toggle
	setMenuHeight();
	$(window).resize(setMenuHeight);

	// Top-level link click functionality for desktop
	topLevelLinks.click(function(e) {
		// only toggle if on desktop and clicking on parent element
		if ($(".menu-toggle").is(":visible") || (e.target.parentNode !== this)) {
		  return;
		}

		e.preventDefault();
		toggleMenu(this);
	});

	// Menu toggle functionality
	$(".menu-toggle").click(function() {
		$("body").toggleClass("menu-open");
		mainMenu.slideToggle();
	});

	// Menu-item toggle functionality
	$(".menu-item-toggle").click(function() {
		$(this).toggleClass("glyphicon-menu-down").toggleClass("glyphicon-menu-up").siblings("ul").slideToggle();
	});

	// "Modal" functionality (darkened bg, clicking to close menu)
	$(".modal-bg").click(function() {
		toggleMenu(".item-open");
	});

	function setupMenu() {
		// Setup top-level links
		topLevelLinks.one(function() {
			var childLink = $(this).children("a").clone();
			$(this).children(".list-menu").prepend("<li class='parent-link'>");
			$(this).find(".parent-link").append(childLink);
		});

		// Add menu toggle to main menu in header
		$("header #main-navigation .container-fluid").prepend("<span class='menu-toggle' />");

		// Add menu item toggles to main menus in header and sidebar
		mainMenus.find("li").one(function(){
			// Active menu items start expanded, with up-arrow icon
			// But only if they're in the sidebar or the user is on mobile
			var isSidebar = $(this).parents(".sidebar").length > 0;
			var isMobile = $(".menu-toggle").is(":visible");

			if ((isSidebar || isMobile) && $(this).hasClass("active-trail")) {
				var iconClass = "glyphicon-menu-up";
				$(this).children(".menu").show();
			} else {
				// Everything else starts closed, with down-arrow icon
				var iconClass = "glyphicon-menu-down";
			}

			// Add icon only to "expanded" menu items
			if ($(this).hasClass("expanded")) {
				$(this).prepend("<span class='menu-item-toggle glyphicon " + iconClass + "'>");
			}
		});
	}

	function toggleMenu(item) {
		if ($(item).hasClass("item-open")) { // close menu if already open
		  $(item).removeClass("item-open");
		  $(".modal-bg").removeClass("modal-open");
		} else { // open menu
		  $(item).siblings(".item-open").removeClass("item-open");
		  $(item).addClass("item-open");
		  $(".modal-bg").addClass("modal-open");
		}
	}

	function setMenuHeight() {
		if ($(".menu-toggle").is(":visible")) {
		  $("body").height($(window).height());
		  mainMenu.height($(window).height() - 50);
		} else {
		  mainMenu.height("");
		  $("body").height("");
		}
	}
	
	
}); //end ready
