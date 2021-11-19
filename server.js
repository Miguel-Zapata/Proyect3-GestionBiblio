require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { checkToken } = require('./middlewares');

const Auth = require("./routes/Auth.Routes") // Modificar a minusculaRouter
const User = require("./routes/User.Routes");
const Library = require("./routes/Library.Routes");
const Card = require("./routes/Card.Routes");
const Booking = require("./routes/Booking.Routes");

const connectDB = require('./DB/connection.js');
connectDB();

// Postman Frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/authentications', Auth);
app.use('/api/users', checkToken, User);
app.use('/api/libraries', checkToken, Library);
app.use('/api/cards', Card);
app.use('/api/bookings', Booking);

// Puerto
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });