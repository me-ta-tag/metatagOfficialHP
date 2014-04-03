//スライドショー
			$(document).ready(function() {
				$('#slider').rhinoslider({
					controlsPlayPause: false,
					effect: 'explode',
					showTime: 5000,
					autoPlay: true
				});
				
			});
/* var timer = false;
$(window).resize(function() {
    if(timer) {
        return;
    } else {
        timer = true;
        setTimeout(function() {
            if($('#rhinoslider').data('rhinoslider')) {
                $('#rhinoslider').data('rhinoslider').uninit();
            }
            $('#rhinoslider').rhinoslider({
                effect: 'slide'
            });
            timer = false;
        }, 200);
    }
}); */

//スライドショー