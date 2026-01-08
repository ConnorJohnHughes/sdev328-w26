
const colors = ["red", "green", "blue", "beige", "brown"];

const [r, g, b] = colors;

console.log(`Red: ${r}`);
console.log(r, g, b);

const [, , , beige, brown] = colors;
console.log(beige, brown);

const car = {
    make: "Nissan",
    model: "Rogue",
    year: 2019,
    running: false,
    dealership: {
        location: "Puyallup",
        name: "Nissan of Puyallup"
    }
}

const { year, model, running } = car;
console.log(`I bought my ${model} on the year ${year}`);

//rename destructured properties
const { year: yr, model: mdl} = car;
console.log(yr, mdl);

//destructure nested properties
const { make, dealership: { location, name } } = car;
console.log(make, location, name);

//const make = car.make;
//const location = car.dealership.location;

const classroom = {
    number: 230,
    seats: 24,
    project: true
}

const stadium = {
    number: 2,
    seats: 10000,
    name: "Lumen Field",
    sport: "Football"
}

doSomething(classroom, true);
doSomething(stadium, false);

function doSomething({ number, seats }, emphasize) {
    let message = `The number of seats is: ${seats}`;
    if (emphasize) {
        message = message.toUpperCase();
    } 
    console.log(message);
}