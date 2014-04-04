$(document).ready(function() {
	$('#slider').rhinoslider({
		controlsPlayPause: false,
		effect: 'explode',
		showTime: 5000,
		autoPlay: true
	});
//マウスオーバー
	 $('cap img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
		  }, function(){
			 if (!$(this).hasClass('currentPage')) {
			 $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
   });
//マウスオーバー
});
