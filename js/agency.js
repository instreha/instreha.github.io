/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  this.focus();
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Show Goole Maps only after click
function activateGoogleMaps() {
  $('div#googlemaps_placeholder').replaceWith(" <iframe id='map-canvas' frameborder='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBBsugMK1AyAZMwSS6H5FGyI7W1YyEVPVw &q=Institut+fuer+Rehabilitation' allowfullscreen> ");
}

$('button.activate-googlemaps').click(activateGoogleMaps);

// Automatically scroll through page continously
function scrollUpAndDown(period) {
  $("html, body").animate({ scrollTop: 0 }, period);

  setTimeout(function() {
    $('html, body').animate({scrollTop: $(document).height()}, period);
  }, period);
}

function activatePresentationMode() {
  var period = 30000;
  scrollUpAndDown(period);
  setInterval(function() { scrollUpAndDown(period) }, 2*period);
}

$('a.activate-presentationmode').click(activatePresentationMode);
