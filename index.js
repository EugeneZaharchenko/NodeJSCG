const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Custom-Header", "my-header");
  res.send("Hello from Node.js Docker container! Try changing HO-JHO ))).");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
