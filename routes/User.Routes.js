// FALTA COMPROBAR: Eliminar todas las reservas y Eliminar 1 Reserva

const express = require("express");
const User = require("../models/UserModel");
const UserRouter = express.Router();

// Modificar datos del usuario.
UserRouter.put("/update", async(req, res) => {
    try {
        const { id } = req.user;
        // const id = req.user.id // igual que arriba
        let { name, surname, user_Name, email, password } = req.body;
        const user = await User.findById(id);

        if (!user._id.equals(id)) {
            return res.json({
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

// Eliminar Usuario
UserRouter.delete("/delete", async(req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findByIdAndDelete(id);

        if (!user._id.equals(id)) {
            return res.json({
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
        const myUser = await User.findById(id);

        if (!myUser._id.equals(id)) {
            return res.json({
                success: false,
                message: "No puedes acceder a las reservas de otro Usuario"
            });
        }

        return res.send({
            success: true,
            myBookings: myUser.bookings
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
        const bookId = req.body;
        const myUser = await User.findById(id);

        if (!myUser._id.equals(id)) {
            return res.json({
                success: false,
                message: "No puedes eliminar una reserva de otro Usuario"
            });
        }

        let bookingsDelete = myUser.bookings;
        const bookDelete = bookingsDelete.find(book => book == bookId);
        let index = bookingsDelete.indexOf(bookDelete);
        bookingsDelete.splice(index, 1);
        await myUser.save();
        return res.send({
            success: true,
            message: 'Tu libro se ha desvanecido',
            bookingsDelete
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