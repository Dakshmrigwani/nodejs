// it helps to create a directory

const fs = require("fs");


// it is for if new exists create otherwise dont
if (!fs.existsSync("./new")){
fs.mkdir('./new' , (err) => {
    if (err) throw err;
    console.log("directory created")
})}

// it is for if  exists delete otherwise dont
if (!fs.existsSync("./new")){
    fs.rmdir('./new' , (err) => {
        if (err) throw err;
        console.log("directory created")
    })}

    // and if run program it will create and delete as well