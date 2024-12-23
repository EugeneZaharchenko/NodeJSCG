const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

// Apply routes
app.use("/", routes.router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(routes.someText);
});
