console.log('chau chau');
//Number
//Explicito
var phone;
phone = 1;
//inferido
var phoneNumber = 349857349857;
// phoneNumber = true //error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo Boolean
var isPro;
isPro = true;
// isPro = 3243457645;//Error
//Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 80; //error
//String
var username = 'luis';
username = 'lola';
// username = true; //error
//Template string
// Uso de back-tick ``
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstname: " + (username + 'Juan') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('user info', userInfo);
