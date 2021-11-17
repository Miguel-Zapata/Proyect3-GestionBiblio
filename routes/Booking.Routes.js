// FALTA validación de Reserva

const express = require("express");
const Booking = require("../models/BookingModel");
const User = require("../models/UserModel");
const Library = require("../models/LibraryModel");
const { checkToken } = require('../middlewares');
const BookingRouter = express.Router();

// Crear Reserva + añadir reserva al usuario + valida libro +valida biblioteca
BookingRouter.post("/", checkToken, async(req, res) => {
    try {
        const user = req.user.id;
        const { card, library, start_Date, finish_Date } = req.body;
        let st_Date
        let fin_Date

        if (start_Date) {
            st_Date = new Date(start_Date);
            st_Date.setHours(st_Date.getHours() + 2);
        }
        if (start_Date) {
            fin_Date = new Date(start_Date);
            fin_Date.setDate(fin_Date.getDate() + 15);
        }

        let booking = new Booking({
            user,
            card,
            library,
            condition: true,
            start_Date: st_Date,
            finish_Date: fin_Date,
        })

        let libraryFind = await Library.findById(library);
        let libro = libraryFind.cards.find(item => {
            return item.card.equals(card);
        });

        // ESTUDIAR ESTO
        console.log(libro.condition);
        console.log(libraryFind.give);
        if ((libro.condition == true) && (libraryFind.give == true)) {
            const newBooking = await booking.save();
            let arrayBooking = await User.findById(user);
            arrayBooking.bookings.push(newBooking._id);
            await arrayBooking.save();
            return res.status(201).send({
                success: true,
                booking: newBooking
            });
        } else {
            return res.send("ERROR AL CREAR LA RESERVA");
        }

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Modificar Reserva // SOLO ADMIN
BookingRouter.put("/find/:id/update", async(req, res) => {
    try {
        const { id } = req.params;
        let { user, card, library, condition, start_Date, finish_Date } = req.body;
        const booking = await Booking.findById(id);
        if (user) {
            booking.user = user
        }
        if (card) {
            booking.card = card
        }
        if (library) {
            booking.library = library
        }
        if (condition) {
            booking.condition = condition
        }
        if (start_Date) {
            booking.start_Date = start_Date
        }
        /* if (finish_Date) {
            booking.finish_Date = finish_Date
        } */
        const updateBooking = await booking.save();

        return res.send({
            success: true,
            message: `Su reserva se ha modificado correctamente`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar 1 Reserva // SOLO ADMIN
BookingRouter.delete("/find/:id/delete", async(req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);
        return res.send({
            success: true,
            message: `Su reserva ha sido eliminada`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar todas Reservas // SOLO ADMIN
BookingRouter.get("/", async(req, res) => {
    try {
        const bookings = await Booking.find({});
        return res.send({
            success: true,
            bookings
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar 1 Reserva // SOLO ADMIN
BookingRouter.get("/find/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);
        return res.send({
            success: true,
            booking
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = BookingRouter;