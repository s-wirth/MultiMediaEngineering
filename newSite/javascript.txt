window.addEventListener("load",init, false);

function init() {
var loginBt = document.getElementById("login");
loginBt.addEventListener("click", checkMail, false);
}


(function($){
	title = function messageDiv(){
		alert("mmmm");
		var errorMessage = document.getElementById("errorMessage");
		$("#errorMessage").fadeIn('slow');
	};
})(jQuery);

function checkMail( e ){
	var username = document.getElementById("username");
	var pw = document.getElementById("password");
	messageDiv();
	if(username.value == "enter your username" || username.value == ""){
		alert("Username and Password can not be empty.");
	}else if(username.value.indexOf('@') < 0 ){
		alert("No valid email adress.");	
	}else if(username.value.indexOf('@beuth-hochschule.de') < 0 ){
		alert("Email must be registered at @beuth-hochschule.de");
	}else if(pw.value == ""){
		alert("You do need a password as well.");
	}else if(pw.value.indexOf('password') < 0 ){
		alert("...and it has to be the correct password.");
	}else if(pw.value.indexOf('password') >= 0 ){
		window.location.href = '/Users/sophie/Dropbox/3 Uni/MultiEngI/Aufgabe 1/newSite/subsites/landingPage.html';
	}

}