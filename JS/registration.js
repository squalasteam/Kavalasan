	
	    var globalcount = 1067;
		function login(){
		
		     var n1 =1;
		   globalcount += n1;
		  let name =document.getElementById("name").value
		  let age =document.getElementById("age").value
		  let gender =document.getElementById("gender").value
		  let profession =document.getElementById("profession").value
		   
		  if( gender ==="male"){
		       sex ="male";
		  }else if ( gender === "female"){
		     sex="female";
		  } else {
		    sex="others"
		  }

		  
		  if(name && age && gender && profession !=="" ){
		    data="visible";
			color="#ffbc00";
		    invalid="Enter Your datailes";
			 
			
		  } 
		  else{
		    data="hidden";
		    invalid="please Enter Your datailes";
			color="red";
		  }
		  
		  document.getElementById("erorr").style.background= color;
		  document.getElementById("erorr").innerHTML= invalid;
		  document.getElementById("data").style.visibility= data;
		   document.getElementById("id").innerHTML=  globalcount;
		   document.getElementById("op_name").innerHTML= name;
		   document.getElementById("op_age").innerHTML= age;
		   document.getElementById("op_gender").innerHTML= sex;
		   document.getElementById("op_profession").innerHTML= profession;
		  
		}
 	function onlyNumberKey(evt) {
		
		// Only ASCII character in that range allowed
		var ASCIICode = (evt.which) ? evt.which : evt.keyCode
		if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
			return false;
		return true;
	}