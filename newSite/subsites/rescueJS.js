window.addEventListener("load",init, false);

function init() {
	var mail = document.getElementById("mail");
	var submit = document.getElementById("submit");
	mail.addEventListener("click", mailFocus, false);
	submit.addEventListener("click", submitMail, false);

}


function mailFocus( e ) {
 	var element = e.target || window.event.srcElement;
 	if (element.value == "E-Mail"){
 		element.value = "";
 		setTimeout(timeout, 3000); /*For the sake of demonstration the session already expires after 3 seconds.*/
 	}
}

function submitMail() {
	var mail = document.getElementById("mail");
	if(mail.value == "E-Mail" || mail.value == ""){
		alert("Please enter an E-Mail adress.");
	}else if(mail.value.indexOf('@') < 0 ){
		alert("No valid E-Mail adress.");	
	}else if(mail.value.indexOf('@beuth-hochschule.de') < 0 ){
		alert("E-Mail must be registered at @beuth-hochschule.de");
	}else {
		alert("An E-Mail has been sent to you.");
		window.location.href = '/Users/sophie/Dropbox/3 Uni/MultiEngI/Aufgabe 1/newSite/index.html';
	}
}

function timeout() { 
	alert("Your session has expired.")
	window.location.href = '/Users/sophie/Dropbox/3 Uni/MultiEngI/Aufgabe 1/newSite/index.html';
}