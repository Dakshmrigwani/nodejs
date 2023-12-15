// the terminal runs file line wise but the append file runs after all renme , write then append file and then read file

const fsPromise = require("fs").promises;

// path is available to do or target the file
const path = require("path"); // path should be always on top

// we create promises to catch file and error

const FileOps = async () => {
  try {
    const data = await fsPromise.readFile( path.join(__dirname, "filePromise", "starter.txt"), 'utf-8');
    // we are not using this -> (err, data) bcz we are using async and await
    console.log(data)

    // it helps to delete the file
    // await fsPromise.unlink( path.join(__dirname, "filePromise", "starter.txt"));
    await fsPromise.writeFile( path.join(__dirname, "filePromise", "starter.txt"), data);
    await fsPromise.appendFile( path.join(__dirname, "filePromise", "starter.txt"), '\n\nNice to meet you');
    await fsPromise.appendFile( path.join(__dirname, "filePromise", "new1.txt"), '\n\nNice to meet you');
    await fsPromise.rename( path.join(__dirname, "filePromise", "new1.txt"), ( path.join(__dirname, "filePromise", "new2.txt")));
  } catch (err) {
    console.error(err);
  }
};
FileOps()
// fs.readFile("./filePromise/starter.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
