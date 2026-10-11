const fs = require("fs");

fs.writeFile("about.txt", "I Love You", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});
