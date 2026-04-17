function checkingPassword(){
    let password = "Agatite";
    
    do {
        checkPass = prompt("Enter a password longer than 4 characters.","Agatite");
    }
    while (checkPass.length < 5);  
    
    window.alert("entered password:", checkPass);
}
