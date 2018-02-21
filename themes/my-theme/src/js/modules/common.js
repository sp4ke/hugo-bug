$(document).ready( function() {
	replyComment();

	$('.alert-message .close').on('click', function() {
		$('.alert-message').slideUp();
	});

	function replyComment() {
		$('.comment__item').each(function(index, el) {
			if ($(this).hasClass('reply--comment')) {
				$(this).closest('comment__item').addClass('border-active');
			};
		});
	};

});
