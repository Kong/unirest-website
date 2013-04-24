$(document).ready(function () {
	
	/* Scroll to section */
	hash = window.location.hash;
	$('section.selected').removeClass('selected');
	if (hash) $('section' + hash).addClass('selected');
	$.scrollTo($('section' + hash), 1000, { 
		onAfter: function () {		
			window.location.hash = hash;
			enableScroll = true;
		},
		easing: 'easeOutQuad'
	});


	/* Background */
	$.supersized({
	
		// Functionality
		slide_interval          :   4000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	2000,		// Speed of transition

		horizontal_center		:	1,
		min_width				:	$(window).width(),
												   
		// Slideshow Images							
		slides 					:  	[
			{image : 'http://farm6.staticflickr.com/5252/5453113651_703fc669bc_o.jpg', thumb: ''}
		]
		
	});

	/* Navigation */
	$('nav.main a').click(function () {
		
		/* Select menu item */
		$('nav.main a').removeClass('selected');
		$(this).addClass('selected');
		
		/* Scroll to section */
		hash = $(this).attr('href');
		$('section.selected').removeClass('selected');
		$('section' + hash).addClass('selected');
		$.scrollTo($('section' + hash), 1000, { 
			onAfter: function () {		
				window.location.hash = hash;
				enableScroll = true;
			},
			easing: 'easeOutQuad'
		});
		return false;
	});

	$('.back').click(function () {

		/* Select menu item */
		$('nav.main a').removeClass('selected');
		$(this).addClass('selected');

		/* Scroll to section */
		hash = $(this).attr('href');
		$.scrollTo($('section' + hash), 1000, { 
			onAfter: function () {		
				window.location.hash = hash;
				enableScroll = true;
				$('section.selected').removeClass('selected');
				$('section' + hash).addClass('selected');
			},
			easing: 'easeOutQuad'
		});
	});


	/* Prevent default (don't refresh) */
	$('nav.main a, .back, article a.top,').click(function (e) {
		e.preventDefault();
	});

});