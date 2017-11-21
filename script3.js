var textKey = document.getElementById("textKey");
var textValue = document.getElementById("textValue");
var RemoveLocalStorage = document.getElementById("ButtonDeleteLS");
var RemoveSessionStorage = document.getElementById("ButtonDeleteSS");
var DeleteAllLS = document.getElementById("ButtonDeleteAllLS");
var DeleteAllSS = document.getElementById("ButtonDeleteAllSS");

var localobject = {
	setlocation : localStorage
};
var sessionobject = {
	setlocation : sessionStorage
};

function setItemvalidation() {
	if(	textKey.value == "" || textValue.value == ""){
		alert("Please enter both the fields");
		return 0;
	}

}
function getItemValidation() {
	if(	textKey.value == ""){
		alert("Please enter Key Field");
		return 0;
	}
}

function set(obj){
	var validate = setItemvalidation();
	if(validate != 0){
		this.setlocation.setItem(textKey.value,textValue.value);	
	}
}
function get(obj){
	var validate = getItemValidation();
	if(validate != 0){
		if(this.setlocation.getItem(textKey.value) == null){
			alert("Key not present");
		}
		else{		        
		        alert("Value : "+this.setlocation.getItem(textKey.value));
		}			
	}	
}
function getAll(obj){
    for (var index = 0; index < localStorage.length; index++) {
        console.log(this.setlocation.key(index)+"\t\t\t\t"+this.setlocation.getItem(this.setlocation.key(index)));
    }
}			

function remove(button){
	if(button == "ButtonDeleteLS"){
		alert("Value Removed"+"\nKey : "+textKey.value+"\nValue : "+this.setlocation.getItem(textKey.value));
		this.setlocation.removeItem(textKey.value);
	}
	else if(button == "ButtonDeleteSS"){
		alert("Value Removed"+"\nKey : "+textKey.value+"\nValue : "+this.setlocation.getItem(textKey.value));
		this.setlocation.removeItem(textKey.value);
	}
	else if(button == "ButtonDeleteAllLS"){
		this.setlocation.clear();
	}
	else if(button == "ButtonDeleteAllSS"){
		this.setlocation.clear();
	}
}

var setlocal = set.bind(localobject);
document.getElementById("ButtonLS").onclick = setlocal;
var setsession = set.bind(sessionobject);
document.getElementById("ButtonSS").onclick = setsession;
var getlocal = get.bind(localobject);
document.getElementById("ButtonGetLS").onclick = getlocal;
var getsession = get.bind(sessionobject);
document.getElementById("ButtonGetSS").onclick = getsession;
var getAlllocal = getAll.bind(localobject);
document.getElementById("ButtonGetALlLS").onclick = getAlllocal;
var getAllsession = getAll.bind(sessionobject);
document.getElementById("ButtonGetAllSS").onclick = getAllsession;
RemoveLocalStorage.addEventListener("click",function(){
	remove.call(localobject,"ButtonDeleteLS");
});
RemoveSessionStorage.addEventListener("click",function(){
	remove.call(sessionobject,"ButtonDeleteSS");
});
DeleteAllLS.addEventListener("click",function(){
	remove.call(localobject,"ButtonDeleteAllLS");
});
DeleteAllSS.addEventListener("click",function(){
	remove.call(sessionobject,"ButtonDeleteAllSS");
});

