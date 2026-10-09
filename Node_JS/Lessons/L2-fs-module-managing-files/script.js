const fs = require("fs");

// !   File create + anything add

// fs.writeFile("about.txt", "My name is Ridwan Ahmed ", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// # ------------------------------------------------
// !   File a new kone kiso add kore

fs.appendFile("about.txt", "I am a Backend developer", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});

// # ------------------------------------------------
