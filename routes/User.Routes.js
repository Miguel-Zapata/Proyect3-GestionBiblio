const express = require("express");
const User = require("../models/UserModel");
const UserRouter = express.Router();

// Modificar datos del usuario.
UserRouter.put("/update", async(req, res) => {
    try {
        const { id } = req.body;
        let { name, surname, user_Name, email, password } = req.body;
        const user = await User.findById(id);
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
        const { id } = req.body;
        const user = await User.findByIdAndDelete(id);
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
UserRouter.get("/find", async(req, res) => {
    try {
        const { id } = req.body;
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
        const { id } = req.body;
        const myUser = await User.findById(id);
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
        const { id } = req.body;
        const myUser = await User.findById(id);
        let bookingsDelete = myUser.bookings.splice(0, myUser.bookings.length);
        await myUser.save();

        return res.send({
            success: true,
            message: 'Todas tus reservas han sido eliminadas'
        });
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
        const { id, bookId } = req.body;
        const myUser = await User.findById(id);
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