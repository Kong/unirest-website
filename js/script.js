$(document).ready(function () {
	
	var hash = window.location.hash;

	if (hash) {
		doThings(hash);
	}

    window.onhashchange = function(){
		hash = window.location.hash;
		doThings(hash);
	}

	/* Logic */
	function doThings(hash) {
		console.log(hash);
		var lang = hash.substr(1);

		/* Github Buttons */
		$('#social').hide();
		$('header .github div').hide();
		$('header .github-'+lang).fadeIn();

		$('section.selected').removeClass('selected');
		$('section' + hash).addClass('selected');
		$('nav.main a').removeClass('selected');
		$('nav.main a[href="'+ hash + '"]').addClass('selected');
		$.scrollTo($('section' + hash), 500, { 
			onAfter: function () {		
				enableScroll = true;
				analytics.track('Selected Language', {
				    language        : hash,
				});
			},
			easing: 'easeOutQuad'
		});
	}

	/* Background */
	$.supersized({
		horizontal_center		:	1,
		min_width				:	$(window).width(),
		slides 					:  	[
			{image : 'http://farm6.staticflickr.com/5252/5453113651_703fc669bc_o.jpg', thumb: ''}
		]
	});

});