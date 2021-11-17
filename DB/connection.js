require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.URI;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('conectado!');
}

module.exports = connectDB;