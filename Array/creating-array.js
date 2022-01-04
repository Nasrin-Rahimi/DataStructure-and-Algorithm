
class Dvd {

    constructor(name, director, releaseYear){
        this.name = name;
        this.director = director;
        this.releaseYear = releaseYear;
    }

    toString() {
        return this.name + ", directed by " + this.director + ", released in " + this.releaseYear;
    }

}

const dvdCollection = new Array(15);

dvdCollection[0] = new Dvd('Khatereh', 'Ebi', '1990');
console.log(dvdCollection[0].toString());
