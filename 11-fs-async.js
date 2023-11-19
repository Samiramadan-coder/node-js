const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

writeFile("./content/result-async.txt", "hi", (err, data) => {});
