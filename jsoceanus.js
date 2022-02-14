function handleSubmit(){
    let emails=document.getElementById("email");
    let emailValue=emails.value;
    let passwords=document.getElementById("password");
    let passwordValue=passwords.value;
    


    let resultValue=document.getElementById("result");
    resultValue.innerHTML="<p > login mailId is: "+ emailValue+ " .Entered password is : "+ passwordValue +"</p>";

}
