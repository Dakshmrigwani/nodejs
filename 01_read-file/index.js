const fs = require('fs')
const path = require('path')  // path should be always on top

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

const process = require('node:process');
process.on('Uncaught exception' , err => {
    console.error(`There was an uncaught error:' $(err)`);
    process.exit(1)
})


// path is available to do or target tne file



fs.readFile('./file/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});


fs.writeFile(path.join(__dirname, 'file', 'reply.txt'), 'Hello, this is the content to be written!', (err) => {
    if (err) throw err;
    console.log('File has been written successfully.');
});
