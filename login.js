
function validate()
{
    
let email =document.getElementById("emailinput");
let pass=document.getElementById("passwordinput");
     let label=document.getElementById("checkemail");
     let labelpass=document.getElementById("check");
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     
     if(email.value.trim()==""|| pass.value.trim()=="")
     {
         alert("Please fill Empty fields.")
         label.style.visibility="visible";
         label.style.color="red";
         labelpass.style.visibility="visible";
         labelpass.style.color="red";
         return false;
     }
    
     else if(pass.value.length <3 )
     {
        alert("Password should be minimum 8 characters, at least one uppercase and one lower case, must contain at least one number ");
        labelpass.style.color="red";
        labelpass.innerHTML="poor";
        return false;
     }
     else if(pass.value.length>3 && pass.value.length <8 )
     {
        alert("Password should be minimum 8 characters, at least one uppercase and one lower case, must contain at least one number ");
        labelpass.style.color="orange";
        labelpass.innerHTML="Medium. Please make it min 8 charaters";
        return false;
     }
     else if(pass.value.length>=8 && regexp.test(pass.value) )
     {
        label.style.visibility="visible";
        label.innerHTML="valid";
        label.style.color="green";
        labelpass.style.color="green";
        labelpass.innerHTML="Strong ";
        return true;
     }
     
     else{

        alert("Not a  valid password ");
        labelpass.style.visibility="visible";
        labelpass.innerHTML="invalid";
        labelpass.style.color="red";
        return false;
     }
}