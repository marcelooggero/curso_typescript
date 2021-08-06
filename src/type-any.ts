//tipo explicito
let idUser: any;
idUser = 1;
idUser = 'sdsd';
console.log('idUser', idUser);

//tipo inferido
let otherId;
otherId = 1;
otherId = '1';
otherId= true;

let surprise: any= 'hello ts';

const res = surprise.substring(6);
console.log('res', res);

