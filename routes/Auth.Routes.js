const express = require("express");
const User = require("../models/UserModel");
const AuthRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { env: { JWT_SECRET } } = process;


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

// Crea un Nuevo Usuario
AuthRouter.post("/create-user", async(req, res) => {
    try {
        let { name, surname, user_Name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        let user = new User({
            name,
            surname,
            user_Name,
            email,
            password: hash
        })
        if (password) {
            validateEmail;
        }
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
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Información Incorrecta"
            })
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Información Incorrecta"
            })
        }

        // Crear Token
        let token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "24h" });

        return res.json({
            success: true,
            message: "ESTÁS LOGIN",
            token
        })

        /* let userEmail = await User.findOne({ email: email }); // lluis entra al if, pero se queda pensando
        // console.log(userEmail);
        if (userEmail.password == password && userEmail.email == email) {
            // console.log("LOGIN!!!");
            return res.send("LOGIN");

        } else {
            console.log("OUT!!!")
            return res.send("OUT")
        } */

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = AuthRouter;