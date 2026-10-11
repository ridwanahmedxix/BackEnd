const fs = require("fs");

fs.writeFile("student.txt", "My name is Ridwan", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile("student.txt", "\nI am learning Node.js.", (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.appendFile(
          "student.txt",
          "\nMy goal is to become a Backend Developer .",
          (err) => {
            if (err) {
              console.log(err);
            } else {
              fs.readFile("student.txt", "utf-8", (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(data);
                }
              });
            }
          },
        );
      }
    });
  }
});
