$.ajax("https://api.parse.com/1/classes/mytest123", {
	beforeSend: headerSetter,    
	type: "get",
	contentType: "application/json",
	success: function(data){
		console.log(data.results[0].text);
		$('#main').append(data.results[0].text);
	},
	error: function() {alert("failed!")}
});