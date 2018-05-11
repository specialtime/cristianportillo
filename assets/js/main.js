/*

	Prologue by HTML5 UP

	html5up.net | @ajlkn

	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

*/



(function($) {



	skel.breakpoints({

		wide: '(min-width: 961px) and (max-width: 1880px)',

		normal: '(min-width: 961px) and (max-width: 1620px)',

		narrow: '(min-width: 961px) and (max-width: 1320px)',

		narrower: '(max-width: 960px)',

		mobile: '(max-width: 736px)'

	});



	$(function() {



		var	$window = $(window),

			$body = $('body');



		// Disable animations/transitions until the page has loaded.

			$body.addClass('is-loading');



			$window.on('load', function() {

				$body.removeClass('is-loading');

			});



		// CSS polyfills (IE<9).

			if (skel.vars.IEVersion < 9)

				$(':last-child').addClass('last-child');



		// Fix: Placeholder polyfill.

			$('form').placeholder();



		// Prioritize "important" elements on mobile.

			skel.on('+mobile -mobile', function() {

				$.prioritize(

					'.important\\28 mobile\\29',

					skel.breakpoint('mobile').active

				);

			});



		// Scrolly links.

			$('.scrolly').scrolly();



		// Nav.

			var $nav_a = $('#nav a');



			// Scrolly-fy links.

				$nav_a

					.scrolly()

					.on('click', function(e) {



						var t = $(this),

							href = t.attr('href');



						if (href[0] != '#')

							return;



						e.preventDefault();



						// Clear active and lock scrollzer until scrolling has stopped

							$nav_a

								.removeClass('active')

								.addClass('scrollzer-locked');



						// Set this link to active

							t.addClass('active');



					});



			// Initialize scrollzer.

				var ids = [];



				$nav_a.each(function() {



					var href = $(this).attr('href');



					if (href[0] != '#')

						return;



					ids.push(href.substring(1));



				});



				$.scrollzer(ids, { pad: 200, lastHack: true });



		// Header (narrower + mobile).



			// Toggle.

				$(

					'<div id="headerToggle">' +

						'<a href="#header" class="toggle"></a>' +

					'</div>'

				)

					.appendTo($body);



			// Header.

				$('#header')

					.panel({

						delay: 500,

						hideOnClick: true,

						hideOnSwipe: true,

						resetScroll: true,

						resetForms: true,

						side: 'left',

						target: $body,

						visibleClass: 'header-visible'

					});



			// Fix: Remove transitions on WP<10 (poor/buggy performance).

				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)

					$('#headerToggle, #header, #main')

						.css('transition', 'none');



	});



})(jQuery);

// MODALES 

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $('#img01');
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
})	

var mylogin = document.getElementById('myLogin');
var login =document.getElementById('login');
login.onclick=function(){
    mylogin.style.display = "block";
}	

// Get the <span> element that closes the modal
var span =$('.close');

// When the user clicks on <span> (x), close the modal
span.click(function(){
	modal.style.display = "none";
})

span.click(function(){
	mylogin.style.display = "none";
})

