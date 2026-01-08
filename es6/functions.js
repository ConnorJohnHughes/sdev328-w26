
const pretty = msg => {
    console.log("------------------------");
    console.log(msg);
    console.log("------------------------");
}

const plain = msg => console.log(msg);

//higher-order function
const printer = (msg, func) => {
    console.info(`Passed ${msg} to printer()`);
    func(msg);
}

printer("Hello, world", pretty);
console.log();
printer("Hello, again", plain);
console.log();
printer("Hello, class", el => console.log(el.toUpperCase()));

//map() - maps the elements of an array to another array
const objects = ["Great Gatsby", "Monsters Inc", "Interstellar", "Morbius", "Morbius", "Morbius"];

const html = objects.map(movie => {
    return `
    <section>
        <h1>${movie}</h1>
        <p>A decent/good movie</p>
        <aside>You should watch this</aside>
    </section>`;
});

console.log(html);

//sort() - sorting requires a comparator function
objects.sort((one, two) => {
    if (one < two) return -1
    else if (one > two) return 1;
    return 0;
})
console.log(objects);

//forEach() - loops over the elements
objects.forEach(el => console.log(el));

//filter()
let filtered = objects.filter(el => el.startsWith("M"))
console.log(filtered);

filtered = objects.filter(el => el !== "Morbius");
console.log(filtered);

//find()
const element = objects.find(elem => elem.startsWith("M"));
console.log(element);

//some(), every()
let some = objects.some(elem => elem.includes("r"));
console.log(`Do some of the elements have 'r'? ${some}`);

some = objects.some(elem => elem.includes("z"));
console.log(`Do some of the elements have 'z'? ${some}`);

let every = objects.every(elem => elem.includes("r"));
console.log(`Do some of the elements have 'r'? ${every}`);

every = objects.every(elem => elem.includes("i"));
console.log(`Do some of the elements have 'i'? ${every}`);