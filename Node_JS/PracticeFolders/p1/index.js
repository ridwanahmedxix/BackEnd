const fs = require("fs");

fs.writeFile("diary.txt", "Today I learned Node js fs module", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});

fs.appendFile("diary.txt", " Tomorrow I will learn more !", (err) => {
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
});
