function validation(){
    var gender1=document.getElementById("gender1"); 
	var gender2=document.getElementById("gender2"); 
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	var contact=document.getElementById("contact").value;
	var subject=document.getElementById("subject").value;
	var errorMsg=document.getElementById("errorMsg");
	
	var text;
	var letters = /^[A-Za-z]+$/;
	
   
	
	errorMsg.style.padding="10px";
	
    if(gender1.checked==false && gender2.checked==false){
		text="Please select the title";
		errorMsg.innerHTML=text;
		return false;
	}
	
	if(fname==""){
		text="Please fill first name";
		errorMsg.innerHTML=text;
		return false;
	}

	if(fname.length<3){
		text="Please enter valid  first name";
		errorMsg.innerHTML=text;
		return false;
	} 
	if(fname.length>=15){
		text="first name must be less than 15 characters";
		errorMsg.innerHTML=text;
		return false;
	}
	if(!fname.match(letters)){
		text="Please enter first name with alphabetical letters";
		errorMsg.innerHTML=text;
		return false;
	}
		
	if(lname==""){
		text="Please fill last name";
		errorMsg.innerHTML=text;
		return false;
	}

	if(lname.length<3){
		text="Please enter valid  last name";
		errorMsg.innerHTML=text;
		return false;
	} 
	if(lname.length>=15){
		text="last name must be less than 15 characters";
		errorMsg.innerHTML=text;
		return false;
	}
	if(!lname.match(letters)){
		text="Please enter last name with alphabetical letters";
		errorMsg.innerHTML=text;
		return false;
	}
	if(email.indexOf("@")== -1||email.length<6||email.indexOf(".com")== -1){
		text="please enter a valid email";
		errorMsg.innerHTML=text;
		return false;
	}
	
	if(contact.length!=10){
		text="please enter a valid contact number";
		errorMsg.innerHTML=text;
		return false;
	}
		
	if(isNaN(contact)){
		text="please enter only numerical values to the contact number";
		errorMsg.innerHTML=text;
		return false;
	}
	if(subject.length>=600 ||subject.length<=20){
		text="please enter your message in less than 600 characters and more than 20 characters";
		errorMsg.innerHTML=text;
		return false;
	} 
	alert("Form submitted successfully!");
	window.location.reload();
	
	return false;
		
}