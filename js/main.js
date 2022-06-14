// document.getElementById("floatingInputInvalid").addEventListener("blur",Validatename)
// function Validatename(e){
//   e.preventDefault();
//   const floatingInputInvalid=document.getElementById("floatingInputInvalid")
//   const error= "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
//   if(!error.test(floatingInputInvalid.value)){
//     floatingInputInvalid.classList.add("is-invalid")

//   }
//   else{
//     floatingInputInvalid.classList.remove("is-invalid")
//   }
// }

document.getElementById("Email1").addEventListener("blur",ValidateName)

function ValidateName(e) {
    e.preventDefault();
    const Email1=document.getElementById("Email1")
    const error=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!error.test(Email1.value)|| Email1=="") {
        Email1.classList.add("is-invalid") 
    }

    else{
        Email1.classList.remove("is-invalid")
    }
}

document.getElementById("Password1").addEventListener("blur",ValidatePassword)

function ValidatePassword(e) {
    e.preventDefault();
    const Password1=document.getElementById("Password1")
    const error=/^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/
    if (!error.test(Password1.value)|| Password1=="") {
        Password1.classList.add("is-invalid") 
    }

    else{
        Password1.classList.remove("is-invalid")
    }
}


