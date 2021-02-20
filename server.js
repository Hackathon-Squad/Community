require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

//db connection here

const PORT = process.env.PORT || 5000;

app.use(express.json());
//put app.use("/api/route", require("./api/route")) for the routes

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
