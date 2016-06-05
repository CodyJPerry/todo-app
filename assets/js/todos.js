// Check off todos by clicking
$('ul').on('click', "li", function() {
	$(this).toggleClass('completed');
});

//Delete todo 
$('ul').on('click', "span", function(e) {
	//remove spans parent the 'list item'
	$(this).parent().fadeOut(500, function() {
		//remove from DOM once fadeOut is done
		$(this).remove();
	});
	//stop event from bubbling onto less specific events
	event.stopPropagation();
});


//Create todo
$('input[type="text"]').keypress(function(e) {
	//if user presses enter key
	if(event.which === 13) {
		//store their input
		var userResult = $(this).val();
		//Clear input
		$(this).val("");
		//create a new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + userResult + '</li>');
	}
});


//Toggle on or off input field when icon is clicked
$('.fa-plus').on('click', function() {
	$('input[type="text"]').fadeToggle();
});