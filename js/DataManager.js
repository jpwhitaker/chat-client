(function(){
  var dataManager = window.dataManager = {
    chatRooms: {},
    sendMessage: function(message){
      $.ajax("https://api.parse.com/1/classes/"+chatRoom, {
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
  }	

  var fetchData = function(room){
		$.ajax("https://api.parse.com/1/classes/" + room + "?order=-createdAt", {
			beforeSend: headerSetter,
			type: "GET",
			contentType: "application/json",
			success: function(data){
				dataManager.chatRooms[room] = data;
				// dataManager.chatRooms.trigger('fetched');
			},
			error: function() {}
		});
	};

	setInterval(function(){
		fetchData(chatRoom);
  }, 1000);

}());
