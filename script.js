$(document).ready(function(){
  $('.results').css('display','none');
})

$(document).on('click', '#gobutton', function(){
  $('.results').slideToggle();
})
