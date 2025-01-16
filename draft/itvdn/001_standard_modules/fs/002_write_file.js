const fs = require("fs");

const contentToWrite = "Яких файлів вам ще не вистачає?";

fs.writeFile("output.txt", contentToWrite, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("Write operation complete (async).");
});

try {
  fs.writeFileSync("output-sync.txt", contentToWrite);
  console.log("Write operation complete (sync).");
} catch (err) {
  console.error("Error writing to file (sync):", err);
}
