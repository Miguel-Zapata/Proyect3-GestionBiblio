// añadir reserva a un usuario

const express = require("express");
const Booking = require("../models/BookingModel");
// mirara usuario
const BookingRouter = express.Router();

// Crear Reserva + añadir reserva al usuario
BookingRouter.post("/", async(req, res) => {
    try {
        let { user, card, library, condition, start_Date, finish_Date } = req.body;
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
            condition, // Boolean(condition)  //lluis con Boolean me pone siempre en true.
            start_Date: st_Date,
            finish_Date: fin_Date, //lluis para que me aparezca tengo que poner la fecha de inicio.
        })
        const newBooking = await booking.save();
        return res.status(201).send({
            success: true,
            booking: newBooking
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Modificar Reserva
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
        if (finish_Date) {
            booking.finish_Date = finish_Date
        }
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

// Eliminar Reserva
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

// Mostrar todas Reservas
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

// Mostrar 1 Reserva
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