const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 5000;

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
