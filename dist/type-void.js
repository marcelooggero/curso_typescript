//void
//tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola'
}
showInfo({ id: 1, username: 'luis', firstName: 'luuuis' });
//tipo inferido
function showFormattedInfo(user) {
    console.log('user info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'luis', firstName: 'luuuis' });
//tipo void, como tipo de dato en variable
var unusable;
unusable = null;
//tipo : never
function handleError(code, message) {
    //process your code
    // generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'not found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10); //ciclo infinito
