// // 3 types of streams
// // 1. Writable streams
// // 2.Readable streams
// // 3.Duplex ( <=> ) = 1 / 2

// const fs = require("fs");

// const writeStream = fs.createWriteStream("./output.txt");
// const readableStream = fs.createReadStream("./output.txt", "UTF-8");

// writeStream.write("Ova e prv dopir so writable streams");
// readableStream.on("data", (chunk) => {
//   console.log("proicitavme nov chunk:", chunk);
// });

const kiko = [
  {
    kiko: "Pederce si golemoi ",
    prezime: "Pak si pederce najgolemoo :D",
  },
];

console.log("Eve go kiko pederot", kiko.prezime);
