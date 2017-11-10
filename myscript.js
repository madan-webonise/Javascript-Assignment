var textKey = document.getElementById("textKey");
var textValue = document.getElementById("textValue");

var SetLocalStorage = document.getElementById("ButtonLS");
var SetSessionStorage = document.getElementById("ButtonSS");
var GetLocalStorage = document.getElementById("ButtonGetLS");
var GetSessionStorage = document.getElementById("ButtonGetSS");
var RemoveLocalStorage = document.getElementById("ButtonDeleteLS");
var RemoveSessionStorage = document.getElementById("ButtonDeleteSS");
var GetAllLocalStorage = document.getElementById("ButtonGetALlLS");
var GetAllSessionStorage = document.getElementById("ButtonGetAllSS");
var DeleteAllLS = document.getElementById("ButtonDeleteAllLS");
var DeleteAllSS = document.getElementById("ButtonDeleteAllSS");


SetLocalStorage.onclick = function(){
	set("ButtonLS");
}
SetSessionStorage.onclick = function(){
	set("ButtonSS");
}
GetLocalStorage.onclick = function(){
	get("ButtonGetLS");
}
GetSessionStorage.onclick = function(){
	get("ButtonGetSS");
}
GetAllLocalStorage.onclick = function(){
	get("ButtonGetALlLS");
}
GetAllSessionStorage.onclick = function(){
	get("ButtonGetAllSS");	
}
RemoveLocalStorage.onclick = function(){
	remove("ButtonDeleteLS");
}
RemoveSessionStorage.onclick =function(){
	remove("ButtonDeleteSS");
}
DeleteAllLS.onclick = function(){
	remove("ButtonDeleteAllLS");
}
DeleteAllSS.onclick = function(){
	remove("ButtonDeleteAllSS");
}

function setItemvalidation() {
	if(	textKey.value == "" || textValue.value == ""){
		alert("Please enter both the fields");
		return 0;
	}

}
function getItemalidation() {
	if(	textKey.value == ""){
		alert("Please enter Key Field");
		return 0;
	}
}

function set(setbutton){
	var validate = setItemvalidation();
	//console.log("valiadte"+validate);
	if( validate !=0){
		if(setbutton == "ButtonLS"){
			localStorage.setItem(textKey.value,textValue.value);
		}	
		else if(setbutton == "ButtonSS"){
			sessionStorage.setItem(textKey.value,textValue.value);
		}
	}

}

function get(getbutton){
	var validate = getItemalidation();
	if(validate != 0){
		if(getbutton == "ButtonGetLS"){
			alert(localStorage.getItem(textKey.value));
		}
		else if(getbutton == "ButtonGetSS"){
			alert(sessionStorage.getItem(textKey.value));
		}
		else if(getbutton == "ButtonGetALlLS"){
			for (var index = 0; index < localStorage.length; index++) {
				console.log(localStorage.key(index)+"\t\t\t\t"+localStorage.getItem(localStorage.key(index)));
			}
		}
		else if(getbutton == "ButtonGetAllSS") {
			for (var index = 0; index < sessionStorage.length; index++) {
				console.log(sessionStorage.key(index)+"\t\t\t\t"+sessionStorage.getItem(sessionStorage.key(index)));
			}
		}
	}
	
}

function remove(removebutton) {
	if(removebutton == "ButtonDeleteLS") {
		alert("Value Removed"+"\nKey : "+textKey.value+"\nValue : "+localStorage.getItem(textKey.value));
		localStorage.removeItem(textKey.value);
	}
	else if(removebutton == "ButtonDeleteSS") {
		alert("Value Removed"+"\nKey : "+textKey.value+"\nValue : "+sessionStorage.getItem(textKey.value));
		sessionStorage.removeItem(textKey.value);
	}
	else  if(removebutton == "ButtonDeleteAllLS"){
		localStorage.clear();
	}
	else  if(removebutton == "ButtonDeleteAllSS"){
		sessionStorage.clear();
	}

}


