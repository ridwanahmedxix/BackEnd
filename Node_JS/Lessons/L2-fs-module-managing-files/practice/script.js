const fs = require("fs");

fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesful");
    console.log(data);
  }
});
