const router = require("express").Router();
const fs = require("fs");
const fileData = require("../db/db.json");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// function readDb() {
//     readFromFile("./db/db.json");
// };

router.get("/notes", (req, res) => res.json(fileData));

router.post("/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, fileData);
    // readDb();

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(fileData);
  } else {
    res.json("Error in posting note");
  }
});

module.exports = router;

