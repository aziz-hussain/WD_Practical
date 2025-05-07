const operations = require('./operations.js')

let x = 5;
let y = 10;

console.log(`addition of ${x} and ${y} is ${operations.add(x,y)}`);

console.log(`subtraction of ${x} and ${y} is ${operations.sub(x,y)}`);

console.log(`division of ${x} and ${y} is ${operations.div(x,y)}`);

console.log(`multiplication of ${x} and ${y} is ${operations.mul(x,y)}`);

console.log(`modulus of ${x} and ${y} is ${operations.mod(x,y)}`);
