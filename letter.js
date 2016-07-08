//Control whether or not a letter appears as a "_" or as itself on-screen

function(str){
		var regEx = new RegExp("[a-zA-Z]")
		return regEx.test(str)
	}