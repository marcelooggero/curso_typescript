//type object

import { isBreakOrContinueStatement } from "typescript"

let user: object
user = {}

user={
    id:1,
    username: 'paparazzi',
    firstName: 'pablo',
    isPro: true
}

console.log('user',user)

// console.log('user.username', user.username)//no se puede acceder a las propiedades de una var object en ts

const myObject={
    id:1,
    username: 'paparazzi',
    firstName: 'pablo',
    isPro: true
}

const isInstance = myObject instanceof Object//clase Object de js
console.log('isInstance', isInstance)

console.log('user.username', myObject.username)