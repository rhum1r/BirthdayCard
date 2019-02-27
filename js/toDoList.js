$(function() {
			
	var mess = ["You're a great friend to me!", 
				"And it's your Day!",
				"Wishing you the best!",
				];

	$('#mess_section').on('click', 'p:last', function(e) {	
		if($('p').length <= mess.length){
			$('#clickMe').remove();
			var p = $("<p>" + mess[$('p').length - 1] + "</p>");
			p.attr('id', 'mess' + $('p').length).css('display','none').addClass('mess');
			
		    $('#mess_section').append(p);
		    p.fadeIn(1000);
		}
		
		else if($('p').length == mess.length + 1 ){
	    	var horn = new Audio('horn.mp3');
		    horn.play();
		    $('body').addClass('surprise');
		    $('p').text('HAPPY BIRTHDAY !!!!')
		    
	    }
	});
});
