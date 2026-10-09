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
// !   File a new kone kiso add kore mane Update kore

// fs.appendFile("about.txt", "I am a Backend developer", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// # ------------------------------------------------

// !   File read kora

// fs.readFile("about.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//     console.log(data);
//   }
// });

// # ------------------------------------------------
// !   File name rename kora

// fs.rename("about.txt", "myself.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// # ------------------------------------------------

// !   File delete kora

fs.unlink("myself.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
