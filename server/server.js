const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const customErrorHandler = require("./middlewares/error/customErrorHandler");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(customErrorHandler);
app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      console.log(`Server is running on port ${PORT} | ${process.env.NODE_ENV}`)
    )
    .catch((err) => console.log(err))
);
