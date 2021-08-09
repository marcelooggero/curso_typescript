export{}
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Picture{
    title:string;
    date:string;
    orientation: PhotoOrientation
}

// function showPicture(picture: {title:string, date:string, orientation: PhotoOrientation}){
//     console.log(`[
//         title: ${picture.title},
//         date:${picture.date},
//         orientation:${picture.orientation}]`)
        
// }

//con use de interface
function showPicture(picture: Picture){
    console.log(`[
        title: ${picture.title},
        date:${picture.date},
        orientation:${picture.orientation}]`)
        
}

let myPic = { title: 'test', date:'2020-05-01', orientation:PhotoOrientation.Landscape}
// showPicture(myPic)
// showPicture({title: 'hola', date:'2020-05-01', orientation:PhotoOrientation.Landscape})


interface PictureConfig{
    title?:string;
    date?: string;
    orientation?: PhotoOrientation
}
function generatePicture(config: PictureConfig){
    const pic = {title: 'default', date:'2020-03'}
    if(config.title){
        pic.title = config.title
    }
    if(config.date){
        pic.date = config.date
    }
    return pic
}

let picture = generatePicture({})
console.log('picture',picture)
picture = generatePicture({title: 'lalala'})
console.log('picture',picture)

//interfaz ususario
interface User{
    readonly id: number;
    username:string;
    isPro: boolean
}

let user: User
user={id: 10, username:'jose', isPro: true}
console.log('user', user)
user.username = 'pipi'
console.log('user', user)
// user.id = 50

