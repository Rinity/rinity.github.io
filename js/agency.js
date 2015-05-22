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
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$("header").
  stop().
  delay(1000).
  animate({opacity: 0}, 1000, function (){
    $(this).css({'background-image': "url('/img/1.jpg')"}).
      animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
        $(this).css({'background-image': "url('/img/2_compressed.jpg')"}).animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
          $(this).css({'background-image': "url('/img/3_compressed.jpg')"}).animate({opacity: 1}, {duration: 2000}).animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
            $(this).css({'background-image': "url('/img/4_compressed.jpg')"}).animate({opacity: 1}, {duration: 2000}).animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
              $(this).css({'background-image': "url('/img/5.jpg')"}).animate({opacity: 1}, {duration: 2000}).animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
                $(this).css({'background-image': "url('/img/6.jpg')"}).animate({opacity: 1}, {duration: 2000}).animate({opacity: 1}, {duration: 2000}).delay(5000).animate({opacity: 0}, 1000, function (){
                  $(this).css({'background-image': "url('/img/7.jpg')"}).animate({opacity: 1}, {duration: 2000})}
                );
              });
            });
          });
        });
      });
  });

function checkContactForm(){
  console.log('checkContactForm()');
  console.log($("#name").val().length > 0);
  console.log($("#email").val().length > 0);
  if( $("#name").val().length > 0 && $("#email").val().length >0 )
    $('#contactForm').submit();
  else{
    alert("Minimum a neved és email címed töltsd ki!");
  }
}
function checkPilotForm(){
  console.log('checkPilotForm()');
  console.log($("#_replyto").val().length > 0);
  if( $("#_replyto").val().length > 0  )
    $('#pilotForm').submit();
  else{
    alert("Kérlek add meg az email címed! Köszi!");
  }
}
function checkSurveyForm(){
  console.log('checkSurveyForm()');
  var notEmpty = false;
  var inputs = $('#surveyForm input[type="text"]');
  for(var x=0; x < inputs.length; x++){
    notEmpty = notEmpty || inputs[x].value != "";
  }
  if(notEmpty){
    _gs('event', 'Clicked sendsurvey');
    $('#surveyForm').submit();
  } else{
    alert("Kérlek legalább egy mezőt tölts ki!");
  }
}