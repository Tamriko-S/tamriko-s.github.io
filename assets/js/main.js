$(document).ready(function() {

	let images = $('img');
	let grid = $('main.gallery');

	grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 5,
		percentPosition: true
	});

	images.lazyload({
		effect: "fadeIn",
		load: function () {
			grid.masonry('layout')
		}
	});
	
	$(".vis-item").each(function(e) {

		var th = $(this);

		th.attr("href", "#vis-img-" + e)
			.find(".vis-popup")
				.attr("id", "vis-img-" + e);

	});

	$(".vis-item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});

});