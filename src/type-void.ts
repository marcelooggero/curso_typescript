//void
//tipo explicito
function showInfo(user: any) :any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola'
}

showInfo({id:1, username: 'luis', firstName: 'luuuis'})

//tipo inferido
function showFormattedInfo(user: any){
    console.log('user info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `)
}

showFormattedInfo({id:1, username: 'luis', firstName: 'luuuis'})

//tipo void, como tipo de dato en variable

let unusable: void;
unusable= null

 //tipo : never
function handleError(code: number, message: string): never{
    //process your code
    // generate a message
    throw new Error(`${message}. Code: ${code}`)
}
try {
    handleError(404, 'not found')
    
} catch (error) {
    
}

function sumNumbers(limit: number) : never{
    let sum = 0
    while(true){
        sum++
    }
}

sumNumbers(10)//ciclo infinito




