const express = require('express');
const fs = require('fs');
const path = require('path');
const fileData = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.static('public'));
// creating req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
  });

app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ err });
    }

    res.json(data);
  });
});

//   app.post()

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// const data = req.body;
// const bd = fs.readFile()