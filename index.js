const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const poll = require('./routes/poll');
const app = express();

// db config
const db = require('./config/db');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors
app.use(cors());

app.use('/poll', poll);

const port = 3000;
// start server
app.listen(port, () => console.log(`Server started on ${port}`));
