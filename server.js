const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoute = require('./routes/htmlRoute.js');
const apiRoute = require('./routes/apiRoute.js');

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.static('public'));
// creating req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoute);
app.use('/api', apiRoute);

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// const data = req.body;
// const bd = fs.readFile()