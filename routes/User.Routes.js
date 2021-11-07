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
        let { name, surname, user_Name, email, password } = req.body;
        let user = new User({
            name,
            surname,
            user_Name,
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
            message: err.message || err._message
        });
    }
});

// Modificar datos del usuario.
UserRouter.put("/find/:id/update", async(req, res) => {
    try {
        const { id } = req.params;
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
UserRouter.delete("/find/:id/delete", async(req, res) => {
    try {
        const { id } = req.params;
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

module.exports = UserRouter;