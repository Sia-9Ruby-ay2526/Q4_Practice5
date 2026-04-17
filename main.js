function checkingPassword(){
    let passkeyPrivate = "";
    
    do {
        checkPass = promt ("Enter a password longer than 4 characters.","");
    }
    while (checkPass.length < 5);  
    
    window.alert("entered password:", password);
}