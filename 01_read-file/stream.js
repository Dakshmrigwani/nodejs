// we are using due to getting the thing at once not doing one by one

const fs = require("fs");

const rs = fs.createReadStream("./getThings/starter.txt", {encoding:'utf-8'});

const ws = fs.createWriteStream("./getThings/new-starter.txt");