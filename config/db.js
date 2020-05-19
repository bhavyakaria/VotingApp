const mongoose = require('mongoose');
require('dotenv').config();

// map global promises
mongoose.Promise = global.Promise;

// mongoose connect
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log(`MongoDB connected`))
    .catch((err) => console.log(err));