"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 10,
    title: 'blabla',
    description: 'dkljhfjsdhgjshfjlghsfldl'
};
const picture = {
    id: 1,
    title: 'holis',
    orientation: PhotoOrientation.Portrait
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'chau';
console.log('album', album);
console.log('picture', picture);
console.log('new picture', newPicture);
