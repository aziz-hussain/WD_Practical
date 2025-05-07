const fs = require('fs');

// create a new dir named thapa
fs.mkdirSync('thala');

// create a new file inside directory
fs.writeFileSync("thala/bio.txt", "my name is thala 777 yoyoyo");

// append data to a file
fs.appendFileSync('thala/bio.txt', '\nmahendra singh dhoni yooyooyooyoyo');

// to read data
const data = fs.readFileSync('thala/bio.txt').toString();
console.log(data);

// to rename a file
fs.renameSync('thala/bio.txt', 'thala/BIO.txt');

// to delete a file
fs.unlinkSync('thala/BIO.txt');

// remove directory entirely
fs.rmdirSync('thala');

// ---------------------------------------------------------------------------
// const fs = require('fs');

// let data = fs.readFileSync('data.txt').toString()
// console.log(data);

// fs.appendFileSync('data.txt', '\nI hate ml');

// create a new instance of a filesystem
// ---------------------------------------------------------------------------