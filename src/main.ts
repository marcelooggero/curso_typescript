console.log('chau chau')


//Number
//Explicito
let phone: number;
phone = 1;

//inferido
let phoneNumber = 349857349857;
// phoneNumber = true //error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Tipo Boolean
let isPro: boolean;
isPro = true;
// isPro = 3243457645;//Error

//Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 80; //error

//String
let username:string = 'luis';
username = 'lola';
// username = true; //error

//Template string
// Uso de back-tick ``
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstname: ${username + 'Juan'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('user info', userInfo);

















