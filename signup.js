
function validate()
{
      let email =document.getElementById("emailinput");
       let pass=document.getElementById("passwordinput");
       let phno=document.getElementById("phonenumber");
         let label=document.getElementById("checkemail");
         let labelpass=document.getElementById("check");
         let labelphone=document.getElementById("checkphone");


     
     let regexp_phone= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let regexp_pass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   
     
     
     if(email.value.trim()==""|| pass.value.trim()=="" || phno.value.trim()=="")
     {
        alert("Please fill Empty fields.")
        label.style.visibility="visible";
        label.style.color="red";
        labelpass.style.visibility="visible";
        labelpass.style.color="red";
        labelphone.style.visibility="visible";
        labelphone.style.color="red";
        return false;
    }
     
     else if(phno.value.length<10 )
     {
        alert("Phone number should be 10 digits.")
        phno.style.color="red";
        labelphone.style.visibility="visible";
        labelphone.style.color="red";
        labelphone.innerHTML="invalid";
        return false;
     }
     else if(pass.value.length <3 )
     {
        labelpass.style.color="red";
        labelpass.innerHTML="Poor.Minimum 8 characters, at least one uppercase and one lower case, must contain at least one number";
        return false;
     }
     else if(pass.value.length>3 && pass.value.length <8 )
     {
        labelpass.style.color="orange";
        labelpass.innerHTML="Medium. Minimum 8 characters, at least one uppercase and one lower case, must contain at least one number";
        return false;
     }
    else if(pass.value.length >8 &&regexp_phone.test(phno.value) && regexp_pass.test(pass.value))
     {
          
          labelpass.style.visibility="visible";
          labelpass.innerHTML="Strong";
          labelpass.style.color="green";
          labelphone.style.visibility="visible";
          labelphone.innerHTML="valid";
          labelphone.style.color="green";
         return true;
    }

     else{

        alert("Invalid entry.Check your enteries");
        return false;
     }
}