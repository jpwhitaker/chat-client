
var message = {};


$(document).ready(function(){
  $('form').keypress(function(e){
    if (e.which == 13) {
      e.preventDefault();
      message["username"] = $("#username").val();
      message["text"] = $("#text").val();
      sendMessage(JSON.stringify(message));
    }
  })
})


var sendMessage = function(message){
  $.ajax("https://api.parse.com/1/classes/messages", {
  	beforeSend: headerSetter,    
  	type: "POST",
  	contentType: "application/json",
  	data: message,
  	success: function(){
      $('#text').val('');  
  	},
  	error: function() {}
  });
}


