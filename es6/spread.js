//spread operator with arrays
const hobbies = ["reading", "swimming", "walking", "basketball"];
const thingsToDo = ["dishes", ...hobbies, "laundry"];

console.log(thingsToDo);

//spread with function arguments
const todo = (task1, task2, task3, task4, task5, task6) => {
    console.log(`Todo: ${task1}`);
    console.log(`Todo: ${task2}`);
    console.log(`Todo: ${task3}`);
    console.log(`Todo: ${task4}`);
    console.log(`Todo: ${task5}`);
    console.log(`Todo: ${task6}`);
}

todo("walk the dog", "go for a walk", "read a book");
console.log();
todo("walk the dog", "go for a walk", ...hobbies);

//spread with objects
const updatedOwner = {
    fname: "Big Bill"
}

const owner = {
    fname: "Bill",
    lname: "Samson",
    address: "1000 apple lane",
    ...updatedOwner
}

owner.fname = "bailey";

const account = {
    ...owner,
    id: 111,
    balance: 1000
}

console.log(account);