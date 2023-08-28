$('.introButton').on('click',function(){
    $('.dimmer').removeClass('active');
    $('.blurring.dimmable>:not(.dimmer)').css('filter','none');
    
});


$(document).ready(function() {
/////////////////////////////
///////// Page functions ////
/////////////////////////////


$('.homeIcon').on('click',function(){
    $('.dimmer').addClass('active');
})

$('.infoIcon').on('click',function(){
    $('#infoMessage').transition('fade in');
})

$('.dataIcon').on('click',function(){
    $('#dataMessage').transition('fade in');
})
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });


})