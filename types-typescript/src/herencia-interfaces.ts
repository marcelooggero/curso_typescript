export{}
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity{
    id:number,
    title:string
}

interface Album extends Entity{
    //copia de Entity
    description: string
}

interface Picture extends Entity{
    orientation: PhotoOrientation
}

const album: Album = {
    id: 10,
    title: 'blabla',
    description:'dkljhfjsdhgjshfjlghsfldl'

}
const picture: Picture = {
    id:1,
    title: 'holis',
    orientation: PhotoOrientation.Portrait
}

let newPicture = {} as Picture
newPicture.id=2
newPicture.title= 'chau'
console.log('album', album)
console.log('picture', picture)
console.log('new picture', newPicture)