const fs = require('fs')

// without string it creates a buffer data that is cannot read

fs.readFile('./file/starter.txt' , (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

// or you can add utf8 which is html version helps to create the data without add to string

fs.readFile('./file/starter.txt' , 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// exit on uncaught error

//The process object provides information about, and control over, the current Node.js process
console.log('hello.......')
const process = require('node:process');
process.on('Uncaught exception' , err => {
    console.error(`There was an uncaught error:' $(err)`);
    process.exit(1)
})


// path is available to do or target tne file

const path = require('path')

fs.readFile(path.join(__dirname, 'files' , 'starter.txt') , (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

fs.writeFile(path.join(__dirname, 'files' , 'reply.txt') , (err, data) => {
    if (err) throw err;
    console.log(data)
})