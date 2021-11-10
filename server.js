// Esto enlaza express con el archivo .js
const express = require('express');
const app = express();

// Esto es para proteger datos. La constante PORT está en el archivo .env y saca la info desde ahí.
require('dotenv').config();
const PORT = process.env.PORT;

// Conecta el archivo de la ruta con este.
const connectDB = require('./DB/connection.js');
connectDB();

// Esto para poder crear desde Postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importo la ruta de User
const Auth = require("./routes/Auth.Routes")
const User = require("./routes/User.Routes");
const Library = require("./routes/Library.Routes");
const Card = require("./routes/Card.Routes");
const Booking = require("./routes/Booking.Routes");


// Indico nombre de ruta y ruta real que quiero usar

app.use('/api/authentications', Auth); // lluis
app.use('/api/users', User); // bifurcación
app.use('/api/libraries', Library);
app.use('/api/cards', Card);
app.use('/api/bookings', Booking);













// Esto es para trabajar en el puerto que le digamos
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });




// Esto es para que fs no salga Undefined
// const fs = require("fs");

// Esto es una ruta
/* app.get("/", (req, res) => {
    return res.send("Hello moon")
})

app.post("/create", (req, res) => {
    let { nombre, ciudad } = req.body;

    let obj = {
        nombre,
        ciudad
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(obj), (err) => {
        if (err) {
            return res.status(403).send({
                success: false,
                message: err
            });
        }
        return res.status(201).send({
            success: true,
            message: "Creado tope guay"
        });
    });
});

app.get("/info/:ms", (req, res) => {
    let parametro = req.params.ms
    fs.readFile(`./data/${parametro}.json`, (err, data) => {
        if (err) {
            return res.status(403).send({
                success: false,
                message: err
            });
        }
        return res.send({
            success: true,
            message: "Leido correcto",
            data: JSON.parse(data)
        });
    });
});
 */