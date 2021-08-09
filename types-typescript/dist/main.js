console.log('chau chau');
//Number
//Explicito
let phone;
phone = 1;
//inferido
let phoneNumber = 349857349857;
// phoneNumber = true //error
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//Tipo Boolean
let isPro;
isPro = true;
// isPro = 3243457645;//Error
//Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 80; //error
//String
let username = 'luis';
username = 'lola';
// username = true; //error
//Template string
// Uso de back-tick ``
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstname: ${username + 'Juan'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('user info', userInfo);
