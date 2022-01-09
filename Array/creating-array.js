
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
//create a new dvd
const ebiDvd = new Dvd('Khatereh', 'Ebi', '1990');
//put the dvd in to the array
dvdCollection[0] = ebiDvd;

const incrediblesDvd = new Dvd("The Incredibles", 2004, "Brad Bird");
const findingDoryDvd = new Dvd("Finding Dory", 2016, "Andrew Stanton");
const lionKingDvd = new Dvd("The Lion King", 2019, "Jon Favreau");

// Put "The Incredibles" into the 4th place: index 3.
dvdCollection[3] = incrediblesDvd;

// Put "Finding Dory" into the 10th place: index 9.
dvdCollection[9] = findingDoryDvd;

// Put "The Lion King" into the 3rd place: index 2.
dvdCollection[2] = lionKingDvd;

console.log(dvdCollection[0].toString());
console.log(dvdCollection[3].toString());
console.log(dvdCollection[9].toString());
console.log(dvdCollection[2].toString());

//reading from the array with loop
for(let i = 0; i < dvdCollection.length; i++) {
    const dvd = dvdCollection[i] ? dvdCollection[i].toString() : 'Empty DVD';
    console.log(dvd);
}

//When we don't need the index of the array, is better to use another loop like forEach
dvdCollection.forEach(dvd=> {
    console.log(dvd.toString());
});
