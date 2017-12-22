

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -22,
				mode: 'fade',
				noOpenerFade: true,
				speed: 300,
				detach: false
			});

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

/*$(

	'<div id="search-wrap" class="wrap-top search-wrap">'+
	'<div class="width">'+
	 '<ul class="clearfix">'+
	 '<li ><i class="fa fa-search"></i> <input type="search" placeholder="Search...">'+


	 '<li id="li-3">Search</li>'+
     '<li id="li-4"> <i class="fa fa-times"></i> </li>'+


	 '</li>'+


	 '</ul>'+


	'</div>'+

	'</div>'


 <div id="search-wrap" class="wrap-top search-wrap">
                             <div class="width">
                                 <ul class="clearfix">
                                       <li ><i class="fa fa-search"></i> <input type='search'                    placeholder="Search..."></li>
                                       <li id="li-3">Search</li>
                                       <li id="li-4"> <i class="fa fa-times"></i> </li>
                                   </ul>
                               </div>
                             </div> 
)
.appendTo($body);
*/

		// Off-Canvas Navigation.

			// Title Bar.
 
 
 

	$(

		 /*search*/

 

	'<div id="titleBar">' +
		

	'<div id="search-wrap" class="wrap-top search-wrap">'+
	'<div class="width">'+
	 '<ul class="clearfix">'+
	 '<li ><i class="fa fa-search"></i> <input type="search" placeholder="Search...">'+


	 '<li id="li-3">Search</li>'+
     '<li id="li-4"> <i class="fa fa-times"></i> </li>'+


	 '</li>'+


	 '</ul>'+


	'</div>'+

	'</div>'+
'<a href="#navPanel" class="toggle"></a>' +
	 /*gad*/						
	 '<a id="search-btn" class="s-desk"> <i class="fa fa-search"></i> </a>'+
	'<a href="#" class="fafa"></a>' +


	'<span class="title">' + $('#logo').html() + '</span>' +

	/*select*/
	/*	'<select id="mounth">' + 
                         
						  

	 '</select>' +*/


					 
	'</div>'
	)


	.appendTo($body);

					/*select js*/

/*					$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

*/

 


			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)


					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});


/*higher nav*/
					$(

					'<div id="appearmenu">' +					  
						 
						 
					'</div>'
				)
					.appendTo($body);
 

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});





 /*menu show minimal*/
 if($("#titleBar").height()> $(document).scrollTop()){

$("#appearmenu").css({"display": "none"});
}

$(document).scroll(function(){

if($("#titleBar").height()< $(document).scrollTop()){
$('#appearmenu').fadeIn(270);

 
} else{
$('#appearmenu').fadeOut(50);
}

});




/*select*/


 

})(jQuery);

