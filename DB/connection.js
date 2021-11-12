const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.URI;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('conectado!');
}

module.exports = connectDB;