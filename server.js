require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const db = require("./db");

// const test = async () => {
//   const doc = db.collection("test").doc();
//   try {
//     await doc.set({
//       stuff: "testing123",
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };
// //test();

const PORT = process.env.PORT || 5000;

app.use(express.json());
//put app.use("/api/route", require("./api/route")) for the routes

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
