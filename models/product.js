import { readFile, writeFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Отримаємо шлях до поточного файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = join(__dirname, "..", "data", "products.json");
    readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseErr) {
          console.log("Помилка парсингу JSON:", parseErr);
        }
      }
      products.push(this);
      writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log("Помилка запису:", err);
      });
    });
  }

  static fetchAll(cb) {
    const p = join(__dirname, "..", "data", "products.json");
    readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      try {
        const data = JSON.parse(fileContent);
        cb(data);
      } catch (parseErr) {
        console.log("Помилка парсингу JSON:", parseErr);
        cb([]);
      }
    });
  }
}
