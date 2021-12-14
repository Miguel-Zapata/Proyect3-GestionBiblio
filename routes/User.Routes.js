const express = require("express");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");
const UserRouter = express.Router();

// Modificar datos del usuario.
UserRouter.put("/update", async(req, res) => {
    try {
        const { id } = req.user;
        let { name, surname, user_Name, email, password } = req.body;
        const user = await User.findById(id);

        if (!user._id.equals(id)) {
            return res.status(403).json({
                success: false,
                message: "No puedes modificar el Usuario de otra persona"
            });
        }

        if (name) {
            user.name = name
        }
        if (surname) {
            user.surname = surname
        }
        if (user_Name) {
            user.user_Name = user_Name
        }
        if (email) {
            user.email = email
        }
        if (password) {
            user.password = password
        }
        const updateUser = await user.save();
        return res.send({
            success: true,
            message: `${user.user_Name} se ha modificado correctamente`
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar mi Usuario
UserRouter.get("/myuser", async(req, res) => {
    try{
        const { id } = req.user;
        const myUser = await User.findById(id);
        return res.send({
            success: true,
            myUser
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar Usuario
UserRouter.delete("/delete", async(req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findByIdAndDelete(id);

        if (!user._id.equals(id)) {
            return res.status(403).json({
                success: false,
                message: "No puedes eliminar el Usuario de otra persona"
            });
        }

        return res.send({
            success: true,
            message: `el usuario ${user.user_Name} a sido eliminado`
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar todos los Users
UserRouter.get("/", async(req, res) => {
    try {
        const users = await User.find({});
        return res.send({
            success: true,
            users
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar 1 usuario concreto.
UserRouter.get("/find/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.send({
            success: true,
            user
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar mis Reservas
UserRouter.get("/mybookings", async(req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id).populate({
            path: "bookings",
            select: "card start_Date finish_Date",
            populate: {
                path: "card",
                select: "title portada"
            }
        });

        if (!user._id.equals(id)) {
            return res.status(403).json({
                success: false,
                message: "No puedes acceder a las reservas de otro Usuario"
            });
        }

        return res.send({
            success: true,
            myBookings: user.bookings
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar 1 de mis Reservas
UserRouter.get("/mybookings/:bookingId", async(req, res) => {

    try {
        const { id } = req.user;
        const { bookingId } = req.params;
        const user = await User.findById(id)

        if (!user._id.equals(id)) {
            return res.status(403).json({
                success: false,
                message: "No puedes acceder a las reservas de otro Usuario"
            });
        }

        let reservas = user.bookings;
        let index = reservas.indexOf(bookingId);
        if (index == -1) {
            return res.status(404).send({
                success: false,
                message: 'Reserva no encontrada',
            });
        }

        let reserva = await Booking.findById(bookingId);
        return res.send({
            success: true,
            reserva
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }

});

// Eliminar TODAS mis Reservas
UserRouter.delete("/mybookings/delete", async(req, res) => {
    try {
        const { id } = req.user;
        const myUser = await User.findById(id);
        if (myUser._id.equals(id)) {
            let bookingsDelete = myUser.bookings.splice(0, myUser.bookings.length);
            await myUser.save();
            return res.send({
                success: true,
                message: 'Todas tus reservas han sido eliminadas'
            });
        }

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }

});

// Eliminar 1 de mis Reservas
UserRouter.delete("/mybookings/delete/book", async(req, res) => {
    try {
        const { id } = req.user;
        const { bookId } = req.body;
        const user = await User.findById(id);

        if (!user._id.equals(id)) {
            return res.status(403).json({
                success: false,
                message: "No puedes eliminar una reserva de otro Usuario"
            });
        }

        let reservas = user.bookings;
        let index = reservas.indexOf(bookId);

        if (index == -1) {
            return res.status(404).send({
                success: false,
                message: 'Reserva no encontrada',
            });
        }
        reservas.splice(index, 1);
        await user.save();
        return res.send({
            success: true,
            message: 'Tu libro se ha desvanecido',
            reservas
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }

});

module.exports = UserRouter;