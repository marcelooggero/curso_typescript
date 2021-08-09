export{}

export {};
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
#id: number;
#title: string;
#orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
      this.#id= id
      this.#title= title
      this.#orientation= orientation;
  }
  public toString(){
      return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`
  }
}

class Album{
    #id: number;
    #title:string;
    #pictures: Picture[];
    constructor(id:number, title:string){
        this.#id=id;
        this.#title= title;
        this.#pictures = [];
    }
    addPicture(picture: Picture){
        this.#pictures.push(picture)
    }
}

const album: Album = new Album(1,'personal picture')
const picture: Picture = new Picture(1,'pelicula', PhotoOrientation.Square)
album.addPicture(picture)
console.log('album', album)

//accediendo a los miembros publicos
// picture.id = 100;//acceso privado
// picture.title='dskhfldf'
// album.title= 'Personal activities'
console.log('album', album)
