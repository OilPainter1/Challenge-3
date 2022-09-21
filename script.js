// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = 0
    
    while (passwordLength<8 || passwordLength>128){
    passwordLength= prompt("type in number between 8 and 128 which will represent your password length")
    }

    var includeLowercase = ""
    

    while (includeLowercase != "yes" && includeLowercase != "no"){
        includeLowercase = prompt("Would you like to include lower case letters in the password? (type yes or no)") 
    }
    if (includeLowercase=="yes") {
        includeLowercase = true
    }
    else{
        includeLowercase = false
    }

    var includeUpperCase = ""

    while (includeUpperCase != "yes" && includeUpperCase != "no"){
        includeUpperCase=prompt("Would you like to include Upper case letters in the password? (type yes or no)")
    }
    if (includeUpperCase == "yes") {
        includeUpperCase = true
    }
    else {
        includeUpperCase= false
    }

    var includeSpecialCharacters = ""

    while (includeSpecialCharacters != "yes" && includeSpecialCharacters != "no"){
        includeSpecialCharacters=prompt("Would you like to include special characters in the password? (type yes or no)")
    }
    if (includeSpecialCharacters == "yes") {
        includeSpecialCharacters = true
    }
    else {
        includeSpecialCharacters= false
    }

    var includeNumericValues = ""

    while (includeNumericValues != "yes" && includeNumericValues != "no"){
        includeNumericValues=prompt("Would you like to include numeric values in the password? (type yes or no)")
    }
    if (includeNumericValues== "yes") {
        includeNumericValues = true
    }
    else {
        includeNumericValues= false
    }

    var lower = 
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upper = 
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numeric = 
    ["1","2","3","4","5","6","7","8","9","0"]
    var special = 
    [" ","!","<",">","/","[","]","{","}","&","*","%","#","!","@","$"]

    

    var usableCharacters = []

    
    if(includeLowercase){
            usableCharacters=usableCharacters.concat(lower)
    }
    if(includeUpperCase){
            usableCharacters = usableCharacters.concat(upper)
    }
    if(includeNumericValues){
            usableCharacters = usableCharacters.concat(numeric)
    }
    if(includeSpecialCharacters){
            usableCharacters=usableCharacters.concat(special)
    }

    

    var returnedPassword = ""
    

    for(var i = 0; i<passwordLength;i++){

        
        returnedPassword = returnedPassword + usableCharacters[Math.floor(Math.random()*usableCharacters.length)]
        
    }
    return returnedPassword

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);