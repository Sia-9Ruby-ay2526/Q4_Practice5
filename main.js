function checkingPassword(){
    let password = "Agatitg";
    
    do {
        checkPass = prompt("Enter a password longer than 4 characters.","Agatitg");
    }
    while (checkPass.length < 5);  
    
    window.alert("entered password:", checkPass);
}
