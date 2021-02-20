const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const doc = db.collection("posts").doc();
  try {
    await doc.set(req.body);
  } catch (error) {
    console.error(error);
  }
  res.status(200).send("Added Post");
});

module.exports = router;
