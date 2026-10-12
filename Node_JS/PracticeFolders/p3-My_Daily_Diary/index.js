const fs = require("fs");

fs.writeFile("diary.txt", "Today I am learning Node.js.", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile(
      "diary.txt",
      "\nMy goal is to become a great backend developer.",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          fs.readFile("diary.txt", "utf-8", (err, data) => {
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
