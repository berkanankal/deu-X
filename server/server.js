const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const customErrorHandler = require("./middlewares/error/customErrorHandler");

dotenv.config({ path: "./config/env/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use("/api", routes);
app.use(customErrorHandler);

app.listen(PORT, () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      console.log(`Server is running on port ${PORT} | ${process.env.NODE_ENV}`)
    )
    .catch((err) => console.log(err))
);
