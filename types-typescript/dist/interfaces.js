"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// function showPicture(picture: {title:string, date:string, orientation: PhotoOrientation}){
//     console.log(`[
//         title: ${picture.title},
//         date:${picture.date},
//         orientation:${picture.orientation}]`)
// }
//con use de interface
function showPicture(picture) {
    console.log(`[
        title: ${picture.title},
        date:${picture.date},
        orientation:${picture.orientation}]`);
}
let myPic = { title: 'test', date: '2020-05-01', orientation: PhotoOrientation.Landscape };
function generatePicture(config) {
    const pic = { title: 'default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'lalala' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'jose', isPro: true };
console.log('user', user);
user.username = 'pipi';
console.log('user', user);
// user.id = 50
