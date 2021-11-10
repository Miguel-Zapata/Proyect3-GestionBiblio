const express = require("express");
const User = require("../models/UserModel");
const AuthRouter = express.Router();

// Crea un Nuevo Usuario
AuthRouter.post("/", async(req, res) => {
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

// Login
AuthRouter.post("/login", async(req, res) => {
    try {
        let { email, password } = req.body;
        let userEmail = await User.findOne({ email: email }); // lluis entra al if, pero se queda pensando
        // console.log(userEmail);
        if (userEmail.password == password && userEmail.email == email) {
            // console.log("LOGIN!!!");
            return res.send("LOGIN");

        } else {
            console.log("OUT!!!")
            return res.send("OUT")
        }

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = AuthRouter;