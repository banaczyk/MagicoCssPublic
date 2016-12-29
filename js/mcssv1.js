// JavaScript Document
// Menu responsywne
  $(document).ready(function() {

  	function addAttr() {
  		if ($(window).width() > 799) {
  			$('nav .main_menu')
  				.attr('hide', 'false');
  		} else if ($(window).width() < 799) {
  			$('nav .main_menu')
  				.attr('hide', 'true');
  		}
  	} 	
  	addAttr();

  	    $(window).resize(function(){
    		if ($(window).width() > 799) {
      			$('nav .main_menu')
      				.css('display', "")
      				.css('height', "")
     				.attr('hide', 'false');
   			} else {
      			$('nav .main_menu')
      				.attr('hide', 'true');
    		}
 		});

 		  $('#mobile_menu').click(function() {
 		  	if($('.main_menu').attr('hide') === 'true') {
				$('.main_menu')
					.stop()
					.slideDown('slow')
					.attr('hide', 'false');
 		  	} else {
 		  		$('.main_menu')
					.stop()
					.slideUp('slow')
					.attr('hide', 'true');
 		  	}
	});
  });

// END MENU

  jQuery('a.gallery').colorbox({ opacity:0.8 , rel:'group1' });
		

	jQuery(document).ready(function(){

			jQuery("#gallery").unitegallery({
				tiles_type:"justified"
			});

		});

		