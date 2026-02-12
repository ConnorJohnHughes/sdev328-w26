
const food = ["banana", "chow mein", "tacos", 
              "pizza", "sushi", "quesadilla", 
              "chicken soup"];

const [ f0, f1, f2, ...foods ] = food;
console.log(`#1: ${f0}`);
console.log(`#2: ${f1}`);
console.log(`#3: ${f2}`);
console.log(`Others: ${foods}`);
console.log(JSON.stringify(foods, null, 4));

//does the rest operator work with objects during destructuring?
const color = {
    red: 100,
    green: 255,
    blue: 100,
    alpha: 0.5,
    isGrayScale: true,
    name: "greenish"
}

const { red: r, green: g, blue: b, ...props } = color;
console.log(r, g, b);
console.log(props);

const name = (fname, lname, middle, ...nicknames) => {
    console.log(`You are ${fname} ${middle}. ${lname}`);
    
    for (const otherName of nicknames) {
        console.log(`Also known as ${otherName}`);
    }
}

name("bill", "denborough", "a", "bill", "big bill", "clown slayer");