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
function getItemalidation() {
	if(	textKey.value == ""){
		alert("Please enter Key Field");
		return 0;
	}
}

function set(){
	var validate = setItemvalidation();
	if(validate != 0){
		this.setlocation.setItem(textKey.value,textValue.value);	
	}
}
function get(button){
	var validate = getItemalidation();
	if(validate != 0){
		if(this.setlocation.getItem(textKey.value) == null){
			alert("Key not present");
		}
		else{
			if(button == "ButtonGetLS" || button == "ButtonGetSS"){
				alert("Value : "+this.setlocation.getItem(textKey.value));
			}
			else if(button == "ButtonGetALlLS" || button == "ButtonGetAllSS"){
				for (var index = 0; index < localStorage.length; index++) {
					console.log(this.setlocation.key(index)+"\t\t\t\t"+this.setlocation.getItem(this.setlocation.key(index)));
				}
			}
		}
		
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


SetLocalStorage.addEventListener("click",function(){
	set.call(localobject);
});  
SetSessionStorage.addEventListener("click",function(){
	set.call(sessionobject);
});  


GetLocalStorage.addEventListener("click",function(){
	get.call(localobject,"ButtonGetLS");
}); 
GetSessionStorage.addEventListener("click",function(){
	get.call(sessionobject,"ButtonGetSS");
}); 
GetAllLocalStorage.addEventListener("click",function(){
	get.call(localobject,"ButtonGetALlLS");	
});
GetAllSessionStorage.addEventListener("click",function(){
	get.call(sessionobject,"ButtonGetAllSS");	
});


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