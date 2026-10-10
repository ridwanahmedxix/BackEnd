const fs = require("fs");

// fs.writeFile(
//   "profile.txt",
//   "My name is Ridwan and I am a backend developer - MERN Stack",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesful");
//     }
//   },
// );

// ! ------------------------------------------------------------

// fs.appendFile(
//   "profile.txt",
//   " My goal is to become a professional backend web developer",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesful");
//     }
//   },
// );

// ! ------------------------------------------------------------

// fs.readFile("profile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//     console.log(data);
//   }
// });

// ! ------------------------------------------------------------

// fs.unlink("profile.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Deleted");
//   }
// });

// ! ------------------------------------------------------------

// fs.rename("profile.txt", "developer.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Renamed Successfully");
//   }
// });

// fs.readFile("developer.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

fs.appendFile("developer.txt", "/nHow are you ?", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("developer.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});
