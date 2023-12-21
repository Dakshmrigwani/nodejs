const fs = require("fs");


// fs.writeFileSync("random.txt", "this is random file"); // this is wrong method it will create file not on the folder
const path = require("path");


// const dirPath = path.join(__dirname, "file-list-system"); 

// it is for choosing directory if you weren't there




for (i = 0; i <= 5; i++) {



//   fs.writeFileSync("random1.txt", "random text"); // for simple name
//   fs.writeFileSync("random" + i + ".txt", "random text"); // to dynamic name or do this
  // fs.writeFileSync(`random${i}.txt`, "random text");
  // and all add dir name to target the directory
  fs.writeFileSync(`random${i}.txt`, "random text");
}
