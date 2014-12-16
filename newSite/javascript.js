
window.addEventListener("load",init, false);
x = 0;

function init() {
var loginBt = document.getElementById("login");
loginBt.addEventListener("click", checkMail, false);
}



function messageDiv(){
	// alert("ramdamdam");
	var errorMessage = document.getElementById("errorMessage");
	$("#errorMessage").fadeIn(1000);

};

function messageDivAway(){
	// alert("ramdamdam");
	var list = document.getElementById("list")
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}

};

function checkMail( e ){
	// alert("eas");
	var username = document.getElementById("username");
	var pw = document.getElementById("password");
	var list = document.getElementById("list");
	var item = document.createElement("li");
	var items = [];

	// if(items.length > 0){
	// 	for(i = 0; i < items.length; i++){
	// 		list.removeChild(items[i]);
	// 	}
	// 	alert("helo");
	// 	messageDivAway();

	// }

	var container = document.getElementById("contentUL");
	container.appendChild(list);
	if(x > 0){
		messageDivAway();
	}
	x++;

	if(username.value == ""){
		var text1 = document.createTextNode("Please enter an E-Mail address.");
		var item1 = document.createElement("li");
		item1.appendChild(text1);
		items[items.length] = item1;
	}else if(username.value.indexOf('@') < 0 ){
		var text2 = document.createTextNode("Please enter a valid E-Mail Address.");
		var item2 = document.createElement("li");
		item2.appendChild(text2);	
		items[items.length] = item2;
	}else if(username.value.indexOf('@beuth-hochschule.de') < 0 ){
		var text3 = document.createTextNode("Your E-mail must be registered at @beuth-hochschule.de");
		var item3 = document.createElement("li");
		item3.appendChild(text3);
		items[items.length] = item3;
	}
	if(pw.value == ""){
		var text4 = document.createTextNode("Please enter a password.");
		var item4 = document.createElement("li");
		item4.appendChild(text4);
		items[items.length] = item4;
	}else if(username.value.indexOf('@beuth-hochschule.de') < 0 ){
		var text3 = document.createTextNode("Your E-mail must be registered at @beuth-hochschule.de");
		var item3 = document.createElement("li");
		item3.appendChild(text3);
		items[items.length] = item3;
	}
	else if((pw.value.indexOf('password') < 0 || username.value.indexOf('sophie@beuth-hochschule.de') < 0 )){
		var text6 = document.createTextNode("Password or E-Mail are wrong.");
		var item6 = document.createElement("li");
		item6.appendChild(text6);
		items[items.length] = item6;
	}else if(pw.value.indexOf('password') >= 0 && username.value.indexOf('sophie@beuth-hochschule.de') >= 0 ){
		window.location.href = '/Users/sophie/Dropbox/3 Uni/MultiEngI/Aufgabe 1/newSite/subsites/landingPage.html';
	}


	for(i = 0; i < items.length; i++){
		list.appendChild(items[i]);
	}



	messageDiv();


		// for(i = 0; i < items.length; i++){
		// 	list.removeChild(items[i]);
		// }

}








