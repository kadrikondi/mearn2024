const fs = require("fs");
console.log(fs);
// write a file
// fs.writeFile(
//   "./docs/blog.txt",
//   "gooood morningdfdfsdsgsdgsgsdsgsdgssdsdgsdsgsdgsdgsdgsdfgsdfgsdfgfgdfhdfghdfghghfghghfgfgfgjfhjjfjfjfgfgjfjfgfjfgj",
//   (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("creATED");
//     }
//   }
// );

// readfile

// fs.readFile("./docs/about.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data.toString());
// });

// dirrectory
if (!fs.existsSync("./photo")) {
  fs.mkdir("./photo", (err, res) => {
    if (err) {
      console.log(err);
    }

    console.log("folder created");
  });
} else {
  console.log("folder already created");
}

// deletefolder
if (fs.existsSync("./photo")) {
  fs.rmdir("./photo", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// fs.rename
if (fs.existsSync("./photo")) {
  fs.rename("./photo", "./images", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
