$('#newsletter-modal-toggle').click(function(event){
  event.preventDefault();
  $('#newsletter-modal').toggleClass('is-active');
});

$('.modal-close').click(function(event) {
  event.preventDefault();
  $('#newsletter-modal').toggleClass('is-active');
});
