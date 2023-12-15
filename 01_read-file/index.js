// the terminal runs file line wise but the append file runs after all renme , write then append file and then read file

const fs = require("fs");

// path is available to do or target the file
const path = require("path"); // path should be always on top

// without string it creates a buffer data that is cannot read

fs.readFile("./file/starter.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// or you can add utf8 which is html version helps to create the data without add to string

fs.readFile("./file/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// exit on uncaught error

//The process object provides information about, and control over, the current Node.js process

const process = require("node:process");
process.on("Uncaught exception", (err) => {
  console.error(`There was an uncaught error:' $(err)`);
  process.exit(1);
});

// always check file precisely on terminal

fs.readFile("./file/starter.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// in the fs.writeFile function call. The fs.writeFile function requires three arguments: the file path, the data to be written, and a callback function that will be called once the writing is complete or an error occurs.
fs.writeFile(
  path.join(__dirname, "file", "reply.txt"),
  "Hello, this is the content to be written!",
  (err) => {
    if (err) throw err;
    console.log("File has been written successfully.");
  }
);

//append file create a file which doesn't exist and modify the existing file as well
fs.appendFile(
  path.join(__dirname, "file", "test.txt"),
  "testing test!",
  (err) => {
    if (err) throw err;
    console.log("append has been written successfully.");
  }
);

//like we can do this

// !important

// fs.writeFile(
//   path.join(__dirname, "file", "reply.txt"),
//   "Hello, this is the content to be written!",
//   (err) => {
//     if (err) throw err;
//     console.log("File has been written successfully.");
//     fs.appendFile(
//       path.join(__dirname, "file", "test.txt"),
//       "/n/ntesting test!",
//       (err) => {
//         if (err) throw err;
//         console.log("append has been written successfully.");
//       }
//     );
//   }
// );

// rename file helps to rename , it takes old and new parameter

fs.rename(
    path.join(__dirname, "file", "test1.txt"),
    path.join(__dirname, "file", "newtest1.txt"),
    (err) => {
      if (err) throw err;
      console.log("rename successfully.");
    }
  );


  // it is not good practice just for info
  // fs.writeFile(
//   path.join(__dirname, "file", "reply.txt"),
//   "Hello, this is the content to be written!",
//   (err) => {
//     if (err) throw err;
//     console.log("File has been written successfully.");
//     fs.appendFile(
//       path.join(__dirname, "file", "test.txt"),
//       "/n/ntesting test!",
//       (err) => {
//         if (err) throw err;
//         console.log("append has been written successfully.");
//       }
//     );
//     fs.rename(
//         path.join(__dirname, "file", "test1.txt"),
//         path.join(__dirname, "file", "newtest1.txt"),
//         (err) => {
//           if (err) throw err;
//           console.log("rename successfully.");
//         }
//       );
//   }
// );
