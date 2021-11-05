// Crear Usuario
// Modificar datos del usuario
// Eliminar el usuario
// Mostrar todos los usuarios.
// Mostrar 1 usuario concreto.

const express = require("express");
const User = require("../models/UserModel");
const UserRouter = express.Router();

// Crea un Nuevo Usuario
UserRouter.post("/", async(req, res) => {
    try {
        let { name, surname, userName, email, password } = req.body;
        let user = new User({
            name,
            surname,
            userName,
            email,
            password
        })
        const newUser = await user.save();
        return res.status(201).send({
            success: true,
            user: newUser
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message
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
            message: err.message
        });
    }

});



module.exports = UserRouter;