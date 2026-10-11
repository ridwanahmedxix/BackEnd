const fs = require("fs");

// fs.writeFile("about.txt", "I Love You", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully");
//   }
// });

fs.appendFile("about.txt", " !Ridwan", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("about.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});
