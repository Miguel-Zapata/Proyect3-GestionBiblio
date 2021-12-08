const express = require("express");
const User = require("../models/userModel");
const AuthRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { env: { JWT_SECRET } } = process;


let validatePassword = function(password) {
    var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,24}$/;
    return reg.test(password);
}
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

// Crea un Nuevo Usuario
AuthRouter.post("/create-user", async(req, res) => {
    try {
        const { name, surname, user_Name, email, password } = req.body;
        if (!validatePassword(password)) {
            return res.json({
                success: false,
                message: "La contraseña debe contener al menos 1 número (0-9), 1 mayúscula (A-Z) y 1 caracter especial (!@#$%^&*)"
            });
        }
        if (!validateEmail(email)) {
            return res.json({
                success: false,
                message: "El email no es válido. Comprueba que no haya algún error"
            });
        }

        if (!name || !surname || !user_Name || !email || !password) {
            return res.json({
                success: false,
                message: "Faltan campos por rellenar"
            });
        }

        let userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.json({
                success: false,
                message: "Este correo ya Existe"
            });
        }
        let userNick = await User.findOne({ user_Name });
        if (userNick) {
            return res.json({
                success: false,
                message: "Este nombre de Usuario ya Existe"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        let user = new User({
            name,
            surname,
            user_Name,
            email,
            password: hash
        });

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
            });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Información Incorrecta"
            });
        }

        // Crear Token
        let token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1y" });

        return res.json({
            success: true,
            message: "ESTÁS LOGIN",
            token
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = AuthRouter;