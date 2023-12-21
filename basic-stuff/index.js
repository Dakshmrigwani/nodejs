// it is for knowlege

console.log(process.argv[1])

// basic example

const fs = require('fs')

const input = process.argv

// fs.writeFileSync(input[2] , input[3])

// now do some magic

if(input[2] == 'add'){
    fs.writeFileSync(input[3] , input[4])
}
else if(input[2] == 'remove'){
    fs.unlinkSync( input[3])
}
else{
    console.log("invalid output")
}