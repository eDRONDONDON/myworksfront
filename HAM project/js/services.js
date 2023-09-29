(function($) {
	$(function() {

		$('ul.midle-tabs').on('click', 'li:not(.active)', function() {

			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tab-content').find('div.tab-pane').removeClass('active').eq($(this).index()).addClass('active');
		});

	});
})(jQuery);