const fs = require("fs");

fs.writeFile(
  "profile.txt",
  "My name is Ridwan and I am a backend developer - MERN Stack",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesful");
    }
  },
);
