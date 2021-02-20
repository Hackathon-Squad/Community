require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/create-event", require("./api/create-event"));
app.use("/api/posts", require("./api/posts"));

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
