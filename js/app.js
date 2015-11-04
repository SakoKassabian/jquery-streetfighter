$(document).ready(function() {
	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('ryu-shoryuken').hide();
  })
	.mouseleave(function() {
   		$('.ryu-ready').hide();
		$('.ryu-still').show();
  })
	.mousedown(function() {
    playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show().animate(
  {'left': '1110px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '610px');
  }
);
  })
  .mouseup(function() {
     $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });
 
 $(document).keydown(function (e){
  	if (e.which == 88) {
  		$('.ryu-still').hide();
  		$('.ryu-cool').show();
  	}
  })
 	.keyup(function(e){
 		if(e.which == 88){
 			$('.ryu-still').show();
  			$('.ryu-cool').hide();
 		}
 	})
 	.keypress(function(e){
 		if (e.which == 83 && e.shiftKey){
 			$('.ryu-still').hide();
 			playShoryuken();
 			$('.ryu-shoryuken').show();
 		}
 	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playShoryuken () {
  $('#shoryuken-sound')[0].volume = 0.5;
  $('#shoryuken-sound')[0].load();
  $('#shoryuken-sound')[0].play();
}