require('dotenv').config();
const cors = require('cors');

// ... other imports HEROKU
const path = require("path")


// cloudinary
require('cloudinary').config();
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;


const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { checkToken } = require('./middlewares');

const authRouter = require("./routes/Auth.Routes")
const userRouter = require("./routes/User.Routes");
const libraryRouter = require("./routes/Library.Routes");
const cardRouter = require("./routes/Card.Routes");
const bookingRouter = require("./routes/Booking.Routes");

const connectDB = require('./DB/connection.js');
connectDB();

// ... other app.use middleware HEROKU
app.use(express.static(path.join(__dirname, "client", "build")))

// Postman Frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Rutas
app.use('/api/authentications', authRouter);
app.use('/api/users', checkToken, userRouter);
app.use('/api/libraries', checkToken, libraryRouter);
app.use('/api/cards', cardRouter);
app.use('/api/bookings', bookingRouter);


// Right before your app.listen(), add this: HEROKU
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Puerto
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });