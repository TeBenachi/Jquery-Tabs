$(function() {

	$('.tabs li').on('click', function(){

		$('.tabs li.active').removeClass('active');
		$(this).addClass('active');

		//Show active panel
		var visiblePanel = $(this).attr('data-tab');

		//Hide inactive panel
		$('.panel.active').fadeOut(300, HidePanel);

			function HidePanel() {
				$(this).removeClass('active');
	

			$('#'+visiblePanel).fadeIn(300, ShowPanel);

				function ShowPanel() {
						$(this).addClass('active');
			};		
		
		};

	});

});