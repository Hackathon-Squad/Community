const express = require("express");
const router = express.Router();
const db = require("../db");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage();
const bucket = storage.bucket("community-post-images");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  console.log(req.files);
  let uploadedFile = req.files.image.data;
  const file = bucket.file(uuidv4());
  try {
    await file.save(uploadedFile);
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error");
  }
  const url = file.publicUrl();
  res.status(200).send(url);
});

module.exports = router;
