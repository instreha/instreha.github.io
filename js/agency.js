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

function scrollTo(element, timeOffset) {
  var period = 5000;
  setTimeout(function() {
    $('html, body').animate({ scrollTop: (element.offset().top) }, period);
  }, timeOffset);
  return timeOffset + period;
}

function showModal(element, timeOffset) {
  var modalShowtime = 7000;
  setTimeout(function() { element.modal('show'); }, timeOffset);
  setTimeout(function() { element.modal('hide'); }, timeOffset + modalShowtime);
  return timeOffset + modalShowtime;
}

function waitAround(timeOffset) {
  var duration = 5000;
  return timeOffset + duration;
}

function scrollThroughPage() {

  var currentTime = 0;

  currentTime = scrollTo($('body'), currentTime);
  currentTime = waitAround(currentTime);

  currentTime = scrollTo($('#praxis'), currentTime);

  //currentTime = scrollTo($('a[href="#roomsModal"]'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#roomsModal'), currentTime);

  //currentTime = scrollTo($('a[href="#teamModal"]'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#teamModal'), currentTime);

  //currentTime = scrollTo($('a[href="#leadershipModal"]'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#leadershipModal'), currentTime);
  currentTime = showModal($('#lindnerpModal'), currentTime);
  currentTime = showModal($('#faustmuellercModal'), currentTime);

  //currentTime = scrollTo($('a[href="#qualityModal"]'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#qualityModal'), currentTime);

  currentTime = scrollTo($('#leistungen'), currentTime);

  //currentTime = scrollTo($('#basic-therapy'), currentTime);
  currentTime = waitAround(currentTime);

  //currentTime = scrollTo($('#special-therapy'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal1'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal2'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal3'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal4'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal5'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal6'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal8'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal9'), currentTime);
  currentTime = waitAround(currentTime);
  currentTime = showModal($('#specialTherapyModal10'), currentTime);

  //currentTime = scrollTo($('#additional-therapy'), currentTime);
  currentTime = waitAround(currentTime);

  currentTime = scrollTo($('#kontakt'), currentTime);
  currentTime = waitAround(currentTime);

  currentTime = scrollTo($('#checkliste'), currentTime);
  currentTime = waitAround(currentTime);

  currentTime = scrollTo($('.partners'), currentTime);
  currentTime = waitAround(currentTime);

  return currentTime;
}

function activatePresentationMode() {
  setInterval(function() { scrollThroughPage(); }, scrollThroughPage());
}

$('a.activate-presentationmode').click(activatePresentationMode);
