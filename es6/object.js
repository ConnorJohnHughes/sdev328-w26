
const mftr = "Acme Inc";
const cost = 199.99;

const product = { mftr, cost }

console.log(product.mftr);
console.log(product.cost);

const light = {
    on: true,
    lumens: 4,
    product
}

console.log(`Cost: ${light.product.cost}`);